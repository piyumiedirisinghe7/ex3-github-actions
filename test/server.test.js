const { test, before, after } = require("node:test");
const assert = require("node:assert/strict");
const server = require("../server");

let url;

before(async () => {
    await new Promise((resolve) => server.listen(0, resolve));   // 0 = any free port
    url = "http://localhost:" + server.address().port;
});

after(() => server.close());

test("GET /hello returns 200 and Hello World!", async () => {
    const response = await fetch(url + "/hello");
    assert.equal(response.status, 200);
    assert.equal(await response.text(), "Hello World!");
});

test("GET /greeting returns 200 and a greeting", async () => {
    const response = await fetch(url + "/greeting");
    assert.equal(response.status, 200);
    assert.match(await response.text(), /^Good (morning|afternoon|evening)$/);
});

test("unknown route returns 404", async () => {
    const response = await fetch(url + "/nothing");
    assert.equal(response.status, 404);
});
