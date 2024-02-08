import './App.css'
import CharacterTable from './components/character-table/character-table';
import DisplayDate from './components/display-date/display-date';
import DisplayTemp from './components/display-temp/display-temp';

import characters from './data/characters.json';

function App() {

  return (
    <>
      <h1>Demo 01</h1>
      {/* Ceci est un commentaire */}

      <DisplayDate />
      {/* <DisplayTemp value={13.3} /> */}

      <CharacterTable characters={characters} />
    </>
  )
}

export default App
