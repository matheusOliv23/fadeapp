import React, { ReactNode } from 'react'

interface ISlider {
  title: string
}

interface SliderProps {
  slider: ISlider
  children: ReactNode
}

export default function SliderItem({ children }: SliderProps) {
  return (
    <div className=" inline-block h-full w-[25rem] p-[2rem]  ">
      <div className="column flex min-h-[30vh] flex-col items-center bg-cyan-500  p-[2rem]">
        {children}
      </div>
    </div>
  )
}
