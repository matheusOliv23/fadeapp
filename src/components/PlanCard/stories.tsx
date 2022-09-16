import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PlanCard } from '.'
import { plans } from './mock'

export default {
  title: 'Components/PlanCard',
  component: PlanCard,
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME',
    },
  },
  args: {
    image: plans[0].image,
    planType: plans[0].planType,
    price: plans[0].price,
    offer: plans[0].offer,
    haveOffer: plans[0].haveOffer,
    buttonText: plans[0].buttonText,
  },
} as ComponentMeta<typeof PlanCard>

const Template: ComponentStory<typeof PlanCard> = (args) => (
  <PlanCard {...args} />
)

export const Default = Template.bind({})

export const WithMensalOffer = Template.bind({})
WithMensalOffer.args = {
  planType: 'Mensal',
  price: '29.99',
  haveOffer: true,
  offer: '54',
  image: '/image3.png',
  buttonText: 'Assine',
}

export const WithAnualOffer = Template.bind({})
WithAnualOffer.args = {
  planType: 'Anual',
  price: '239.88',
  haveOffer: true,
  offer: '13',
  image: '/image2.png',
  buttonText: 'Assine',
}
