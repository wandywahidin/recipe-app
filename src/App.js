import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";
import Heding from "./components/Heding";
import {v4 as uuidv4} from 'uuid';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('popular')

  const getData = () => {
    axios({
      method: "get",
      url: `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=ff2fe082&app_key=b9c6f0b35e433c0e8ad54c891c020789&imageSize=THUMBNAIL&random=false`,
    })
      .then(({ data }) => {
        setRecipes(data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addSearch = e => {
    setSearch(e.target.value)
  };

  const submitSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('');
  }

  useEffect(() => {
    getData();
  },[query]);

  return (
    <>
      <Heding propsSearch={search} propsFunctionSearch={addSearch} propsSubmit={submitSearch}/>
      <div className="row justify-content-center my-4">
        {
          recipes.map(recipe => <Card key={uuidv4()} recipe={recipe} />)
        }
      </div>
      
    </>
  );
}

export default App;
