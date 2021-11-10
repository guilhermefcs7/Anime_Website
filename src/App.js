import React from 'react'
import { useEffect, useState } from "react";

import './styles.css';
import SearchInput from "./SearchInput";

const api = "https://kitsu.io/api/edge/";

function App() {
  const [text, setText] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    if (text) {
      fetch(`${api}anime?filter[text]=${text}&page[limit]=15`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    }
  }, [text]);

  return (
    <div className="App">
      <h1>Animes</h1>
      <div className="input-container">
      <SearchInput value={text} onChange={(search) => setText(search)} />
      </div>
      {text && !info.data && (
        <span>Carregando...</span>
      )}
      {info.data && (
        <ul className="animes-list">
          {info.data.map((animes) => (
            <li key={animes.id}>
              <div className="animes-list-padding">
              {animes.attributes.canonicalTitle}
              </div>
              <img src ={animes.attributes.posterImage.small} alt={animes.attributes.canonicalTitle} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
