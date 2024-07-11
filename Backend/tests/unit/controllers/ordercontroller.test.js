const ordercontroller = require("../../../controllers/ordercontroller");
const db = require("../../../config/firebaseConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

jest.mock("../../../config/firebaseConfig"); 

describe("ordercontroller", () => {

    describe("orderplace", () => {
        let req, res;

        beforeEach(() => {
          req = {
            user: { id: 'user123' },
            body: { qty: 2, productId: 'product123' },
          };
          res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
          };
        });
      
        afterEach(() => {
          jest.clearAllMocks(); // Clear mocks after each test
        });
      
        test('should place an order successfully', async () => {
          const mockUserDoc = { exists: true };
          const mockDocRef = { id: 'order123' };
          
          db.collection.mockReturnValue({
            doc: jest.fn().mockReturnThis(),
            get: jest.fn().mockResolvedValue(mockUserDoc),
            add: jest.fn().mockResolvedValue(mockDocRef),
          });
      
          await ordercontroller.orderplace(req, res);
      
          expect(db.collection).toHaveBeenCalledWith('users');
          expect(db.collection().doc).toHaveBeenCalledWith('user123');
          expect(db.collection('users').doc('user123').get).toHaveBeenCalled();
          expect(db.collection).toHaveBeenCalledWith('order');
          expect(db.collection('order').add).toHaveBeenCalledWith({
            userId: 'user123',
            qty: 2,
            productId: 'product123',
            paymentStatus: false,
            createdAt: expect.any(String),
          });
          expect(res.status).toHaveBeenCalledWith(200);
          expect(res.send).toHaveBeenCalledWith(`Order placed successfully with ID: ${mockDocRef.id}`);
        });
      
        test('should return 400 if qty or productId is missing', async () => {
          req.body = {};
      
          await ordercontroller.orderplace(req, res);
      
          expect(res.status).toHaveBeenCalledWith(400);
          expect(res.send).toHaveBeenCalledWith("Quantity and product ID are required.");
        });
      
        test('should return 404 if user is not found', async () => {
          const mockUserDoc = { exists: false };
          
          db.collection.mockReturnValue({
            doc: jest.fn().mockReturnThis(),
            get: jest.fn().mockResolvedValue(mockUserDoc),
          });
      
          await ordercontroller.orderplace(req, res);
      
          expect(db.collection).toHaveBeenCalledWith('users');
          expect(db.collection().doc).toHaveBeenCalledWith('user123');
          expect(db.collection('users').doc('user123').get).toHaveBeenCalled();
          expect(res.status).toHaveBeenCalledWith(404);
          expect(res.send).toHaveBeenCalledWith("User not found.");
        });
      
        test('should return 500 if there is an error placing the order', async () => {
          const mockError = new Error('Failed to add document');
          
          db.collection.mockReturnValue({
            doc: jest.fn().mockReturnThis(),
            get: jest.fn().mockRejectedValue(mockError),
          });
      
          await ordercontroller.orderplace(req, res);
      
          expect(res.status).toHaveBeenCalledWith(500);
          expect(res.send).toHaveBeenCalledWith(`Error placing order: ${mockError.message}`);
        });
    })

})