import CheckButton from '../CardItem/checkoutButton'
import { ListProduct } from './styles'
import { CardItem } from '../CardItem'
import { useState } from 'react'

interface Cards{
  title: string;
  description: string;
  image:string;
}

export default function index() {
 const [cards,setCards] = useState<Cards[]>([{
  title: 'relogio',
  description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem laudantium ipsa aliquid ad vero perferendis at doloribus recusandae, officiis eaque, consequatur libero blanditiis nobis laborum voluptas eum ducimus omnis quasi!',
  image:'https://cemstoretec.com.br/wp-content/uploads/2022/02/d14a9712-636e-4d27-b298-b5e38e8e913f.jpg',
}]);

  return (
    <ListProduct>
    {cards.map((card) =>{
     return <CardItem card={card} />
    })}
                </ListProduct>
  )
}
