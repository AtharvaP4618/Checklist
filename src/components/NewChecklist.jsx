import { ToDoItem } from "./ToDoItem"

export function NewChecklist({todos, toggleTodo, deleteTodo}) {

  const sortedTodos = [...todos].sort((a, b) => a.priority - b.priority);

  return (
      <ul className='list'>
      {sortedTodos.length === 0 && "No ToDos"}
      {sortedTodos.map(todo => {
        return (
          <ToDoItem 
          {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
          />
        )
      })}  
    </ul>
  )
}