import { describe, it, expect } from "vitest"
import { maxScore } from "./1423.可获得的最大点数"

describe("test", () => {
  it("Case 1", () => {
    expect(maxScore([1, 2, 3, 4, 5, 6, 1], 3)).toBe(12)
  })

  it("Case 2", () => {
    expect(maxScore([2, 2, 2], 2)).toBe(4)
  })

  it("Case 3", () => {
    expect(maxScore([9, 7, 7, 9, 7, 7, 9], 7)).toBe(55)
  })

  it("Case 4", () => {
    expect(maxScore([1, 1000, 1], 1)).toBe(1)
  })

  it("Case 5", () => {
    expect(maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3)).toBe(202)
  })
})
