import express from "express";
import { expressjwt } from 'express-jwt';
import jwt from 'jsonwebtoken';
import cors from "cors";
import { PORT } from "./config/env.js";

import { User } from './db.js';

const app = express();

const JWT_SECRET = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

app.use(cors(), express.json(), expressjwt({
    algorithms: ['HS256'],
    credentialsRequired: false,
    secret: JWT_SECRET,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const findUserByEmail = async (email) => User.findOne((user) => user.email === email)
const isValidLoginPayload = (email, password) => email && password;
const isValidLoginRequest = (user, password) => user && user.password === password;

const sendErrorResponse = (res, statusCode, error) => res.status(statusCode).json({
    success: false,
    error,
    timestamp: Date.now()
});
const sendSuccessResponse = (res, data, statusCode = 200) => res.status(statusCode).json({
    success: true,
    data,
    timestamp: Date.now()
});

const createUserToken = (user, jwtSecret) => jwt.sign({
    userId: user.id,
    userData: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
    },
    role: user.role,
}, jwtSecret);


const logUser = (req) => new Promise(async (resolve, reject) => {
    const { email, password } = req.body;

    if (!isValidLoginPayload(email, password)) reject({error: "Bad request!", statusCode: 400});

    try {
        const user = await findUserByEmail(email);

        if (!isValidLoginRequest(user, password)) reject({error: "Access forbidden!", statusCode: 401});

        resolve(createUserToken(user, JWT_SECRET));
    } catch (e) {
        reject({error: "Access forbidden!", statusCode: 401})
    }
});

const sendToken = (res) => (token) => sendSuccessResponse(res, { token });
const sendError = (res) => (response) => sendErrorResponse(res, response.statusCode, response.error);

app.get("/login", async (req, res) => {
    logUser(req)
        .then(sendToken(res))
        .catch(sendError(res))
});

app.get("/", (req, res) => {
    console.log("test")
    res.send({
        success: true,
        data: "hello world!",
        timestamp: Date.now()
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
})

