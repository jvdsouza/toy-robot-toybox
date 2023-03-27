import { IBoard, Obstacles } from "./IBoard";

class Board implements IBoard {
    private length: number;
    private width: number;
    private obstacles: Obstacles;

    constructor(
        length: number, 
        width: number, 
        obstacles: [number, number][],
    ) {
        this.length = length;
        this.setLength(this.length);
        this.width = width;
        this.setWidth(this.width);
        this.obstacles = {};
        if(obstacles.length > 0) this.setObstacles(obstacles);
    }

    getLength = (): number => {
        return this.length;
    }

    getWidth = (): number => {
        return this.width;
    }

    setLength = (length: number): IBoard => {
        if (length <= 0) {
            this.length = 1;
        } else {
            this.length = length;
        }
        return this;
    }

    setWidth = (width: number): IBoard => {
        if (width <= 0) {
            this.width = 1;
        } else {
            this.width = width;
        }
        return this;
    }

    getObstacles = (): Obstacles => {
        return this.obstacles
    }

    setObstacles = (newObstacles: [number, number][]): IBoard => {
        this.obstacles = {};
        newObstacles.forEach((position) => {
            this.addObstacle(position);
        });

        return this;
    }

    addObstacle = (position: [number, number]): IBoard => {
        this.obstacles = {...this.obstacles, [this.generateObstacleKey(position)]: position};
        return this;
    }
 
    doesObstacleExist = (position: [number, number]): boolean => {
        return this.generateObstacleKey(position) in this.obstacles;
    }

    private generateObstacleKey = (position: [number, number]): string => {
        return `${position[0]},${position[1]}`
    }
}

export default Board;
