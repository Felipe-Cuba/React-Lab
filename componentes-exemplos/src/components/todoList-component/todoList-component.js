const TodoList = ({ image, alt }) => {
  return (
    <>
      <h1>Hedy Lammar's Todos</h1>
      <img src={image} alt={alt} className="photo" />
      <ul>
        <li> Invent new trafic lights</li>
        <li> Invent new trafic lights</li>
        <li> Invent new trafic lights</li>
      </ul>
    </>
  );
};

export default TodoList;
