import React, { useCallback, useRef } from "react"
import { getSineWaveColor, SineWaveCategory } from "../domain/sineWave"
import { Canvas } from "./Canvas"

interface SineWaveProps {
  category: SineWaveCategory
  width: number
}

export const SineWave: React.FC<SineWaveProps> = ({ category, width }) => {
  const sineWaveColor = getSineWaveColor(category)
  const step = useRef(4)

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      ctx.canvas.width = width
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.save()

      plotSine(ctx, sineWaveColor, step.current)
      ctx.restore()

      step.current += 4
    },
    [sineWaveColor, width]
  )

  return (
    <div>
      <Canvas draw={draw} />
    </div>
  )
}

function plotSine(
  ctx: CanvasRenderingContext2D,
  color: string,
  xOffset: number
) {
  let x = 0
  let y = 0

  const amplitude = 40
  const frequency = 20
  const { width, height } = ctx.canvas

  ctx.beginPath()
  ctx.lineWidth = 2
  ctx.strokeStyle = color

  while (x < width) {
    y = height / 2 + amplitude * Math.sin((x + xOffset) / frequency)
    ctx.lineTo(x, y)
    x++
  }
  ctx.stroke()
}
