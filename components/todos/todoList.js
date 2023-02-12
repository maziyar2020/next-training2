import { CheckIcon, TrashIcon, PencilAltIcon } from '@heroicons/react/outline'
import Link from 'next/link';

const TodoList = ({ todos, onDelete, onMark, onEdit }) => {
    return (
        <>
            <div className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl">
                {/* loop over Array of data */}
                {todos.map(item =>
                    <div key={item._id} className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-md" >
                        {/* Todo name */}
                        <Link href={`/todos/${item._id}`}>
                            <span>{item.title} </span>
                        </Link>
                        <div className="flex gap-x-3 items-center">
                            {/* Task is Done */}
                            <button className="" onClick={() => { onMark(item.id) }}>
                                <CheckIcon className="w-6 h-6 stroke-green-400" />
                            </button>
                            {/* Delete Task */}
                            <button className="" onClick={() => { onDelete(item._id) }}>
                                <TrashIcon className="w-6 h-6 stroke-red-400" />
                            </button>
                            {/* Edit Task */}
                            <button className="" onClick={() => { onEdit(item._id) }}>
                                <PencilAltIcon className="w-6 h-6 stroke-blue-400" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default TodoList;

