import express from 'express';
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
    body('email','Incorrect Email').isEmail(),
    body('name').isLength({ min: 3 }),
    body('password','Passwor must be 5 caharacters long').isLength({ min: 5 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            await User.create({
                name: req.body.name,
                location: req.body.location,
                email: req.body.email,
                password: req.body.password
            })
            console.log("Data inserted successfully");
            res.json({ success: true });
        } catch (error) {
            console.error('Error inserting data:', error);
            res.json({ success: false });
            console.log("Error inserting data:", error);
        }
    })

export default Router;