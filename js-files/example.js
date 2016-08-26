/**
 * @name Stack example
 *
 * @example <caption>Example usage of method #0:</caption>
 * // returns 0 - [not '-1']
 * stack_test.pop();
 *
 * @example <caption>Example usage of method #1:</caption>
 * // returns 1
 * stack_test.push(1);
 * stack_test.push(2);
 * stack_test.pop();
 *
 * @return {data}
 * @type {Stack}
 */
var stack_test = new Stack();
stack_test.pop();


/**
 * @name Queue example
 *
 * @example <caption>Example usage of method:</caption>
 * // returns Queue {_newstIndex: 3, _oldestIndex: 2, _storage: Object}
 * queue_test.enqueue(1);
 * queue_test.enqueue(2);
 * queue_test.dequeue();
 *
 * @return {data}
 * @type {Stack}
 */
var queue_test = new Queue();
queue_test.enqueue(1);
queue_test.enqueue(2);
queue_test.dequeue();