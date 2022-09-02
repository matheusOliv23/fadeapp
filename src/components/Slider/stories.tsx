import { ComponentMeta, ComponentStory } from '@storybook/react'
import { testimonialUsersMock } from 'components/TestimonialCard/mock'
import { Slider } from '.'

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME',
    },
  },
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />

export const Default = Template.bind({})
Default.args = {
  data: testimonialUsersMock,
}
