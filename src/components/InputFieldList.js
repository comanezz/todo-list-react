export default function InputFieldList({ value, handleSubmit,onChange }) {
  return (
    <div id="form-container">
      <form onSubmit={handleSubmit}>
        <input type='text'
          name='listValue'
          className="width-100"
          placeholder="Add new"
          value={value}
          onChange={onChange}
        />
        <input type='submit' />
      </form>
    </div>
  )
}