import { IBoard } from "../board";
import IToyRobot from "./IToyRobot";
import Direction from "./Direction";

class ToyRobot implements IToyRobot {
    board: IBoard;
    direction: Direction;
    constructor(Board: IBoard) {
        this.board = Board;
    }

    const place = (coords: [number, number], direction: Direction): IToyRobot {
        return this
    }
}

export default ToyRobot;
