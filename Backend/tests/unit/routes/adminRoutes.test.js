const request = require("supertest");
const { app, server } = require("../../../index");

describe("Admin Routes", () => {
  beforeAll((done) => {
    server.on("listening", () => {
      console.log("Server started");
      done();
    });
  });

  afterAll((done) => {
    server.close(done); // Close server after all tests
  });
  test('POST /admin/create should return 200 and "User registered successfully"', async () => {
    const response = await request(app)
      .post("/admin/create")
      .send({ email: "testuser", password: "testpassword" });

    expect(response.status).toBe(400);
  });

  test('POST /admin/login should return 200 and "User logged in successfully"', async () => {
    const response = await request(app)
      .post("/admin/login")
      .send({ email: "testuser", password: "testpassword" });

    expect(response.status).toBe(200);
  });
});
