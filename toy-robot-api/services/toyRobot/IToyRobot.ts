import { IBoard } from "../board";
import {Direction, Turn} from "./Direction";

interface IToyRobot {
    board: IBoard
    face: Direction,
    location: [number, number],
    place: (coords: [number, number], face: Direction) => IToyRobot,
    move: () => IToyRobot,
    turn: (turn: Turn) => IToyRobot,
    report: () => [number, number, Direction],
}

export default IToyRobot;
