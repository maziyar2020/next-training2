import { todos } from '../../../../data/todos'

export default function handler(req, res) {

    const Method = req.method

    switch (Method) {
        case "POST":
            const newTodo = {
                id: Date.now(),
                title: req.body.item
            }
            todos.push(newTodo)
            return res.status(201).json({message : "New Data Added" ,todos})

        case "GET":
            return res.status(200).json({ todos })

        default:
            break;
    }
}