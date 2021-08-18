export const assertUnreachable = (x: never): never => {
  throw new Error("UnreachableError")
}

/**
 * Min is inclusive, max is exclusive
 */
export const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min)
