import { useState } from "react";

export default function InputFieldList() {
  const [listValue, setListValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    alert('you entered ' + listValue);
  }

  return (
    <div id="form-container">
      <form onSubmit={handleSubmit}>
        <input type='text'
          name='listValue'
          className="width-100"
          placeholder="Add new"
          
          onChange={(e) => setListValue(e.target.value)}
        />
        <input type='submit' />
      </form>
    </div>
  )
}