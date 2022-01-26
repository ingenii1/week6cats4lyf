
import { useState } from "react";
import { ClipLoader } from "react-spinners"


const Basket = (props) => {


    const [catsBought, setCatsBought] = useState(false)
    const [loading, setLoading] = useState(false)
    let catBasket = props.catBasket
    let setcatBasket = props.setCatBasket

    const getTotal = () => {
        let sum = 0
        for (let i in catBasket) {
            sum += catBasket[i].price 
        }
        return sum
    }

    const notification = async () => {
        setLoading(true)
    setTimeout(() => {
        setcatBasket([])
        setCatsBought(true)
        setLoading(false) 
    
    }, 1000)
     
    }

    const removeCat  = (catName) => {
        let newBasket = [...catBasket];
        newBasket.splice(catName,1);
        setcatBasket(newBasket)
        console.log(catBasket)

    }
    

    return (

    <div>
        {loading ? (
        <ClipLoader loading={loading} width={150} height={5} />
        ) 
        : 
        (
        catsBought ? 
            <h2>Thank you for your custom, your felines will arrive soon! </h2>
        :  
       
        <div>
           
            {catBasket.map((product, index) => {
                return(
      
                <BasketItem key={index} product={product} image={product.url} price={product.price} remove={removeCat}/>  
                    
                )
                 
            })}
            <div className="checkoutBox">
            <h3>Your total is: £{getTotal()}</h3>,
            <button onClick={notification}>Purchase here</button> 
            </div>
        </ div>
        
        )
    }

    </div>
    )

} 

const BasketItem = (props) => {
    return(
        <div className="basketItem">
            <img className="basketImage" src={props.image} alt="a cat" />
            <h3 className="basketName">{props.product.name}</h3>
            <h3 className="basketPrice">£{props.product.price}</h3>
            <button onClick={() => props.remove(props.product.name)}>Remove</button>
        </div>
    )
    
}

export default Basket;
