import { Queue } from "./modules/linked-list.js";
import { Knight } from "./modules/knight.js";

const log = console.log;

const testDestination = [4, 3];

const path = knightMoves([3, 3], testDestination);

console.log(path.map((step) => `[${step.join(', ')}]`).join(', '));

function knightMoves(from, to) {
    validateInputs(from, to);

    const knight = Knight();

    const knightHasArrived = knightIsTravellingTo(to);

    const queue = Queue();
    const visitedNodes = KeySet(coordToKey);
    const startNode = PositionNode(from, 0);

    queue.enqueue([startNode]);
    visitedNodes.add(startNode.position);

    let SAFETY = 64;

    while (!queue.isEmpty() && SAFETY > 0) {
        const currentPath = queue.dequeue();
        const currentNode = currentPath[currentPath.length - 1];
        const currentDistance = currentNode.distance;

        const validMoves = knight.validMoves(currentNode.position);

        for (const validMove of validMoves) {
            if (!visitedNodes.has(validMove)) {
                const continuedPath = [...currentPath, PositionNode(validMove, currentDistance + 1)];

                if (knightHasArrived(validMove)) {
                    const truePath = continuedPath.map((node) => node.position);

                    return truePath;
                }
                
                queue.enqueue(continuedPath);
                visitedNodes.add(validMove);    
            }
        }

        SAFETY -= 1;
    }
}

//factory functions
function PositionNode(position, totalDistanceToPosition) {
    return {
        get position() {
            return position;
        },
        get distance() {
            return totalDistanceToPosition;
        }
    }
}
function KeySet(funcConvertToKey) {
    const set = new Set();

    return {
        add(value) {
            set.add(funcConvertToKey(value));
        },
        delete(value) {
            set.delete(funcConvertToKey(value));
        },
        has(value) {
            return set.has(funcConvertToKey(value));
        },
        logSet() {
            log(set);
        }
    }
}

//helper functions
function validateInput(input) {
    if (!Array.isArray(input) ||
        input.length !== 2 ||
        !Number.isInteger(input[0]) ||
        !Number.isInteger(input[1]) ||
        input[0] < 0 ||
        input[0] > 7 ||
        input[1] < 0 ||
        input[1] > 7) 
        {
        throw new Error('Argument must be an array of 2 integers between 0 and 7 inclusive.', `${input}.`)
    }
}
function validateInputs(...inputs) {
    for (const input of inputs) {
        validateInput(input);
    }
}
function coordToKey(x, y) {
    let coords;

    if (!y && Array.isArray(x)) {
        coords = x;
    } else {
        coords = [x, y];
    }

    return `${coords[0]}${coords[1]}`;
}
function knightIsTravellingTo(to) {
    return function(from) {
        return coordToKey(from) === coordToKey(to);
    }
}