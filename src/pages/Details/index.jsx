import { useState, useEffect } from "react";
import { Container, Links, Content } from "./styles";
import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Section } from "../../Components/Section";
import { Tag } from "../../Components/Tag";
import { ButtonText } from "../../Components/ButtonText";

export function Details() {
  const [data, setData] = useState(null);
  const navigate = useNavigate()

  const params = useParams();

  function handleBackPag(){
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja remover a nota?")
    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, [params]);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleRemove} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {data.links && (
              <Section title="Links úteis">
                <Links>
                  {data.links.map(link => (
                    <li key={String(link.id)}>
                      <a href={link.url} target="_blank">
                        {link.url}
                        </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data.tags && (
              <Section title="Marcadores">
                {data.tags.map(tag => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar"  onClick={handleBackPag}/>
          </Content>
        </main>
      )}
    </Container>
  );
}
