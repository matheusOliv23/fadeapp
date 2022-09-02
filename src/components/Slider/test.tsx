import { render } from '@testing-library/react'
import { TestimonialCardProps } from 'components/TestimonialCard'

import { Slider } from '.'

const data: TestimonialCardProps[] = [
  {
    name: 'John Doe',
    message: 'Loren ipsum dolor',
    image: 'http://cdn.com/photo-name.jpg',
  },
]

describe('<Slider />', () => {
  it('should snapshot', () => {
    const { container } = render(<Slider data={data} />)

    expect(container).toMatchSnapshot()
  })
})
