import { ToyRobot } from '../../../../services/toyRobot';
import { Board, IBoard } from '../../../../services/board'
import IToyRobot from '../../../../services/toyRobot/IToyRobot';
import { Direction, Turn } from '../../../../services/toyRobot/Direction';

let board: IBoard;
let toyRobot: IToyRobot;

beforeEach(() => {
    board = new Board(5, 5, []);
});

describe("ToyRobot", () => {
    describe("on instantiation", () => {
        test("starts the robot at 0, 0 if given a start location less than 0 in the x or y axis", () => {
            toyRobot = new ToyRobot(board, Direction.NORTH, [-1, -1]);
            expect(toyRobot.report()).toEqual([0, 0, Direction.NORTH]);
        });
    });

    describe("place", () => {
        test("places the robot on a provided valid coordinate, facing the given direction", () => {
            toyRobot = new ToyRobot(board, Direction.NORTH, [0, 0]);
            expect(toyRobot.place([2, 3], Direction.SOUTH).report()).toEqual([2, 3, Direction.SOUTH]);
        });

        test("does not place the robot with given an invalid coordinate", () => {
            toyRobot = new ToyRobot(board, Direction.NORTH, [0, 0]);
            expect(toyRobot.place([-2, 3], Direction.SOUTH).report()).toEqual([0, 0, Direction.NORTH]);
            expect(toyRobot.place([2, -3], Direction.SOUTH).report()).toEqual([0, 0, Direction.NORTH]);
            expect(toyRobot.place([-2, -3], Direction.SOUTH).report()).toEqual([0, 0, Direction.NORTH]);
            expect(toyRobot.place([6, 7], Direction.SOUTH).report()).toEqual([0, 0, Direction.NORTH]);
        });
    });

    describe("turn", () => {
        describe("when given a turn direction, turns in that direction", () => {
            test("turns left", () => {
                toyRobot = new ToyRobot(board, Direction.NORTH, [0, 0]);
                expect(toyRobot.turn(Turn.LEFT).report()).toEqual([0, 0, Direction.WEST]);
                expect(toyRobot.turn(Turn.LEFT).report()).toEqual([0, 0, Direction.SOUTH]);
                expect(toyRobot.turn(Turn.LEFT).report()).toEqual([0, 0, Direction.EAST]);
                expect(toyRobot.turn(Turn.LEFT).report()).toEqual([0, 0, Direction.NORTH]);
            });
            
            test("turns right", () => {
                expect(toyRobot.turn(Turn.RIGHT).report()).toEqual([0, 0, Direction.EAST]);
                expect(toyRobot.turn(Turn.RIGHT).report()).toEqual([0, 0, Direction.SOUTH]);
                expect(toyRobot.turn(Turn.RIGHT).report()).toEqual([0, 0, Direction.WEST]);
                expect(toyRobot.turn(Turn.RIGHT).report()).toEqual([0, 0, Direction.NORTH]);
            });
        })
    });
});