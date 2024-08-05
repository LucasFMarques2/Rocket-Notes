import { Container } from './style';

// eslint-disable-next-line react/prop-types
export function Tag({title, ...rest}){
  return(
    <Container {...rest}>
      {title}
    </Container>
  )
}