import React from "react"
import { css } from "styled-components"
import { SineWaveCategory, sineWaveCategories } from "../domain/sineWave"

const containerCss = css`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  margin-bottom: 10px;

  height: 100px;
  width: 100px;

  border: 5px solid black;
`

const inputCss = css`
  margin-right: 15px;
`

interface SineWaveSelectorProps {
  visibleSineWaveCategories: readonly SineWaveCategory[]
  setVisibleSineWaveCategories: React.Dispatch<
    React.SetStateAction<readonly SineWaveCategory[]>
  >
}

export const SineWaveSelector: React.FC<SineWaveSelectorProps> = ({
  visibleSineWaveCategories,
  setVisibleSineWaveCategories,
}) => {
  const createToggler = (sineWaveCategory: SineWaveCategory) => () =>
    setVisibleSineWaveCategories((categories) =>
      categories.includes(sineWaveCategory)
        ? categories.filter((c) => c !== sineWaveCategory)
        : categories.concat(sineWaveCategory)
    )

  const isVisible = (sineWaveCategory: SineWaveCategory) =>
    visibleSineWaveCategories.includes(sineWaveCategory)

  return (
    <div css={containerCss}>
      {sineWaveCategories.map((category) => (
        <div>
          <input
            type="checkbox"
            checked={isVisible(category)}
            onClick={createToggler(category)}
            css={inputCss}
          />
          <label>{category}</label>
        </div>
      ))}
    </div>
  )
}
