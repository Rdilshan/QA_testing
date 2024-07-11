const userController = require("../../../controllers/userController");
const db = require("../../../config/firebaseConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

jest.mock("../../../config/firebaseConfig"); // Mock Firebase config

describe("userController", () => {
  describe("create", () => {
    let req, res;

  beforeEach(() => {
    req = {
      body: {
        name: 'John Doe',
        email: 'john@example.com',
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  test('should add a document to the users collection and send a success response', async () => {
    const mockDocRef = { id: '12345' };
    db.collection.mockReturnValue({
      add: jest.fn().mockResolvedValue(mockDocRef),
    });

    await userController.create(req, res);

    expect(db.collection).toHaveBeenCalledWith('users');
    expect(db.collection().add).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(`Document written with ID: ${mockDocRef.id}`);
  });

  test('should send an error response if adding document fails', async () => {
    const mockError = new Error('Failed to add document');
    db.collection.mockReturnValue({
      add: jest.fn().mockRejectedValue(mockError),
    });

    await userController.create(req, res);

    expect(db.collection).toHaveBeenCalledWith('users');
    expect(db.collection().add).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(`Error adding document: ${mockError}`);
  });
  });

  
});
