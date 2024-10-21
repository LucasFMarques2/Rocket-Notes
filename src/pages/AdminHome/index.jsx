import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container, Content, UserList, UserItem, DeleteButton } from "./style"; 
import { Header } from "../../Components/Header";
import { Section } from "../../Components/Section";

export function AdminHome() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm("Tem certeza que deseja deletar este usuário?");
    if (confirmDelete) {
      try {
        await api.delete(`/users/${userId}`);
        alert("Usuário deletado com sucesso!");

        const response = await api.get("/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        alert("Erro ao deletar o usuário.");
      }
    }
  };


  return (
    <Container>
      <Header />
      <Content>
        <Section title="Lista de Usuários" />
        {users.length === 0 ? (
          <p>Não existem usuários criados.</p>
        ) : (
          <UserList>
            {users.map(user => (
              <UserItem key={user.id}>
                <span>{user.name}</span>
                <div>
                  <DeleteButton onClick={() => handleDeleteUser(user.id)}>Deletar</DeleteButton>
                </div>
              </UserItem>
            ))}
          </UserList>
        )}
      </Content>
    </Container>
  );
}
