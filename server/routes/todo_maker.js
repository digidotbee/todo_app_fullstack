import express from "express"
const router = express.Router()
import knex from "../db.js"

// GET REQ

router.get("/todos", async (req, res) => {
  const todos = await knex.raw(`
  SELECT * FROM todos
  WHERE user_id = ?
  `, [req.user.id])
  const rows = todos.rows
  res.json(rows)
  // res.json({ message: "test!!!" })
})

// POST REQ

router.post("/todos", async (req, res) => {
  const user_id = req.user.id
  const { description, status} = req.body
  await knex.raw(
    `
INSERT INTO todos (description)
VALUES (?,?,?);
`,
    [description, 'active', user_id] // changed status to active
  )
  res.json({ message: "we know ya aint gon do it but its on the lsit"})
})

// UPDATE REQ

router.patch("/todos/:todoid", async (req, res) => {
  const todoid = req.params.id
  const { status } = req.body
  await knex.raw(
    `
UPDATE status
SET status = ?
WHERE id = ?
`,
    [status, todoid]
  )
  res.json({ message: "the robots have update your todo" })
})

// // DELETE REQ

// router.patch("/todos/todoid", async (req, res) => {
//   const todoid = req.params.user_id
//   const { description, status, user_id } = req.body
//   await knex.raw(
//     `
// DELETE FROM todos 

// WHERE user_id = ?
// `,
//     [user_id]
//   )
//   res.json({ message: "be gone" })
// })

export default router
