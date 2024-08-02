import { utils } from '../utils'

const input: string[] = utils.readFileAsArray('three/input.txt', '')

const part1 = () => {
    // part 1
    const calcPos = (dir: string, curPos: number[], visited: number[][]): { pos: number[], visited: number[][]} => {
        const getNewPos = (char: string, pos: number[]): number[] => {
            switch (char) {
                case '^':
                    return [pos[0], pos[1] + 1]
                case '>':
                    return [pos[0] + 1, pos[1]]
                case 'v':
                    return [pos[0], pos[1] - 1]
                case '<':
                    return [pos[0] - 1, pos[1]]
                default:
                    return [pos[0], pos[1]]
            }
        }
    
        const newPos = getNewPos(dir, curPos)
    
        const hasArray = (arr: number[][], item: number[]): boolean => 
            arr.some(el => JSON.stringify(el) === JSON.stringify(item))
        
        if (hasArray(visited, newPos)){
            return { pos: newPos, visited }
        } 
    
        return { pos: newPos, visited: [...visited, newPos]}
    }
    
    const result = input.reduce((acc, cur) => 
        calcPos(cur, acc.pos, acc.visited),
        { pos: [0,0], visited: [[0,0]] }
    )

    console.log(`visitedCount: ${result.visited.length}`)
}

const part2 = () => {
    const calcPos = (dir: string, curPos: number[], visited: number[][]): { pos: number[], visited: number[][]} => {
        const getNewPos = (char: string, pos: number[]): number[] => {
            switch (char) {
                case '^':
                    return [pos[0], pos[1] + 1]
                case '>':
                    return [pos[0] + 1, pos[1]]
                case 'v':
                    return [pos[0], pos[1] - 1]
                case '<':
                    return [pos[0] - 1, pos[1]]
                default:
                    return [pos[0], pos[1]]
            }
        }
    
        const newPos = getNewPos(dir, curPos)
    
        const hasArray = (arr: number[][], item: number[]): boolean => 
            arr.some(el => JSON.stringify(el) === JSON.stringify(item))
        
        if (hasArray(visited, newPos)){
            return { pos: newPos, visited }
        } 
    
        return { pos: newPos, visited: [...visited, newPos]}
    }

    console.log(`visitedCount: ${result.visited.length}`)
}

part1()