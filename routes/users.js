import express from 'express';


import { createUser, getUser, deleteUser, patchUser, getEsUser } from '../controllers/users.js';



const router = express.Router();

let users = [];
router.get('/', getUser);

router.post('/', createUser);

router.get('/:id/', getEsUser);

router.delete('/:id/', deleteUser);


router.patch('/:id/', patchUser);

export default router;