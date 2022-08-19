

function App() {
  return (
    <div className="page">
      <form action="">
        filtrar por frase
        <input type="text" />
      </form>
      <form action="">
        filtrar por personaje
        <select>
          <option>todos</option>
          <option>Ross</option>
          <option>Monica</option>
          <option>Joey</option>
          <option>Phoebe</option>
          <option>Chandler</option>
          <option>Rachel</option>
        </select>
      </form>
      <ul></ul>
      <form action="">
        <p> Añadir nueva frase </p>
        frase
        <input
          type="text"
          id="phrase"
        />
        <br />
        personaje
        <input
          type="text"
          id="person"
        />
        <br />
        <button>Añadir nueva frase:</button>
      </form>

    </div>
  );
}

export default App;
