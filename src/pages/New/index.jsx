import { Container, Form } from "./styled";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
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
