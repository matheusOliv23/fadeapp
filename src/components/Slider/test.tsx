import { render, screen } from '@testing-library/react'

import { Slider } from '.'

const { getByRole } = screen

describe('<Slider />', () => {
  it('should render the heading', () => {
    render(<Slider />)

    const heading = getByRole('heading', { name: 'Slider' })

    expect(heading).toBeInTheDocument()
  })
})
