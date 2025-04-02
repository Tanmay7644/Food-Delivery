import express from 'express';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
const secret="aB3dE5gH7jK9mN1pQ2rT4vX6zY8wL0CqV";
const Router = express.Router();
// here we are importing model of user
// model is a wrapper of schema
// this means if we create object of user then it will be created in the database
// and we can use this object to insert data in the database
import User from '../models/User.js';

// here we are importing express validator
// express validator is used to validate the data from the request body
import { body, validationResult } from 'express-validator';

Router.post('/createuser',
    body('email', 'Incorrect Email').isEmail(),
    body('name').isLength({ min: 3 }),
    body('password', 'Password must be 5 caharacters long').isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt=await bcrypt.genSalt(10);
        let setPassword=await bcrypt.hash(req.body.password,salt);
        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: setPassword
            })
            console.log("Data inserted successfully");
            res.json({ success: true });
        } catch (error) {
            console.error('Error inserting data:', error);
            res.json({ success: false });
            console.log("Error inserting data:", error);
        }
    })


Router.post('/loginuser',
    body('email', 'Incorrect Email').isEmail(),
    body('password', 'Password must be 5 caharacters long').isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let email = req.body.email;
        try {

            let userData = await User.findOne({ email })

            if (!userData) {
                return res.status(400).json({ error: "Invalid credentials" })
            }
            const checkPassword=bcrypt.compare(req.body.password,userData.password)
            if (!checkPassword) {
                return res.status(400).json({ error: "Invalid credentials" })
            }

            const data={
                user:{
                    id:userData.id
                }
            }
            const authToken=jwt.sign(data,secret);
            return res.json({ success: true,authToken:authToken });
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })
export default Router;

