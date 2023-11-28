import { useState,useEffect  } from 'react';

import axios from 'axios';

import { useNavigate , useParams} from 'react-router-dom';

function EditArticle() {

    const navigate=useNavigate();

    const [name, setName] = useState(""); 
    const [carat, setCarat] = useState(""); 
    const [color, setColor] = useState(""); 
    const [clarity, setClarity] = useState(""); 
    const [image, setImage] = useState("");
    const {id} = useParams();

    useEffect(()=>{
      axios.get('http://localhost:3002/diamonds/'+id).then(res => {
          setName(res.data.name);
          setCarat(res.data.carat);
          setColor(res.data.color);
          setClarity(res.data.clarity);
          setImage(res.data.image);
      })
    },[id]);

    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newProduct = {
        id:id,
        name,
        carat,
        color,
       clarity, 
        image
      };
    
   axios.put("http://localhost:3002/diamonds/"+id,newProduct)
  .then(res => {  
  console.log(res);
  navigate("/")
    })   
  .catch(error=>{
      console.log(error)
      alert("Erreur ! Modification non effectuée")
      })
  
  }

    return ( 
        <>
        <div className="container">
        <h2>Modification d'un diamonds </h2>
        <form onSubmit={handleSubmit}>
    <div className="grid gap-3">
    <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="carat"
          name="carat"
          type="number"
          value={carat}
          onChange={e => setCarat(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="color"
          type="text"
          value={color}
          onChange={e => setColor(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
        <input className="form-control"
          placeholder="clarity"
          type="text"
          value={clarity}
          onChange={e => setClarity(e.target.value)}
          />
     </div>
     <div className="col-sm-5 p-2 g-col-6">
     <input className="form-control"
          placeholder="Image"
          type="text"
          value={image}
          onChange={e => setImage(e.target.value)}
          />
    </div>    
    <div>{image?<img src={"/"+image} alt={image} width="70"/>:null}</div> 
     <div>
    <button className="btn btn-success">Valider</button>
    </div>  
    </div>
    </form>
   
  </div>
  </>
     );
}

export default EditArticle;
