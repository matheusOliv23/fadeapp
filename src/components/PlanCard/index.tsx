import { Button } from 'components/Button'
import {
  ButtonContainer,
  Container,
  MinorPlanType,
  OfferStyle,
  PlanTypeStyle,
  PriceContainer,
  PriceStyle,
  SignStyle,
  TextContainer,
} from './styles'

export interface PlanCardProps {
  planType: 'Semanal' | 'Mensal' | 'Anual'
  price: string
  haveOffer?: boolean
  offer: string
  image: string
  buttonText: string
}

export const PlanCard = ({
  planType,
  price,
  haveOffer,
  offer,
  image,
  buttonText,
}: PlanCardProps) => {
  return (
    <div
      className={Container}
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        opacity: 0.9,
        objectFit: 'contain',
      }}
      data-testid="planCard"
    >
      {haveOffer && (
        <div data-testid="offer" className={OfferStyle}>
          {offer}%
        </div>
      )}

      <div
        className={TextContainer}
        style={{
          background:
            'linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(33, 41, 72, 0.71) 0.01%, rgba(33, 41, 72, 0.5) 37.5%, #212948 72.4%)',
        }}
      >
        <h3 className={PlanTypeStyle}>{planType}</h3>
        <div className="flex flex-col items-center">
          <div className={PriceContainer}>
            <div className={SignStyle}>R$</div>
            <p className={PriceStyle}>{price}</p>
            <p className={MinorPlanType}>/{planType}</p>
          </div>

          {planType === 'Mensal' && (
            <p className="text-base">{`(Equivalente a $${(
              Number(price) / 4
            ).toFixed(2)} por semana)`}</p>
          )}
          {planType === 'Anual' && (
            <p className="text-base">{`(Equivalente a $${(
              Number(price) / 12
            ).toFixed(2)} por mês)`}</p>
          )}
        </div>

        <div className={ButtonContainer}>
          <Button style={{ height: '2.875rem', width: '16rem' }}>
            {buttonText}
          </Button>
          <p className="py-2 text-base text-white">Renovação automática</p>
        </div>
      </div>
    </div>
  )
}
