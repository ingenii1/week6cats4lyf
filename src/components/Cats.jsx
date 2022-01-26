import { useState } from "react"
import '../App.css';
import faker from  'faker';
import { useEffect } from "react"




const Cats =  (props) => {
  const [kittiesArray, setKittiesArray] = useState([])
  let catBasket = props.catBasket
  let setcatBasket = props.setCatBasket
  useEffect(() => {
    getCat()
  }, [])




  const updateBasket = (cat) => {
    let newBasket = [...catBasket];
    newBasket.push(cat)
    setcatBasket(newBasket)
    console.log(catBasket)
    
  }
  

  const getCat = async () => {
      const response = await fetch( "https://api.thecatapi.com/v1/images/search?limit=20",{
      method: "GET",})
      const kittyarray = await response.json();
      for (let i=0; i < kittyarray.length; i++){
       
        kittyarray[i].name=faker.name.firstName();
        kittyarray[i].bio=faker.name.jobTitle();
        kittyarray[i].price= Math.floor(Math.random() * (30-5) + 5);

      }
     
      setKittiesArray(kittyarray)
      console.log(kittyarray)

  }


  

  return(
      <div>

     
      {/* <button onClick={getCat}>Get you a cat!</button> */}
      <div className="mainpage">
      <div className="catList">
      {kittiesArray.map((cat, index) =>{
      return <CatCard key={index} data={cat} image={cat.url} updateBasket={updateBasket}/>    

      })}
      </div>
      </div>
      </div>

  )
  
};



const CatCard = (props) => {

  return (
    <div className="catCard">
      <img className= "catImages"src={props.image} alt="a cat"/>
      <button onClick={ () => props.updateBasket(props.data)}>Add to basket</button>
      <div className="catInfo">
        <div className="cardText">
          <h3 id="catName">{props.data.name}</h3>
          <h3 id="catBio">{props.data.bio}</h3>
          <h3 id="catPrice"> Price: £{props.data.price}</h3>
        </div>
      </div>
     </div>
  )
  
}


// questions to ask: faker is not working and how to push header to top
// css for cat card not working
//why doI need return in the map array  react_devtools_backend.js:4045 Warning: Functions are not valid as a React child.
//why two children with the same ind
//





export default Cats;
