import { IBoard } from "../board";
import IToyRobot from "./IToyRobot";
import { Direction, Turn } from "./Direction";

class ToyRobot implements IToyRobot {
    board: IBoard;
    direction: Direction;
    start: [Number, Number];
    constructor(Board: IBoard, direction: Direction, start: [Number, Number]) {
        this.board = Board;
        this.direction = direction
        this.start = start;
    }

    place = (coords: [number, number], direction: Direction): IToyRobot => {
        return this
    }

    move = (): IToyRobot => {
        return this
    }

    turn = (turn: Turn): IToyRobot => {
        return this
    }
}

export default ToyRobot;
