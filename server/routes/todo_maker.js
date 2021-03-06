import express from 'express'
const router = express.Router()


router.post('/db', async (req, res) => {
    const {id, description, status, user_id} = req.body   
    await knex.raw(

`
INSERT INTO todos (id, description, status, user_id)
VALUES (?,?,?,?)
`
,
[id, description, status, user_id]
    )
    res.json({message: 'we know ya aint gon do it but its on the lsit'})
})