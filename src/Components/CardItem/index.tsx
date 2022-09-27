import CheckButton from './checkoutButton';
import { Container, ImageContainer, CardContent, CardTitle, CardBody } from './styles'

interface CardItemProps {
  card: {
    id: string;
    title: string;
    description: string;
    price: string;
    image: string;
  }
}

export function CardItem(props: CardItemProps) {
  return (
    <Container>
      <ImageContainer>
        <img src={props.card.image} alt="" />
      </ImageContainer>
      <CardContent>

        <CardTitle>
          <h3>{props.card.title}</h3>
        </CardTitle>
        <CardBody>
          <p>{props.card.description}</p>
          <p>{props.card.price}</p>
        </CardBody>
        <CheckButton  id={props.card.id} />

      </CardContent>

    </Container>
  )
}