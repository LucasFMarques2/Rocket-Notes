import { Container, Links, Content } from "./styles";
import {Link} from 'react-router-dom'
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução do React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            mollitia quidem itaque harum distinctio inventore placeat! Modi
            porro neque quas laborum minima, numquam inventore commodi? Dolores
            rerum aut nemo ea!
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express"></Tag>
            <Tag title="nodejs"></Tag>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
