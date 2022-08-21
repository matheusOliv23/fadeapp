import { ReactNode, useState } from 'react'
import SliderItem from './SliderItem'
import { Carousel, CarouselInner, CarouselItem } from './styles'

interface ISlider {
  title: string
}

interface SliderProps {
  sliders?: ISlider[]
  interval?: number
  indicators?: boolean
  autoPlay?: boolean
  width?: number | string
  children: ReactNode
}

export const Slider = ({ width = '100%', children, sliders }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const switchIndex = (index: any) => {
    setCurrentSlide(index)
  }

  const next = () => {
    const index = currentSlide < sliders.length - 1 ? currentSlide + 1 : 0
    //const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1
    setCurrentSlide(index)
  }

  return (
    <div className="gap-70 flex">
      <div onClick={next} className="flex cursor-pointer">
        <img
          className="text-zinc-500 opacity-[0.6]"
          src="/Vector2.svg"
          style={{ marginRight: -15 }}
          width={42}
          height={82}
          alt=""
        />
        <img
          width={28}
          height={57}
          style={{ marginRight: 15 }}
          className="text-zinc-500 opacity-[0.6] "
          src="/Vector.svg"
          alt=""
        />
      </div>
      <div className={Carousel} onMouseOver={switchIndex}>
        <div className=" w-[1200px] whitespace-nowrap border-2 bg-[#212948]">
          <div
            onMouseDown={next}
            className="ease w-80 transition"
            style={{ transform: `translateX(${-currentSlide * 80}%)` }}
          >
            {sliders?.map((slide, index) => (
              <SliderItem slider={slide} key={index}>
                {children}
              </SliderItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
