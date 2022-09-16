import { render, screen } from '@testing-library/react'

import { PlanCard, PlanCardProps } from '.'

const { getByRole, queryByTestId, getByTestId } = screen

export const data: PlanCardProps = {
  planType: 'Semanal',
  price: '9.99',
  haveOffer: false,
  offer: '0',
  image: '/image4.png',
  buttonText: 'Assine',
}

describe('<PlanCard />', () => {
  it('should render by default', () => {
    render(<PlanCard {...data} />)

    const heading = getByRole('heading', { name: 'Semanal' })
    const button = getByRole('button', { name: 'Assine' })
    const offer = queryByTestId('offer')
    const image = getByTestId('planCard')

    expect(heading).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    expect(offer).not.toBeInTheDocument()
    expect(image).toHaveStyle('backgroundImage: url(/image4.png)')
    expect(heading).toMatchSnapshot()
  })
  it('should have a offer card on the top', () => {
    render(
      <PlanCard
        planType="Mensal"
        haveOffer
        offer="25"
        price="29"
        image="/image3.png"
        buttonText="Assine"
      />,
    )

    const offer = queryByTestId('offer')
    expect(offer).toBeInTheDocument()
  })
})
