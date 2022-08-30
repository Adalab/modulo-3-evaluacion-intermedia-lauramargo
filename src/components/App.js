import Api from '../services/fetch.js';
import { useState, useEffect } from "react";


const App = () => {
  // variables de estado//
  const [data, setData] = useState([]);
  const [newPhrase, setNewPhrase] = useState({
    quote: "",
    character: "",
  });
  const [filterC, setFilterC] = useState('all');
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    Api().then((data) => {
      setData(data);
    });
  }, []);

  const handleNewPhrase = (ev) => {
    setNewPhrase({
      ...newPhrase,
      [ev.target.id]: ev.target.value,
    });
  };

  const handleSearchPhrase = (ev) => {
    setSearchPhrase(ev.target.value);
  };
  const handleFilterCharacter = (ev) => {
    setFilterC(ev.target.value);
  };



  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newPhrase]);
  };

  //render//

  const htmlData = data
    .filter((item) => {
      return item.quote.toLowerCase().includes(searchPhrase.toLowerCase());
    })
    .filter((item) => {
      if (filterC === 'all') {
        return true;
      }
      return item.character === filterC;
    })
    .map((item, index) => {
      return (
        <li className='phrase_person' key={index}>
          <p className='phrase'>{item.quote} </p>
          <p className='person'>{item.character} </p>
        </li>
      );
    });

  return (
    <div className="page">
      <form action=""
        htmlFor="character">
        filtrar por frase
        <input type="text"
          name="quote"
          id="quote"
          value={searchPhrase}
          onChange={handleSearchPhrase} />
      </form>
      <form action="">
        filtrar por personaje
        <select
          onChange={handleFilterCharacter}
          value={filterC}>
          <option value="all">Todos</option>
          <option value="Ross">Ross</option>
          <option value="Monica">Monica</option>
          <option value="Joey">Joey</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Chandler">Chandler</option>
          <option value="Rachel">Rachel</option>
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
};


export default App;
