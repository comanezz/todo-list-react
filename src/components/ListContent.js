function ListValueContent({ todos, handleDelete }) {
  
  return (
    <div>
      <ul>
        {todos.map((todo, index) =>
          (
            <li key={index}>
              {todo}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default function ListContent({ todos, handleDelete }) {
  return (
    <div>
      <ListValueContent todos={todos} handleDelete={handleDelete} />
    </div>
  )
}