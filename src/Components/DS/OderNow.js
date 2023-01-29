import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import offerElements from './JsonData/Restarant.json';


function OrderNow() {
    const { rest_id } = useParams(); 
       console.log("this.context:", rest_id)
    const [products,setProducts] = useState([])

    useEffect(()=>{
        getRestaurants()
    })

    const getRestaurants = () =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${rest_id}`).then(res=>{
            if(res.ok){
                return res.json()
            }else{
                console.log("empty")
            }
        })
        .then(data=>console.log(data))
    }
   
    


    
}
export default OrderNow;