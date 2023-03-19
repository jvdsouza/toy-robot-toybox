import { IBoard, Obstacles } from "./IBoard";

class Board implements IBoard{
    length: number;
    width: number;
    obstacles: Obstacles;

    constructor(
        length: number, 
        width: number, 
        obstacles: {identifier: string, position: [number, number]} | {},
    ) {
        this.length = this.setLength(length).getLength();
        this.width = this.setWidth(width).getWidth();
        this.obstacles = this.setObstacles(obstacles);
    }

    getLength = (): number => {
        return this.length;
    }

    getWidth = (): number => {
        return this.width;
    }

    setLength = (length: number): IBoard => {
        if ((length) < 0) {
            this.length = 5;
        }
        return this;
    }

    setWidth = (width: number): IBoard => {
        if ((width) < 0) {
            this.width = 5;
        }
        return this;
    }

    getObstacles = (): Obstacles => {
        return this.obstacles
    }

    setObstacles = (obstacles: Obstacles): IBoard => {
        this.obstacles = obstacles
        return this
    }

    addObstacle = (position: [number, number]): IBoard => {
        const positionKey = this.generateObstacleKey(position);
        this.setObstacles(Object.assign(this.obstacles, {[positionKey]: position}));
        return this;
    }
 
    doesObstacleExist = (position: [number, number]): boolean => {
        return this.generateObstacleKey(position) in this.obstacles;
    }

    generateObstacleKey = (position: [number, number]): string => {
        return `${position[0]},${position[1]}`
    }
}

export default Board;
