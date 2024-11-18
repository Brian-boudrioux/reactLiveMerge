import { useState } from "react";

function SearchFilters({setCards}) {

  const [searchName, setSearchName] = useState("");


  function search(e) {
    setSearchName(e.target.value);
    fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${e.target.value}`)
    .then((response) => response.json())
    .then(({data}) => setCards(data));
  }

  return (
    <div>
      <input type="text" placeholder="Votre recherche" value={searchName} onInput={search} />
    </div>
  )
}

export default SearchFilters;