import { Queue } from "./modules/linked-list.js";
import { Knight } from "./modules/knight.js";

const log = console.log;

knightMoves([0, 0], [1, 1]);

function knightMoves(from, to) {
    validateInputs(from, to);

    const knight = Knight();

    const queue = Queue();
    //const visitedNodes =  create KeySet - a wrapper that pairs a key conversion function with a Set

    queue.enqueue(PositionNode(from, 0));

    let SAFETY = 20;

    while (!queue.isEmpty() && SAFETY > 0) {
        const currentNode = queue.dequeue();
        const currentDistance = currentNode.distance;

        const validMoves = knight.validMoves(currentNode.position);
        
        log('position', currentNode.position)
        for (const validMove of validMoves) {
            queue.enqueue(PositionNode(validMove, currentDistance + 1));
            log(validMove);
        }



        SAFETY -= 1;
        log(SAFETY);
    }

    //do until <to> is dequeued:
    //  node = dequeue
    //  get single moves from node
    //  create nodes containing a single move and distance + 1
    //  enqueue single nodes if they have not been visited yet
}

//just added, not used yet
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