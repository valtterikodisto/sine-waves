import React, { useRef, useEffect } from "react"

interface CanvasProps {
  draw: (ctx: CanvasRenderingContext2D) => void
}

export const Canvas: React.FC<CanvasProps> = ({ draw, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    let animationFrameId: number

    const render = () => {
      if (!context) {
        console.warn("Could not find context")
        return
      }

      draw(context)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [draw])

  return (
    <>
      <canvas ref={canvasRef} {...props} />
    </>
  )
}
