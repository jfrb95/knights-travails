import { Queue } from "./modules/linked-list.js";
import { Knight } from "./modules/knight.js";

const log = console.log;

function knightMoves(from, to) {
    validateInputs(from, to);

    const queue = Queue();

    queue.enqueue(from);

    //do until <to> is dequeued:
    //  node = dequeue
    //  get single moves from node
    //  create nodes containing a single move and distance + 1
    //  enqueue single nodes if they have not been visited yet
}

//just added, not used yet
function MoveNode(movedTo, distance) {
    return {
        get movedTo() {
            return movedTo;
        },
        get distance() {
            return distance;
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
        throw new Error('Argument must be an array of 2 integers between 0 and 7 inclusive.', `${array}.`)
    }
}
function validateInputs(...inputs) {
    for (const input of inputs) {
        validateInput(input);
    }
}