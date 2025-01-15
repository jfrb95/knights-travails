const log = console.log;

export function Queue(array=[]) {
    //construct
    let _head = null;
    let _tail = null;
    let _length = 0;
    for (const item of array) {
        enqueue(item);
    }
    
    //return functions
    function enqueue(value) {
        const newNode = LinkedListNode(value);
        if (listIsEmpty()) {
            _head = newNode;
        } else {
            _tail.next = newNode;
        }
        _tail = newNode;
        _length += 1;
    }

    function dequeue() {
        if (listIsEmpty()) {
            return null;
        }
        const popped = _head;
        _head = _head.next;
        length -= 1;
        return popped;
    }

    //helper functions
    function listIsEmpty() {
        return !_head;
    }

    return {
        enqueue,
        dequeue,
        get length() {
            return _length;
        }
    }
}

function LinkedListNode(value) {
    let data = value;
    let next = null;

    return {
        get data() {
            return data;
        },
        set data(value) {
            data = value;
        },
        get next() {
            return next;
        },
        set next(node) {
            next = node;
        }
    }
}