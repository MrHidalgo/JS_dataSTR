/**
 *
 * @param value
 * @constructor
 */
function Node(value) {
    this.data       = value;
    this.next       = null;
    this.previous   = null;
}

/**
 *
 * @constructor
 */
function DoubleList() {
    this._length    = 0;
    this.head       = null;
    this.tail       = null;
}

/**
 *
 * @param value
 * @return {Node}
 */
DoubleList.prototype.add = function (value) {
    var node = new Node(value);

    if (this._length) {
        this.tail.next  = node;
        node.previous   = this.tail;
        this.tail       = node;
    } else {
        this.head = node;
        this.tail = node;
    }

    this._length++;

    return node;
};

/**
 *
 * @param position
 * @return {string}
 */
DoubleList.prototype.remove = function (position) {
    var currentNode = this.head,
        length      = this._length,
        count       = 1,
        beforeNodeToDelete = afterNodeToDelete = nodeToDelete = deleteNode = null,
        message     = {
            failure : 'Failure: non-existent node in this list.',
            success : 'Success: node in this list.'
        };


        if (length === 0 || position < 1 || position > length) {
            throw  new Error(message.failure);
        }


        if (position === 1) {
            this.head = currentNode.next;

            if (!this.head) {
                this.head.previous = null;
            } else {
                this.tail = null;
            }
        } else if (position === this._length) {
            this.tail       = this.tail.previous;
            this.tail.next  = null;
        } else {
            while (count < position) {
                currentNode = currentNode.next;
                count++;
            }

            beforeNodeToDelete  = currentNode.previous;
            nodeToDelete        = currentNode;
            afterNodeToDelete   = currentNode.next;

            beforeNodeToDelete  = afterNodeToDelete;
            afterNodeToDelete   = beforeNodeToDelete;
            deleteNode          = nodeToDelete;
            nodeToDelete        = null;
        }

        this._length--;

    return message.success;
};

/**
 *
 * @param position
 * @return {Node|*|null}
 */
DoubleList.prototype.searchNode = function (position) {
    var currentNode = this.head,
        length      = this._length,
        count       = 1,
        message     = {
            failure : 'Failure: non-existent node in this list.'
        };

        if (length === 0 || position < 1 || position > length) {
            throw  new Error(message.failure);
        }

        while(count < position) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
};