/**
 * In computer science, a stack is an abstract data type that serves as a collection of elements.
 * @constructor
 */
function Stack() {
    this._size = 0;
    this._storage = {};
}


/**
 * Adding data from the stack.
 * @param data {*} _storage
 */
Stack.prototype.push = function (data) {
    // The increase in storage size.
    var size = this._size++;

    // Appoints size as the storage key data assigns the value of this key
    this._storage[size] = data;
};


/**
 * Removing the data from the stack.
 * @return Return the last deleted data
 */
Stack.prototype.pop = function () {
    var size = this._size,
        deleteData;

    // A body of code is executed only if there is evidence in our store.
    if (size) {
        deleteData = this._storage[size];

        delete this._storage[size];
        this._size--;

        return deleteData;
    }
};