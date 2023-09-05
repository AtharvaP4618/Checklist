import { useState } from 'react'

export function NewTodoForm({onSubmit}) {
//   onSubmit
  const [newItem, setNewItem] = useState("") 
  const [newPriority, setNewPriority] = useState("") 
    
  function submitFunc(e) {
    e.preventDefault()

    // if(newItem === "") return
    if (newItem === "" || !isPositiveNumber(newPriority)) {
      alert("Please enter a valid item and a positive priority number.");
      return;
    }
  

    const priorityAsNumber = newPriority !== "" ? Number(newPriority) : 0;

    onSubmit(newItem, priorityAsNumber)

    setNewItem("")
    setNewPriority("")
  }

  function isPositiveNumber(value) {
    return Number(value) > 0;
  }

  return(
  <form onSubmit={submitFunc} className='new-checklist'>
    <div className="form-row">
        <label htmlFor='item' className='labels'>New item</label>
        <input 
        className='inputs'
        value={newItem} 
        onChange={e => setNewItem(e.target.value)}
        type='text' 
        id='item'
        required
        />
        <label htmlFor='priority' className='labels'>Priority</label>
        <input 
        className='inputs'
        value={newPriority}
        onChange={e => setNewPriority(e.target.value)}
        type='number' 
        id='priority'
        required
        />
        <button className='btn'>Add item</button>
    </div>
  </form>)
}