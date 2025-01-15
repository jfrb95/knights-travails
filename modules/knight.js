import { GameParameters } from "./game.js";

const log = console.log;

const game = GameParameters();

export function Knight() {
    const KNIGHTS_GAIT = [[1, 2], [2, 1], [-1, 2], [1, -2], [-2, 1], [2, -1], [-1, -2], [-2, -1]];

    function validMoves(position, arg2=false) {
        let currentPosition;

        //allows for 2 coords in an array, or as separate arguments
        if (!arg2 && Array.isArray(position)) {
            currentPosition = position;
        } else {
            currentPosition = [position, arg2];
        }

        const canMoveTo = [];

        for (const movement of KNIGHTS_GAIT) {

            const newCoords = sumCoords(currentPosition, movement);
            if (validCoords(newCoords)) {
                canMoveTo.push(newCoords);
            }
        }
        
        return canMoveTo;
    }
    
    function sumCoords(coord1, coord2) {    
        return [coord1[0] + coord2[0], coord1[1] + coord2[1]];
    }
    function validCoords(coord) {
        if (coord[0] >= 0 &&
            coord[0] < game.BOARD_WIDTH &&
            coord[1] >= 0 &&
            coord[1] < game.BOARD_HEIGHT) 
            {
            return true;
        } else {
            return false;
        }
    }

    return {
        validMoves
    }
}