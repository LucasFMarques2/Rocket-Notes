import { Container } from "./styled";
import { Tag } from "../../components/Tag";

export function Note({ data, ...rest }) {
  return (
    <Container>
      <h1>{data.title}</h1>
      {data.tags && (
        <footer>
          {data.tags.map(tag => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
