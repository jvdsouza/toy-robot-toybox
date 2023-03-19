import { IBoard } from "../board";
import {Direction, Turn} from "./Direction";

interface IToyRobot {
    board: IBoard
    direction: Direction,
    start: [Number, Number],
    place: (coords: [number, number], direction: Direction) => IToyRobot,
    move: () => IToyRobot,
    turn: (turn: Turn) => IToyRobot,
}

export default IToyRobot;
