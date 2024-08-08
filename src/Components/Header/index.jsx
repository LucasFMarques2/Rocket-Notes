import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { Container, Profile, Logout } from "./styles";
import { api } from "../../services/api";
import avatarDefault from '../../assets/avatar_placeholder.svg'
import { useNavigate } from "react-router-dom";

export function Header() {
  const {signOut, user} = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarDefault;
  
  const navigation = useNavigate()

  function handleSingOut(){
    signOut();
    navigation("/")
  }

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSingOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
