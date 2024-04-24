import { Container, Profile } from "./style";

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/LucasFMarques2.png"
          alt="Foto do usuário"
        />
        <div>
          <span>Bem-Vindo</span>
          <strong>Lucas Freitas Marques</strong>
        </div>
      </Profile>
    </Container>
  );
}
