import React, { useEffect, useRef, useState } from "react"
import { css } from "styled-components"
import { SineWaveCategory, SineWaveObject } from "../domain/sineWave"
import { SineWave } from "./SineWave"

const sineWaveWrapperCss = css`
  width: 900px;
`

const sineWaveContainerCss = css`
  border-left: 5px solid black;
  border-bottom: 5px solid black;
`

interface SineWaveViewProps {
  sineWaves: SineWaveObject[]
  visibleSineWaveCategories: readonly SineWaveCategory[]
  className?: string
}

export const SineWaveView: React.FC<SineWaveViewProps> = ({
  sineWaves,
  visibleSineWaveCategories,
  className,
}) => {
  const sineWaveContainerRef = useRef<HTMLDivElement | null>(null)
  const [sineWaveContainerWidth, setSineWaveContainerWidth] = useState(0)

  useEffect(() => {
    setSineWaveContainerWidth(sineWaveContainerRef.current?.clientWidth ?? 0)
  }, [])

  return (
    <section css={sineWaveWrapperCss} className={className}>
      {visibleSineWaveCategories.length > 0 ? (
        <div css={sineWaveContainerCss} ref={sineWaveContainerRef}>
          {sineWaves.map((sineWave) =>
            visibleSineWaveCategories.includes(sineWave.category) ? (
              <SineWave
                key={sineWave.id}
                category={sineWave.category}
                width={sineWaveContainerWidth}
              />
            ) : null
          )}
        </div>
      ) : null}
    </section>
  )
}
