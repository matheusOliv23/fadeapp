import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Slider } from '.'

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    design: {
      type: 'figma',
      url: 'FIGMA_URL_FRAME',
    },
  },
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />

export const Default = Template.bind({})
Default.args = {
  sliders: [{ title: 'teste' }],
  width: 1000,
}
