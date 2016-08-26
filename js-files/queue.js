/**
 *
 * @constructor
 */
function Queue() {
    this._newstIndex    = 1;
    this._oldestIndex   = 1;
    this._storage       = {};
}


/**
 * Returns invalid queue size and maintain the correct range for the line keys.
 * @return {number}
 */
Queue.prototype.size = function() {
    return this._newstIndex - this._oldestIndex;
};


/**
 * Adds items to the queue.
 * @param data {*} _storage
 */
Queue.prototype.enqueue = function(data) {
    // this._newestIndex, to create a new key for this._storage and assign it a value of the data. this._newestIndex always starts with 1
    this._storage[this._newstIndex] = data;
    this._newstIndex++;
};


/**
 * Deletes the oldest data from the queue.
 * @return {*} Return the data just deleted.
 */
Queue.prototype.dequeue = function () {
    // Assigned to the current value of the queue [oldestIndex]
    var oldestIndex = this._oldestIndex,
        newsIndex   = this._newstIndex,
        deleteData;

    // These are removed before the turn in any items were added...
    if (oldestIndex !== newsIndex) {
        deleteData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;

        return deleteData;
    }
};