enum Direction {
    NORTH = "NORTH",
    EAST = "EAST",
    SOUTH = "SOUTH",
    WEST = "WEST",
}

enum Turn {
    LEFT = "LEFT",
    RIGHT = "RIGHT",
}

const getNewDirection = (direction: Direction, turn: Turn): Direction => {
    const DirectionEnumKeys = Object.keys(Direction);
    const DirectionIndex = DirectionEnumKeys.indexOf(direction)
    if (turn == Turn.LEFT) {
        return Direction[DirectionEnumKeys[(DirectionIndex + 3) % 4]]
    } else if (turn == Turn.RIGHT) {
        return Direction[DirectionEnumKeys[(DirectionIndex + 1) % 4]]
    }
}

export {
    Direction,
    Turn
};
