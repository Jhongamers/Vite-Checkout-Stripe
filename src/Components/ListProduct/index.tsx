import { ListProduct } from './styles'
import { CardItem } from '../CardItem'
import { useState } from 'react'
import image from '../../assets/image-product.png'
import image2 from '../../assets/image-product-2.png'

interface Cards {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function index() {
  const [cards] = useState<Cards[]>([{

    id: 'price_1Llo25AKq1PRN8BJ8odUKWk7',
    title: 'Watch',
    description: 'this is a Watch',
    price: '10,00',
    image: image,

  },
  {
    id: 'price_1LmRhmAKq1PRN8BJKnvCyttd',
    title: 'Glasses',
    description: ' this is a Glasses',
    price: '5,00',
    image: image2,

  },

  ]);

  return (
    <ListProduct>
      {cards.map((card) => {
        return <CardItem key={card.id} card={card} />
      })}

    </ListProduct>
  )
}
