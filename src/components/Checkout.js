import React from 'react'
import {useStateValue} from "./StateProvider";
import Checkoutproduct from "./Checkoutproduct";
import  "./Checkout.css"






function Checkout() {

const [{basket},dispatch] = useStateValue();

    return (<div className="checkout">

        <div className="checkout__left">

        <img src="https://www.katiedidwhat.com/wp-content/uploads/2018/07/benefits-of-an-amazon-prime-membership.png" className="checkout_ad"></img>
            
            {basket?.length === 0 ?(
                <div>
                    <h2>Your Basket is Empty</h2>
                    <p>You have no items in your basket.To buy one or more items click "add to basket" next to the an item.</p>
                  
                </div>
            ):(
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item=>(
                         <Checkoutproduct
                            id={item.id}
                             title={item.title}
                             image={item.image}
                            price={item.price}
                             rating={item.rating} />

                    ))}

                  
                </div>

            )}
            </div>

            {basket.length>0 &&(
                <div className="checkout__right">
                    <Subtotal/>
                    </div>
            )}

        </div>
    )
}

export default Checkout
