import { useState } from "react";

const TodoForm = ({ onAdd }) => {


    const [formData, setFormData] = useState({
        title: '', description: ''
    })
    const [isShow, setIsShow] = useState(false)

    const changeHandler = (e) => {
        const { target } = e
        setFormData({ ...formData, [target.name]: target.value })
    }

    if (!isShow) {
        return (
            <div className="">
                <button onClick={() => { setIsShow(true) }} className="w-full px-8 py-2 font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out">
                    Add new Todo
                </button>
            </div>
        )
    }

    return (
        <form className="w-full mb-1 max-w-md bg-white p-2 md:p-4 rounded-xl "
            onSubmit={e => onAdd(e, formData)}
        >
            {/* title */}
            <div className="mb-4">
                <label className="text-gray-600 mb-1 block" htmlFor="todo-title">Title</label>
                <input
                    name="title"
                    placeholder="Todo Title ..."
                    id="todo-title"
                    className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 focus:border-none w-full block transition duration-300 ease-out"
                    type="text" value={formData.title}
                    onChange={changeHandler}
                />
            </div>
            {/* description */}
            <div className="mb-8">
                <label htmlFor="todo-description" className="text-gray-600 mb-1 block">Description</label>
                <textarea
                    name="description"
                    id="todo-description"
                    className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 focus:border-none w-full block transition duration-300 ease-out"
                    onChange={changeHandler}
                >
                </textarea>
            </div>
            {/* buttons */}
            <div className="flex flex-center gap-x-4">
                <button onClick={() => setIsShow(false)} type="button" className="w-full py-2 text-blue-500 border border-blue-500 rounded-lg transition-all duration-300 ease-in-out">
                    cancel
                </button>
                <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out" type="submit">
                    confirm
                </button>
            </div>
        </form>
    )
}

export default TodoForm;