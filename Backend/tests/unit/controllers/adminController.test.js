// tests/unit/controllers/adminController.test.js

// Import necessary modules and functions
const adminController = require('../../../controllers/admincontroller');
const db = require('../../../config/firebaseConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Mocking dependencies
jest.mock('../../../config/firebaseConfig'); // Mock Firebase config

describe('AdminController', () => {
  describe('login', () => {
    // Mock request and response objects
    let req, res;

    beforeEach(() => {
      req = {
        body: {
          email: 'test@example.com',
          password: 'password123'
        }
      };
      res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
    });

    afterEach(() => {
      jest.clearAllMocks(); // Clear mocks after each test
    });

    test('should return token on successful login', async () => {
      // Mock Firestore snapshot data
      const mockSnapshot = {
        empty: false,
        forEach: jest.fn(callback => callback({ data: async () => ({ email: 'test@example.com', password: await bcrypt.hash('password123', 10) }) }))
      };
      db.collection.mockReturnValue({
        where: jest.fn().mockReturnThis(),
        get: jest.fn().mockResolvedValue(mockSnapshot)
      });

      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);

      // Mock jwt sign using spyOn and mockReturnValue
      jest.spyOn(jwt, 'sign').mockReturnValue('mocked.token.string');

      // Call the login function
      await adminController.login(req, res);

      // Assertions
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ token: 'mocked.token.string' });
    });

    test('should return 401 on invalid email or password', async () => {
      // Mock Firestore snapshot data (empty)
      const mockSnapshot = { empty: true };
      db.collection.mockReturnValue({
        where: jest.fn().mockReturnThis(),
        get: jest.fn().mockResolvedValue(mockSnapshot)
      });

      // Call the login function
      await adminController.login(req, res);

      // Assertions
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'Invalid email or password' });
    });

    test('should return 500 on internal server error', async () => {
      // Mock Firestore error
      db.collection.mockReturnValue({
        where: jest.fn().mockReturnThis(),
        get: jest.fn().mockRejectedValue(new Error('Firebase error'))
      });

      // Call the login function
      await adminController.login(req, res);

      // Assertions
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Internal server error' });
    });
  });
});


