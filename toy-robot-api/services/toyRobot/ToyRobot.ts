import { IBoard } from "../board";
import IToyRobot from "./IToyRobot";
import { Direction, Turn, getNewDirection } from "./Direction";

class ToyRobot implements IToyRobot {
    board: IBoard;
    face: Direction;
    location: [number, number];
    constructor(Board: IBoard, face: Direction, startLocation: [number, number]) {
        this.board = Board;
        this.face = face;
        let location = startLocation;
        if (startLocation[0] < 0) {
            location[0] = 0
        }
        if (startLocation[1] < 0) {
            location[1] = 0
        }
        this.location = location;
    }

    place = (coords: [number, number], face: Direction): IToyRobot => {
        if (this.isLegalMove(coords)) {
            this.location = coords;
            this.face = face;
        }
        return this
    }

    move = (): IToyRobot => {
        let newX = this.location[0];
        let newY = this.location[1];
        let newLocation: [number, number];
        switch (this.face) {
            case Direction.NORTH:
                newLocation = [newX, newY + 1];   
            case Direction.EAST:
                newLocation = [newX + 1, newY];
            case Direction.SOUTH:
                newLocation = [newX, newY - 1];
            case Direction.WEST:
                newLocation = [newX - 1, newY];
        }
        if (this.isLegalMove(newLocation)) {
            this.place([newX, newY], this.face);
        }

        return this;
    }

    turn = (turn: Turn): IToyRobot => {
        this.face = getNewDirection(this.face, turn)
        return this;
    }

    report = (): [number, number, Direction] => {
        return [this.location[0], this.location[1], this.face];
    }

    private isLegalMove = (newLocation: [number, number]): boolean => {
        // check against the length and width of the board
        let newX = newLocation[0];
        let newY = newLocation[1];
        if (newX < 0 || newX > this.board.getLength()) {
            return false;
        }
        if (newY < 0 || newY > this.board.getWidth()) {
            return false;
        }
        if (this.board.doesObstacleExist(newLocation)) {
            return false;
        }
        return true;
    }
}

export default ToyRobot;
