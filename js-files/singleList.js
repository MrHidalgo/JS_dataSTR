/**
 *
 * @constructor
 */
function Node() {
    this.data = data;
    this.next = null;
}

/**
 *
 * @constructor
 */
function SingleList() {
    this._length = 0;
    this.head = null;
}

/**
 *
 * @param value
 * @return {Node}
 */
SingleList.prototype.add = function (value) {
    var node        = new Node(value),
        currentNode = this.head;

    // if list empty
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    // if list !empty
    while (currentNode.next) {
        currentNode.next = node;
    }

    currentNode.next = node;
    this._length++;

    return node;
};

/**
 *
 * @param position
 * @return {Node|*|null}
 */
SingleList.prototype.searchNodeAt = function (position) {
  var currentNode   = this.head,
      length        = this._length,
      count         = 0,
      message       = {
        failure : 'Failure: non-existent node in this list.'
      };

      // failure position
      if (length === 0 || position < 1 || position > length) {
          throw new Error(message.failure);
      }

      while(count < position) {
          currentNode = currentNode.next;
          count++;
      }

      return currentNode;
};

/**
 *
 * @param position
 * @return {*}
 */
SingleList.prototype.remove = function (position) {
    var currentNode = this.head,
        length      = this._length,
        count       = 0,
        beforeNodeToDelete = nodeToDelete = deleteNode = null,
        message       = {
            failure : 'Failure: non-existent node in this list.'
        };

    // failure position list
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }

    if (position === 1) {
        this.head   = currentNode.next;
        deleteNode  = currentNode;
        currentNode = null;

        this._length--;

        return deleteNode;
    }

    while (count < position) {
        beforeNodeToDelete  = currentNode;
        nodeToDelete        = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deleteNode              = nodeToDelete;
    nodeToDelete            = null;

    this._length--;

    return deleteNode;
};