import React, { useState } from "react"
import { css } from "styled-components"
import { SineWaveSelector } from "./components/SineWaveSelector"
import { SineWaveView } from "./components/SineWaveView"
import {
  createRandomSineWave,
  SineWaveCategory,
  sineWaveCategories,
} from "./domain/sineWave"

const sineWaves = Array(20).fill(0).map(createRandomSineWave)

const appContainerCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const App: React.FC = () => {
  const [visibleSineWaveCategories, setVisibleSineWaveCategories] =
    useState<readonly SineWaveCategory[]>(sineWaveCategories)

  return (
    <div css={appContainerCss}>
      <SineWaveSelector
        visibleSineWaveCategories={visibleSineWaveCategories}
        setVisibleSineWaveCategories={setVisibleSineWaveCategories}
      />
      <SineWaveView
        sineWaves={sineWaves}
        visibleSineWaveCategories={visibleSineWaveCategories}
      />
    </div>
  )
}
