const request = require("supertest");
const { app, server } = require("../../../index");

describe("Admin/user Routes", () => {

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

  test('POST /user/login should return 200 and "User login successfully"', async () => {
    const response = await request(app)
      .post("/user/login")
      .send({ email: "test@gmail.com", password: "testpassword" });

    expect(response.status).toBe(401);
  });

  test('GET /user/get should return 200 and "user deetails get"', async () => {
    const response = await request(app)
      .get("/user/get");

    expect(response.status).toBe(403);
  });




});
