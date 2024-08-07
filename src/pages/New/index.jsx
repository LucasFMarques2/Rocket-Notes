import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";

import { Container, Form } from "./styled";

import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { TextArea } from "../../Components/TextArea";
import { NoteItem } from "../../Components/NoteItem";
import { Section } from "../../Components/Section";
import { Button } from "../../Components/Button";


export function New() {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleAddTag(){
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote(){
    if(newLink){
      return alert("Existe uma link no campo de adicionar, mas não adicionou")
    }
    if(newTag){
      return alert("Existe uma tag no campo de adicionar, mas não adicionou")
    }
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("Nota cadastrada com sucesso!");
    navigate("/")
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" type="Text" onChange={e => setTitle(e.target.value)}/>
          <TextArea placeholder="Observações" onChange={e => setDescription(e.target.value)}/>

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
              key={String(index)}
              value={link} 
              onClick={() => handleRemoveLink(link)} />
            ))}

            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">

              {
                tags.map((tag, index) =>(
                  <NoteItem key={String(index)} value={tag} onClick={()=> handleRemoveTag(tag)}/>
                ))
              }

              <NoteItem 
              value={newTag} 
              isNew placeholder="Novo tag" 
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleAddTag}
               />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote}/>
        </Form>
      </main>
    </Container>
  );
}
