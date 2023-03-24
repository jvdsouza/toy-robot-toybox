import { Board } from '../../../../services/board'

describe("A 5x5 Board with no obstacles", () => {
    const board = new Board(5, 5, []);
    test("getLength returns correct length", () => {
        expect(board.getLength()).toEqual(5);
    });

    test("getWidth returns correct width", () => {
        expect(board.getWidth()).toEqual(5);
    });

    test("Setting a new length changes the board to the new length", () => {
        expect(board.setLength(6).getLength()).toEqual(6);
    });

    test("Setting a new width changes the board to the new width", () => {
        expect(board.setWidth(6).getWidth()).toEqual(6);
    });

    test("getObstacles returns the obstacles set on the board", () => {
        expect(board.getObstacles()).toStrictEqual({});
    });

    test("setObstacles sets obstacles as per given", () => {
        const expectedObstacles = {"1,1": [1, 1]}
        const received = board.setObstacles([[1, 1]]).getObstacles();
        console.info(board.setObstacles([[1, 1]]));
        console.info(received);
        expect(received).toStrictEqual(expectedObstacles);
    });

    test("addObstacle adds an obstacle to the existing set of obstacles", () =>  {
        const expectedObstacles = {"1,1": [1, 1], "2,3": [2,3]};
        expect(board.addObstacle([2,3]).getObstacles()).toStrictEqual(expectedObstacles);
    });

    describe("doesObstacleExist", () => {
        test("returns true for an obstacle that does exist", () => {
            expect(board.doesObstacleExist([1, 1])).toEqual(true);
        });

        test("returns false for an obstacle that does not exist", () => {
            expect(board.doesObstacleExist([5, 4])).toEqual(false);
        });
    });
});