import logo from './logo.svg';
import { useState } from "react";
import './styles/module/Style.css';
import Title from './components/Title.js'
import InputFieldList from './components/InputFieldList.js'

function App() {
  const [listValue, setListValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    alert('you entered ' + listValue);
  }

  function onChange(e) {
    setListValue(e.target.value)
  }

  return (
    <div id='container'>
      <Title />
      <InputFieldList value={listValue} handleSubmit={handleSubmit} onChange={onChange} />
    </div>
  );
}

export default App;
