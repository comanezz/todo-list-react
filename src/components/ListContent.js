function ListValueContent({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) =>
          (
            <li key={todo}>
              {todo}
            </li>
          )
        )}
      </ul>
    </div>
  )
}

export default function ListContent({ todos }) {
  return (
    <div>
      <ListValueContent todos={todos} />
    </div>
  )
}