import { getTodo } from "@/pages/api/todos/[todoId]"


export default function TodoPage({todo}){
    return(
        <>
            <h1>Todo Detail page</h1>
            <h2>{todo.title}</h2>
            <h2>{todo.description}</h2>
        </>
    )
}

export async function getServerSideProps(context){
    const {query} = context

    const todo = await getTodo(query)

    return {
        props : {
            todo : JSON.parse(JSON.stringify(todo))
        }
    }
}