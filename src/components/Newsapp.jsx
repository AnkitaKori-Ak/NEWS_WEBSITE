import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
  const [search,setSearch] = useState("india");
  const [data,setData] = useState(null)
  const API_KEY = "2159a0e06a024302905698095bc15bd8";

  const getData = async()=>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setData(jsonData.articles);
  }

  useEffect(()=>{
    getData()
  },[])

  const handleInput = (e) =>{
    console.log(e.target.value);
    setSearch(e.target.value);

  }
  const userInput = (event) =>{
    setSearch(event.target.value);
    getData()
  }
  return (
    <div>
      <nav>
        <div>
          <h1>TRENDY NEWS</h1>
        </div>
        <ul>
          <a>All Trending...</a>
          <a>News Are Available Here</a>

        </ul>
        <div className='searchBar'>
          <input type = 'text' placeholder='Search News' value ={search} onChange={handleInput}/>
          <button onClick={getData}>SEARCH</button>
        </div>
      </nav>
      <div>
        <p className='head'>Stay Updated With TrendyNews </p>
      </div>
      <div className='categoryBtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="politics">Politics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      <div>
        {data?<Card datas={data}/> : null}
       
      </div>
    </div>
  )
}

export default Newsapp