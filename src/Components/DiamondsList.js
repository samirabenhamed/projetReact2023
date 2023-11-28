import axios from 'axios';
import {useEffect,useState} from 'react';
import DiamondsElement from './DiamondsElement';
function DiamondsList() {
    const[articles,setArticles]=useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:3002/diamonds")
        .then((response)=>setArticles(response.data));
       }, []);

    
          const deleteProd = async (id) => {
            if (!window.confirm("Are you sure you want to delete")) {
              return;
            }
        
            axios.delete('http://localhost:3002/diamonds/' + id)
              .then(() => {
                console.log('successfully deleted!')
                setArticles(prevArticles => prevArticles.filter((article) => article.id !== id));
              }).catch((error) => {
                console.log(error)
              })
        
          }
      

    return ( 
        <>
        <h2>Liste des diamonds </h2>
        <DiamondsElement articles={articles} deleteProd={deleteProd}/>
        </>
     );
}

export default DiamondsList;

