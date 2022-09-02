import React, { ReactNode } from 'react'

interface ISlider {
  name: string
  message: string
  image: string | StaticImageData
}

interface SliderProps {
  slider: ISlider
  children: ReactNode
}

export default function SliderItem({ children }: SliderProps) {
  return <div className=" inline-block h-full">{children}</div>
}
