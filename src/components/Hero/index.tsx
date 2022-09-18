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
  headlineTitle: string
  textButton: string
  minorText: string
}

export const Hero = ({
  subtitle,
  headlineTitle,
  textButton,
  minorText,
}: HeroProps) => {
  return (
    <div className={HeroContainer} data-testid="hero">
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
