import { useEffect, useState } from 'react'
import './styles.css'
import { NewTodoForm } from './components/NewTodoForm'
import { NewChecklist } from './components/NewChecklist'

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []

    const parsedTodos = JSON.parse(localValue);

    // Set a default priority of 1 for items without a priority
    const todosWithDefaultPriority = parsedTodos.map((todo) => ({
      ...todo,
      priority: typeof todo.priority === "number" ? todo.priority : 1,
    }));

    return todosWithDefaultPriority;

    // return JSON.parse(localValue)
  }) 

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title, priority){
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed:false, priority}
      ]
    })
  }  

  function toggleTodo(id,completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return(
    <>
      <h1>CheckList</h1>
      <NewChecklist todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      <NewTodoForm onSubmit = {addTodo} />
    </>  
  )
}