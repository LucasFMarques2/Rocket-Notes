import { useState, useEffect } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Header } from "../../Components/Header";
import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { Input } from "../../Components/Input";
import { Note } from "../../Components/Note";
import { ButtonText } from "../../Components/ButtonText";
import { Section } from "../../Components/Section";

import { api } from "../../services/api";

export function Home() {
  const [tags, setTags] = useState([])

  useEffect(()=>{
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data)
    }

    fetchTags()
  },[])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header/>

      <Menu>
        <li><ButtonText title="Todos" isActive/></li>
       {
        tags && tags.map(tag =>(
          <li key={String(tag.id)}>
            <ButtonText 
              title={tag.name}
            />
          </li>
        ))
       }
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas" />
        <Note
          data={{
            title: "React",
            tags: [
              { id: 1, name: "React" },
              { id: 2, name: "Rocktseat" },
            ],
          }}
        />
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
