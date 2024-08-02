import { utils } from "../utils"

const parseInput = (): number[][] => {
    const textByLine: string[] = utils.readFileAsArray('one/example.txt', 'x')

    // ['1x3x4', '4x8x4'] -> [['1', '3', '4'],['4', '8', '4']]

    return textByLine.map(line => line.split('x').map(c => Number(c)))
}

const main = () => {
    const input: number[][] = parseInput()

    // part 1
    const getSize = (dim: number[]): number => {
        const l = dim[0]
        const w = dim[1]
        const h = dim[2]
        const side0 = l * w
        const side1 = w * h
        const side2 = h * l

        const sArea = 2*l*w + 2*w*h + 2*h*l

         return sArea + Math.min(side0, side1, side2)
    }

    const result = input.reduce((acc, cur) => acc + getSize(cur), 0)

    console.log(result)

    // part 2
    const getRibbon = (dim: number[]): number => {
        const l = dim[0]
        const w = dim[1]
        const h = dim[2]

        const p0 = w + w + h + h
        const p1 = w + w + l + l
        const p2 = h + h + l + l

        const volume = l * w * h

        return volume + Math.min(p0, p1, p2)
    }

    const result2 = input.reduce((acc, cur) => acc + getRibbon(cur), 0)

    console.log(result2)
}

main()