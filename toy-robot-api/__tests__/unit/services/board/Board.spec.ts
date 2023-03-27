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
        expect(board.getObstacles()).toEqual({});
    });

    test("setObstacles sets obstacles as per given", () => {
        const expectedObstacles = {"1,1": [1, 1]}
        expect(board.setObstacles([[1, 1]]).getObstacles()).toEqual(expectedObstacles);
    });

    test("addObstacle adds an obstacle to the existing set of obstacles", () =>  {
        const expectedObstacles = {"1,1": [1, 1], "2,3": [2,3]};
        expect(board.addObstacle([2,3]).getObstacles()).toEqual(expectedObstacles);
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

describe("A 5x5 board with obstacles", () => {
    test("getObstacles returns the obstacles set on the board", () => {
        const board = new Board(5, 5, [[3, 4]]);
        expect(board.getObstacles()).toEqual({"3,4": [3, 4]});
    });

    test("setObstacles overwrites obstacles as per given", () => {
        const board = new Board(5, 5, [[3, 4]]);
        const expectedObstacles = {"1,1": [1, 1]};
        expect(board.setObstacles([[1, 1]]).getObstacles()).toEqual(expectedObstacles);
    });

    test("addObstacle adds an obstacle to the existing set of obstacles", () =>  {
        const board = new Board(5, 5, [[3, 4], [1, 1]]);
        const expectedObstacles = {"3,4": [3, 4], "1,1": [1, 1], "2,3": [2,3]};
        expect(board.addObstacle([2,3]).getObstacles()).toEqual(expectedObstacles);
    });

    describe("doesObstacleExist", () => {
        const board = new Board(5, 5, [[3, 4], [1, 1]]);
        test("returns true for an obstacle that does exist", () => {
            expect(board.doesObstacleExist([1, 1])).toEqual(true);
        });

        test("returns false for an obstacle that does not exist", () => {
            expect(board.doesObstacleExist([5, 4])).toEqual(false);
        });
    });
})

describe("An invalid board with invalid dimensions", () => {
    describe("A 0x0 board", () => {
        const board = new Board(0, 0, []);
        test("creates a 1x1 board", () => {
            expect(board.getLength()).toEqual(1);
            expect(board.getWidth()).toEqual(1);
        });

        test("cannot set the width or length to 0", () => {
            expect(board.setLength(0).getLength()).toEqual(1);
            expect(board.setWidth(0).getWidth()).toEqual(1);
        });
    })

    describe("A negative value by negative value board", () => {
        const board = new Board(-10, -33, []);
        test("creates a 1x1 board", () => {
            expect(board.getLength()).toEqual(1);
            expect(board.getWidth()).toEqual(1);
        });

        test("cannot set the width or length to 0", () => {
            expect(board.setLength(-5).getLength()).toEqual(1);
            expect(board.setWidth(-23).getWidth()).toEqual(1);
        });
    })
})