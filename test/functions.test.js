const { test } = require("node:test");
const assert = require("node:assert/strict");
const { add, greeting } = require("../functions");

test("add adds two numbers", () => {
    assert.equal(add(2, 3), 5);
    assert.equal(add(-1, 1), 0);
});

test("greeting depends on the hour", () => {
    assert.equal(greeting(0), "Good morning");
    assert.equal(greeting(9), "Good morning");
    assert.equal(greeting(12), "Good afternoon");
    assert.equal(greeting(17), "Good afternoon");
    assert.equal(greeting(18), "Good evening");
    assert.equal(greeting(23), "Good evening");
});
