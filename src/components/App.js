import Api from '../services/fetch.js';
import { useState, useEffect } from "react";
import '../styles/App.scss';


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
        <li className='ul__person' key={index}>
          <p className='ul__person--phrase'>{item.quote} </p>
          <p className='ul__person--person'>{item.character} </p>
        </li>
      );
    });

  return (
    <div className="page">
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <form className='filters'>

        <label className='filters__byPhrase' htmlFor="character">
          filtrar por frase
          <input
            type="text"
            name="quote"
            id="quote"
            value={searchPhrase}
            onChange={handleSearchPhrase} />

        </label>
        <label className="character" >
          filtrar por personaje
          <select className='filters__character'
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
        </label>
      </form>


      <ul className='ul'>{htmlData}</ul>
      <form className='new'>
        <h2 className='new__phrase'> Añadir nueva frase </h2>
        frase
        <label htmlFor="quote">
          <input
            type="text"
            id="quote"
            value={newPhrase.quote}
            onChange={handleNewPhrase}
          />
        </label>
        <label htmlFor="character">
          <span>personaje</span>
          <input
            type="text"
            id="character"
            value={newPhrase.character}
            onChange={handleNewPhrase}
          />
        </label>
        <button className="button"
          onClick={handleClick}
        >Añadir nueva frase:</button>
      </form>
    </div >
  );
};


export default App;
