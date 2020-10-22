import React from 'react'
import  "./Checkoutproduct.css"
import {useStateValue} from "./StateProvider";
import Subtotal from "./Subtotal";



function Checkoutproduct({id,title,image,price,rating}) {

    const [{basket},dispatch] = useStateValue();


    const removeFromBasket =()=>{

        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,


        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""></img>

            <div className="checkoutProduct__info">
                <p className="checkboxProduct__title">{title}</p>


                <p className="checkoutProduct__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) =>(
                        <span>⭐</span>
                    ))
                }

                </div>

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>

            



            </div>
       
    );
}

export default Checkoutproduct
