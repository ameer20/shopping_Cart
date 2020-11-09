import React ,{useState} from 'react'

export default function Home(){

    const itemList = [{id:1 ,iname:"Bulb" , price:50},{id:2 ,iname : "Glass" , price:80},
    {id:3 ,iname : "Tray" , price:100}];

    // let [cart, setCart] =  useState([])
    
     const addToCart = (el) => {
        let cart =JSON.parse(localStorage.getItem("cart"));
        const updatedList = [...cart, el];
        localStorage.setItem('cart',JSON.stringify(updatedList));
       
    };



    return(
        <> <br/> <br/>
        Shopping Items <br/> <br/>
        {itemList.map((e)=>(
            <div class='boxed' >
                 {`${e.iname}: ${e.price}`}
                 <button onClick={()=>{
                     addToCart(e);
                 }}>add</button>
            </div>
        ))}
        </>
    );
}

