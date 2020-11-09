import React,{useEffect,useState} from 'react'


export default function Cart(){
    const [cartTotal, setCartTotal] = useState(0);
let cart = [];
if(JSON.parse(localStorage.getItem('cart'))) 
{cart = JSON.parse(localStorage.getItem('cart'))};

const total = () => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].price;
    }
    setCartTotal(sum);
  };

  useEffect(() => {
    total();
  }, [cart]);


const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.iname}: ${el.price}`}
      
    </div>));



return(

<>
    <div>{cartItems}</div>
      <div>Total: ${cartTotal}</div>
</>)
}