// var test = require("tape");
var logic = require("./logic");

test("generateId function genrate new unique id when invoked", function() {
  expect(logic.generateId()).toBeLessThan(logic.generateId());
});

// cloneArrayOfObjects;

let objArray = [
  { id: -3, description: "first todo", done: false },
  { id: -2, description: "second todo", done: false },
  { id: -1, description: "third todo", done: false }
];
test("cloneArrayOfObjects function clone arrays", function() {
  expect(logic.cloneArrayOfObjects(objArray)).toEqual(objArray);
});

//addTodo;

let todoArray = [
  { id: -3, description: "first todo", done: false },
  { id: -2, description: "second todo", done: false },
  { id: -1, description: "third todo", done: false }
];
let todoArrayExpected = [
  { id: -3, description: "first todo", done: false },
  { id: -2, description: "second todo", done: false },
  { id: -1, description: "third todo", done: false },
  { id: 1, description: "new todo", done: false }
];

test("addTodo function retuns new array with added item", function() {
  expect(logic.addTodo(todoArray, "new todo").length).toEqual(
    todoArrayExpected.length
  );
  expect(logic.addTodo(todoArray, "new todo")[3].description).toEqual(
    todoArrayExpected[3].description
  );
});

//deleteTodo

let todoArrayDeletedExpected = [
  { id: -3, description: "first todo", done: false },
  { id: -2, description: "second todo", done: false }
];

test("deleteTodo function return new array with specific item deleted by using it's id property", function() {
  expect(logic.deleteTodo(todoArray, -1).length).toBe(
    todoArrayDeletedExpected.length
  );
  expect(logic.deleteTodo(todoArray, -1)).toEqual(todoArrayDeletedExpected);
});

//markTodo
let todoArrayMarkExpected = [
  { id: -3, description: "first todo", done: false },
  { id: -2, description: "second todo", done: false },
  { id: -1, description: "third todo", done: true }
];

test("markTodo function return new array with specific item marked as done", function() {
  expect(logic.markTodo(todoArray, -1)).toEqual(todoArrayMarkExpected);
});
