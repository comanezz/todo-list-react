import logo from './logo.svg';
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
    alert('you entered ' + listValue);
  }

  function handleChange(e) {
    setListValue(e.target.value)
  }

  return (
    <div id='container'>
      <Title />
      <InputFieldList
        value={listValue}
        handleSubmit={handleSubmit}
        onChange={handleChange} />
      <ListContent todos={todos} />
    </div>
  );
}

export default App;
