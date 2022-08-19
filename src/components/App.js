import friends from '../data/friends.json';
import { useState } from "react";

function App() {
  // variables de estado//
  const [data, setData] = useState(friends);
  const [searchPhrase, setSearchPhrase] = useState();
  const [newPhrase, setNewPhrase] = useState({
    quote: "",
    character: ""
  });


  const handleSearchPhrase = (ev) => {
    setSearchPhrase(ev.target.value);
  }
  const handleNewPhrase = (ev) => {
    setNewPhrase({
      ...newPhrase,
      [ev.target.id]: ev.target.value
    });
  }

  //render//

  const htmlData = data.map((friends) => {
    return (
      <li className='phrase_person'>
        <p className='phrase'>{friends.quote} </p>
        <p className='person'>{friends.character} </p>
      </li>
    )
  });
  return (
    <div className="page">
      <form action="">
        filtrar por frase
        <input type="text"
          value={searchPhrase}
          onChange={handleSearchPhrase} />
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
      <ul>{htmlData}</ul>
      <form action="">
        <p> Añadir nueva frase </p>
        frase
        <input
          type="text"
          id="phrase"
          value={newPhrase.quote}
          onChange={handleNewPhrase}
        />
        <br />
        personaje
        <input
          type="text"
          id="person"
          value={newPhrase.character}
          onChange={handleNewPhrase}
        />
        <br />
        <button>Añadir nueva frase:</button>
      </form>

    </div>
  );
}

export default App;
