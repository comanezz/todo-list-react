import { useState } from "react";
import './styles/module/Style.css';
import Title from './components/Title.js'
import InputFieldList from './components/InputFieldList.js'
import ListContent from './components/ListContent.js'

function App() {
  const [listValue, setListValue] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, listValue]);
    setListValue('');
  }

  function handleChange(e) {
    setListValue(e.target.value)
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div id='container'>
      <Title />
      <InputFieldList
        value={listValue}
        handleSubmit={handleSubmit}
        onChange={handleChange} />
      <ListContent todos={todos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
