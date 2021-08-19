import { assertUnreachable, randomNumber } from "../util"
import * as uuid from "uuid"

export const sineWaveCategories = ["A", "B", "C"] as const
export type SineWaveCategory = typeof sineWaveCategories[number]
export type SineWaveObject = {
  id: string
  category: SineWaveCategory
}

export const getSineWaveColor = (category: SineWaveCategory): string => {
  switch (category) {
    case "A":
      return "blue"
    case "B":
      return "orange"
    case "C":
      return "purple"
    default:
      return assertUnreachable(category)
  }
}

export const createRandomSineWave = () => {
  return {
    id: uuid.v4(),
    category: sineWaveCategories[randomNumber(0, sineWaveCategories.length)],
  }
}
