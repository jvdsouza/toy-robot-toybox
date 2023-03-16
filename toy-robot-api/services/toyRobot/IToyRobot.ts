import { IBoard } from "../board";
import Direction from "./Direction";

interface IToyRobot {
    board: IBoard
    direction: Direction,
    place: (coords: [number, number], direction: Direction) => IToyRobot,
    move: (direction: Direction) => IToyRobot,
}

export default IToyRobot;
