import { Container, Brand, Menu, Search, Content, NewNote } from "./style";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";

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

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
