import {
  TestimonialCard,
  TestimonialCardProps,
} from 'components/TestimonialCard'
import Image from 'next/image'
import { useState } from 'react'
import SliderItem from './SliderItem'
import { Carousel } from './styles'

interface SliderProps {
  data: TestimonialCardProps[]
}

export const Slider = ({ data }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  // const switchIndex = (index: any) => {
  //   setCurrentSlide(index)
  // }

  const next = () => {
    const index = currentSlide < data.length - 1 ? currentSlide + 1 : 0

    setCurrentSlide(index)
  }

  return (
    <div className="flex">
      <div onClick={next} className=" hidden cursor-pointer md:flex">
        <Image
          className="text-zinc-500 opacity-[0.6]"
          src="/Vector2.svg"
          width={42}
          height={82}
          alt="Seta maior"
        />
        <Image
          width={28}
          height={57}
          className="text-zinc-500 opacity-[0.6] "
          src="/Vector.svg"
          alt="Seta menor"
        />
      </div>
      <div className={Carousel}>
        <div className="m-0 mr-[4rem] md:mr-0 w-full whitespace-nowrap p-[2rem] md:p-[2rem]">
          <div
            onMouseDown={next}
            className="ease w-full  transition"
            style={{ transform: `translateX(${-currentSlide * 110}%)` }}
          >
            {data?.map((slide, index) => (
              <SliderItem slider={slide} key={index}>
                <TestimonialCard
                  name={slide.name}
                  message={slide.message}
                  image={slide.image}
                  key={index}
                />
              </SliderItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
