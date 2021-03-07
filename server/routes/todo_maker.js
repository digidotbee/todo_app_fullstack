import express from 'express'
const router = express.Router()
import knex from '../db.js'

router.get('/todos', async(req, res) => {
    // const todos = await knex.raw('SELECT * FROM todos')
    // const rows = todos.rows
    // res.json(rows)
    res.json({message:"test!!!"})
})


router.post('/todos', async (req, res) => {
    const {description, status, user_id} = req.body   
    await knex.raw(

`
INSERT INTO todos (description, status, user_id)
VALUES (?,?,?);
`
,

[description, status, user_id]
    );
    res.json({message: 'we know ya aint gon do it but its on the lsit'})
})

export default router