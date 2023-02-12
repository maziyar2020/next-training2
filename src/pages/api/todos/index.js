import dbConnect from "server/utils/dbConnect"

import Todo from '../../../../server/models/todo'
dbConnect()

export default async function handler(req, res) {

    const { method, body } = req

    if (method === "POST") {
        const { item } = body
        await Todo.create({ title: item.title, description: item.description })
        const todos = await Todo.find({})
        return res.status(201).json({ message: "New Data Added", todos })
    } else if (method === "GET") {
        const todos = await Todo.find({})
        return res.status(200).json({ todos })
    }

}