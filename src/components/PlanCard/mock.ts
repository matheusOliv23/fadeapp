import { PlanCardProps } from '.'

export const plans = [
  {
    planType: 'Semanal',
    price: '9.99',
    haveOffer: false,
    offer: '54',
    image: '/image4.png',
    buttonText: 'Assine',
  },
  {
    planType: 'Mensal',
    price: '22.99',
    haveOffer: true,
    offer: '54',
    image: '/image3.png',
    buttonText: 'Assine',
  },
  {
    planType: 'Anual',
    price: '239.88',
    haveOffer: true,
    offer: '13',
    image: '/image3.png',
    buttonText: 'Assine',
  },
] as PlanCardProps[]
