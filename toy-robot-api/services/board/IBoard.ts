interface IBoard {
    getLength: () => number, // horizontal dimension
    getWidth: () => number, // vertical dimension
    setLength: (length: number) => IBoard,
    setWidth: (width: number) => IBoard,
    getObstacles: () => Obstacles,
    setObstacles: (obstacles: [number, number][]) => IBoard,
    addObstacle: (position: [number, number]) => IBoard,
    doesObstacleExist: (position: [number, number]) => boolean,
};

type Obstacles = {
    identifier: string,
    position: [number, number],
} | {};

export {
    IBoard,
    Obstacles
};
