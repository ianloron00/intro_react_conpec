// template completo: https://codepen.io/pen?template=QWQYNZe
// sign.conpec.com.br

import './App.css';
import { useState } from 'react';

const Form = (props) => {
  
  const { handleChange, formInput, handleSubmit } = props;
  
  return (
    <form onSubmit={handleSubmit} className="formInput">
      <label htmlFor="textInput"></label>
      <input type="text" clasName="textInput" value={formInput} onChange={handleChange}></input>
      <button className="btn-add" type="submit">Adicionar</button>
    </form>
  );
}

const Todo = (props) => {
  const {tasks, handleRemove} = props;
  
  return (
    <ul classname="todo">
      {tasks.map((task, index) =><li key={index}>
        <div className="checkAndTask">
          <label>
            <input type="checkbox"></input>
            <span className="checkmark"></span>
          </label>
          <span>{task.task}</span>
        </div>
        <button onClick=
        {()=>handleRemove(index)}>Deletar</button>
      </li>)}
    </ul>
  );
}

const App = () => {
  const [formInput, setFormInput] = useState();
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setFormInput(e.target.value);
  }

  const handleRemove = (index) =>  {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput != '') {
      const date = new Date().toLocaleString();
      const newTask = {
        date: date,
        task: formInput,
        completed: false
      }

      setTasks( [...tasks, newTask] )
      setFormInput('')
    }
  }

  return (
    <div className="App">
      <Form formInput={formInput} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Todo tasks={tasks} handleRemove={handleRemove}/>
    </div>
  );
}

export default App;