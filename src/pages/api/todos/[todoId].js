
import dbConnect from "server/utils/dbConnect"

import Todo from '../../../../server/models/todo'
dbConnect()

export default async function handler(req, res) {
    const { method, query } = req

    if (method === "DELETE") {
        await Todo.findByIdAndDelete(query.todoId)
        const todos = await Todo.find({})
        return res.status(200).json({ message: 'Todo deleted', todos })
    } else if (method === "GET") {
        const todo = await getTodo(query)
        return res.status(200).json({ message: "todo loaded", todo })
    }
}

export async function getTodo(query) {
    const todo = await Todo.findById(query.todoId)
    return todo
}