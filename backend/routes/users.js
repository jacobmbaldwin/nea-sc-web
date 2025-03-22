import express from 'express';
import Users from '../models/Users.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await Users.find();
  res.json(users);
});

router.post('/', async (req, res) => {
  const newUser = new Users(req.body);
  await newUser.save();
  res.status(201).json(newUser);
});

export default router;