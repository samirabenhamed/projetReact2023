import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AjoutDiamonds() {
  const navigate = useNavigate();

  const [name, setName] = useState(""); 
  const [carat, setCarat] = useState(""); 
  const [color, setColor] = useState(""); 
  const [clarity, setClarity] = useState(""); 
  const [image, setImage] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDiamond = {
      name,
      carat,
      color,
      clarity,
      image,
    };

    axios.post("http://localhost:3002/diamonds", newDiamond)
      .then(res => {
        console.log(res);
        navigate("/");
      })
      .catch(error => {
        console.log(error);
        alert("Erreur ! Insertion non effectuée");
      });
  }

  return (
    <div className="container">
      <h2>Ajout d'un diamant</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          placeholder="Nom"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className="form-control"
          placeholder="Carat"
          type="text"
          value={carat}
          onChange={e => setCarat(e.target.value)}
        />
        <input
          className="form-control"
          placeholder="Couleur"
          type="text"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <input
          className="form-control"
          placeholder="Clarté"
          type="text"
          value={clarity}
          onChange={e => setClarity(e.target.value)}
        />
        <input
          className="form-control"
          placeholder="Image"
          type="text"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <button className="btn btn-success">Valider</button>
      </form>
    </div>
  );
}

export default AjoutDiamonds;
