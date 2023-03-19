interface IBoard {
    length: number, // horizontal measurement
    width: number, // vertical measurement
    obstacles: Obstacles,
    getLength: () => number,
    getWidth: () => number,
    setLength: (length: number) => IBoard,
    setWidth: (width: number) => IBoard,
    getObstacles: () => Obstacles,
    setObstacles: (obstacles: Obstacles) => IBoard,
    addObstacle: (position: [number, number]) => IBoard,
    doesObstacleExist: (position: [number, number]) => boolean,
    generateObstacleKey: (position: [number, number]) => string
};

type Obstacles = {
    identifier: string,
    position: [number, number],
} | {};

export {
    IBoard,
    Obstacles
};
