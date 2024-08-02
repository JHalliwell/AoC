import { utils } from "../utils"

const parseInput = (): string[] => {
    return utils.readFileAsArray('one/input.txt', '')
}

const part1 = (input: string[]): number => {
    return input.reduce((acc, cur) => cur === '(' ? acc + 1 : acc - 1, 0)
}

const part2 = (input: string[], floor: number, iterator: number): number => {
    const newFloor = input[iterator] === '(' ? floor + 1 : floor - 1
    
    if (newFloor === -1) return iterator + 1

    return part2(input, newFloor, iterator + 1)
}

const main = () => {
    const input: string[] = parseInput()
    console.log(`1 answer: ${part1(input)}`)
    console.log(`2 answer: ${part2(input, 0, 0)}`)
}

main()