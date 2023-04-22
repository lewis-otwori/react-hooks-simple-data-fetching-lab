// create your App component here
import React, {useEffect, useState} from 'react'

function App() {
const [smallDog, setsmallDog] =useState([])
const [imageUrl, setImageUrl] =useState(null);

useEffect(() => {
fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            setsmallDog(data.message);
            setImageUrl(true)
        });

})
 if(!imageUrl) return <p>Loading...</p>;

  return (
   <div>
      <img src={smallDog} alt= "A Random Dog" /> 
    </div>
  )
}

export default App
