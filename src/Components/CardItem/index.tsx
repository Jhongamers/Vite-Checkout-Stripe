import CheckButton from './checkoutButton';
import { Container, ImageContainer, CardContent, CardTitle, CardBody } from './styles'

interface CardItemProps{
  card: {
  title: string;
  description: string;
  image:string;
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
      </CardBody>
<CheckButton />
      </CardContent>  
     
    </Container>
  )
}