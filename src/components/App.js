import friends from '../data/friends.json';
import { useState } from "react";

function App() {
  // variables de estado//
  const [data, setData] = useState(friends);
  const [searchPhrase, setSearchPhrase] = useState("");
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
  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newPhrase])
  }

  //render//

  const htmlData = data
    .filter((friends) => {
      return friends.character.toLowerCase().includes(searchPhrase.toLowerCase());
    })
    .map((friends, index) => {
      return (
        <li className='phrase_person' key={index}>
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
          id="quote"
          value={newPhrase.quote}
          onChange={handleNewPhrase}
        />
        <br />
        personaje
        <input
          type="text"
          id="character"
          value={newPhrase.character}
          onChange={handleNewPhrase}
        />
        <br />
        <button
          onClick={handleClick}
        >Añadir nueva frase:</button>
      </form>

    </div>
  );
}

export default App;
