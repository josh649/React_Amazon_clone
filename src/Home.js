import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">

          <img className="home__image"
          src="https://cdn.technadu.com/wp-content/uploads/2018/07/Amazon-Prime-Day-2018-Featured-Banner.jpg"
          alt=""></img>


        <div className="home__row">
            <Product
              id="231313"
              title="Charles Bentley Monster 12ft Trampoline"
              price={300}
              rating={5}
              image="https://outdoorfun.ie/wp-content/uploads/2019/12/trampoline-enclosure-set-equipped-scm34wQK7-1RAQ.jpg"
              ></Product>

            <Product
              id="231314"
              title="The Thursday Murder Club:"
              price={7.59}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/51AI72eFWbL._SX323_BO1,204,203,200_.jpg"
              ></Product>

          </div>

          <div className="home__row">
            <Product
              id="231315"
              title="Fortnite Fortnite Battle Royale Collection "
              price={30}
              rating={2}
              image="https://images-na.ssl-images-amazon.com/images/I/71cBl55GMzL._AC_SL1500_.jpg"
              ></Product>

            <Product
              id="231316"
              title="
              Beikell Adjustable Car Phone Holder Mount Cradle"
              price={7.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71XxVFxOJrL._AC_SL1500_.jpg"
              ></Product>
            
            <Product
              id="231317"
              title='BYTTRON Smartwatch Women'
              price={25.27}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/61gP5d5FXDL._AC_SL1500_.jpg"
              ></Product>

          </div>

          <div className="home__row">
            <Product
              id="231318"
              title="LG 43UN71006LB 43 Inch UHD 4K HDR Smart LED TV"
              price={379}
              rating={1}
              image="https://images-na.ssl-images-amazon.com/images/I/81gIeZ6rr0L._AC_SL1500_.jpg"
              ></Product>

          
          </div>



        </div>

      
    );
}

export default Home
