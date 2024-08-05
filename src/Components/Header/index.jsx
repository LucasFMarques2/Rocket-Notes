import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  const {signOut} = useAuth()
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/LucasFMarques2.png" alt="Foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Lucas Freitas</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
