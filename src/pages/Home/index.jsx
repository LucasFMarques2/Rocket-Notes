import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Note } from "../../Components/Note";
import { ButtonText } from "../../Components/ButtonText";
import { Section } from "../../Components/Section";


export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <li>
          <ButtonText isActive title="Todos" />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Node" />
        </li>
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
