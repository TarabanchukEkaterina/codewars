// Closest elevator

// DESCRIPTION:
// Given 2 elevators(named "left" and "right") in a building with 3 floors(numbered 0 to 2), write a function accepting 3 arguments(in order):
// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor("left" / "right").
// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.
// You can assume that the inputs will always be valid integers between 0 - 2.
// Examples:
// left right call   result
// 0    1     0    "left"
// 0    1     1    "right"
// 0    1     2    "right"
// 0    0     0    "right"
// 0    2     1    "right"

// SOLUTION:
  let elevator = (left, right, call) => Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right'


// TESTS:
const { assert } = require('chai');

describe("call from 0:", function () {
  it("If the left elevator is closer to the call, should return 'left'", function () {
    assert.strictEqual(elevator(0, 1, 0), 'left');
  });
  it("If the right elevator is closer to the call, should return 'right'", function () {
    assert.strictEqual(elevator(0, 1, 1), 'right');
  });
  it("If the right elevator is closer to the call, should return 'right'", function () {
    assert.strictEqual(elevator(0, 1, 2), 'right');
  });
  it("If both elevators are on the same floor, should return 'right'", function () {
    assert.strictEqual(elevator(0, 0, 0), 'right');
  });
  it("If both elevators are in equal distance from the call, should return 'right'", function () {
    assert.strictEqual(elevator(0, 2, 1), 'right');
  });
});