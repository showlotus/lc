function alphabetBoardPath(target: string): string {
  let res: string = ''
  let prevLetterLocation: number[] = [0, 0]
  let prevLetter: string = 'a'
  for (let i = 0; i < target.length; i++) {
    let t = getLocation(target[i])
    let diff = [t[0] - prevLetterLocation[0], t[1] - prevLetterLocation[1]]
    if (target[i] === prevLetter) {
      res += '!'
      continue
    } else if (target[i] === 'z') {
      res += diff[1] < 0 ? 'L'.repeat(-diff[1]) : ''
      res += 'D'.repeat(diff[0])
    } else if (prevLetter === 'z') {
      res += diff[0] < 0 ? 'U'.repeat(-diff[0]) : ''
      res += diff[1] > 0 ? 'R'.repeat(diff[1]) : ''
    } else {
      res += diff[0] > 0 ? 'D'.repeat(diff[0]) : 'U'.repeat(-diff[0])
      res += diff[1] > 0 ? 'R'.repeat(diff[1]) : 'L'.repeat(-diff[1])
    }
    res += '!'
    prevLetter = target[i]
    prevLetterLocation = t
  }
  return res
}

function getLocation(letter: string): number[] {
  let distance = letter.charCodeAt(0) - 'a'.charCodeAt(0)
  return [Math.floor(distance / 5), distance % 5]
}

let target: string = 'leet'

target = 'zone'
target = 'zza'

console.log(alphabetBoardPath(target))
