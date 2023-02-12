import axios from "axios"
import Navbar from "components/common/Navbar"
import LoadingSpinner from "components/common/Loading/Loading"
import { useEffect, useState } from "react"
import TodoList from "components/todos/todoList"
import AddNewTodo from "components/todos/AddNewTodo"
import Todo from "server/models/todo"

export default function Home({todos}) {
  // our states
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(todos)

  // fetching Data
  useEffect(() => {
    axios.get('/api/todos/')
      .then(({ data }) => {
        setData(data.todos)
        setLoading(false)
      })
      // we can handle errors from here
      .catch(err => console.log(err))
  }, [])

  // this function will delete our selected Todo
  const deleteTodos = (item) => {
    axios.delete(`/api/todos/${item}`).then(({ data }) => {
      setData(data.todos)
      setLoading(false)
    })
  }
  // add new Todo
  const addTodo = (e, item) => {
    e.preventDefault()
    axios.post(`/api/todos/`, { item }).then(({ data }) => {
      setData(data.todos)
      setLoading(false)
    })
  }
  // this function will mark our todo To DOne status
  const doneTodos = (item) => {
    axios.put(`/api/todos/${item}`)
      .then(({ data }) => {
        console.log(data);
      })
  }


  const editTodos = (item) => console.log(item);

  // Dont load the page if request is loading and data not set
  if (loading) return <div className="loading"> <LoadingSpinner /> </div>

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* main Navbar */}
      <Navbar />
      {/* Main content container */}
      <div className="container p-2 xl:max-w-screen-xl mx-auto">
        <section className="flex flex-col md:flex-row md:items-start md:gap-x-3 md:gap-y-4 gap-x-8 gap-y-7 justify-center items-center ">
          <AddNewTodo onAdd={addTodo} />
          <TodoList
            todos={data}
            onDelete={deleteTodos}
            onMark={doneTodos}
            onEdit={editTodos}
          />
        </section>
      </div>

    </main>
  )
}


export async function getServerSideProps(context){
  const todos = await Todo.find({})

  return {
      props : {
          todos : JSON.parse(JSON.stringify(todos))
      }
  }
}