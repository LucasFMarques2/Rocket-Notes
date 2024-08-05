import { Container, Form } from "./styled";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";
import { NoteItem } from "../../Components/NoteItem";
import { Section } from "../../Components/Section";
import { Button } from "../../Components/Button";
import {Link} from 'react-router-dom'

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input placeholder="Título" type="Text" />
          <TextArea placeholder="Observações" />
          <Section title="Links úteis">
            <NoteItem value="https://rocktseat.com.br" />
            <NoteItem value="" isNew placeholder="Novo link" />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem value="" isNew placeholder="Novo tag" />
            </div>
          </Section>
          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  );
}
