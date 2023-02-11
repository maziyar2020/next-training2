import { useState } from "react";

const TodoForm = ({ onAdd }) => {

    const [value, setValue] = useState('')

    return (
        <form className="w-full mb-1 max-w-screen-md bg-white p-2 md:p-4 rounded-xl flex justify-between items-center"
            onSubmit={e => onAdd(e, value)}
        >
            <input className="border rounded-sm" type="text" value={value} onChange={({ target }) => setValue(target.value)} />
            <button className="bg-violet-500 p-2 rounded text-sm">Add New Todo</button>
        </form>
    )
}

export default TodoForm;