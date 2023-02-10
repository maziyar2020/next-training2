import axios from "axios"
import Navbar from "components/common/Navbar"
import { CheckIcon, TrashIcon, PencilAltIcon } from '@heroicons/react/outline'

import LoadingSpinner from "components/common/Loading/Loading"
import { useEffect, useState } from "react"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('/api/todos')
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  if (loading) return <div className="loading"> <LoadingSpinner /> </div>

  const deleteTodos = (item) => console.log(item);
  const doneTodos = (item) => console.log(item);
  const editTodos = (item) => console.log(item);


  return (
    <main className="bg-gray-50 min-h-screen">
      {/* main Navbar */}
      <Navbar />
      {/* Main content container */}
      <div className="container p-2 xl:max-w-screen-xl mx-auto">
        <section className="flex justify-center items-center">
          <div className="w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl">
            {/* loop over Array of data */}
            {data.todos.map(item =>
              <div key={item.id} className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-md" >
                {/* Todo name */}
                <span>{item.title} </span>
                <div className="flex gap-x-3 items-center">
                  {/* Task is Done */}
                  <button className="" onClick={() => { doneTodos(item.id) }}>
                    <CheckIcon className="w-6 h-6 stroke-green-400" />
                  </button>
                  {/* Delete Task */}
                  <button className="" onClick={() => { deleteTodos(item.id) }}>
                    <TrashIcon className="w-6 h-6 stroke-red-400" />
                  </button>
                  {/* Edit Task */}
                  <button className="" onClick={() => { editTodos(item.id) }}>
                    <PencilAltIcon className="w-6 h-6 stroke-blue-400" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

    </main>
  )
}

