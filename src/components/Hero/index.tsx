import { Button } from 'components/Button'
import { Headline } from 'components/Headline'
import {
  ButtonContainer,
  HeroContainer,
  Subtitle,
  TitleContainer,
  Try,
} from './styles'

export interface HeroProps {
  subtitle: string
  img: string
  headlineTitle: string
  textButton: string
  minorText: string
}

export const Hero = ({
  subtitle,
  img,
  headlineTitle,
  textButton,
  minorText,
}: HeroProps) => {
  return (
    <div
      className={HeroContainer}
      data-testid="hero"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        objectFit: 'contain',
        height: '100vh',
      }}
    >
      <div className={TitleContainer}>
        <Headline position="center" title={headlineTitle} />
        <p className={Subtitle}>{subtitle}</p>

        <div className={ButtonContainer}>
          <Button>{textButton}</Button>
          <p className={Try}>{minorText}</p>
        </div>
      </div>
    </div>
  )
}
