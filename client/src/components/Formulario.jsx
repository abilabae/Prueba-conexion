import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom";
import axios from 'axios'


const Formulario = () => {

const navigate=useNavigate();
const[usuario, setUsuario]= useState({});

const handleSetUsuario=({ target:{value, name}})=>{
  const field={};
  field[name]=value;
  setUsuario({...usuario, ...field});
};

const registrarUsuario=async()=>{
  const urlServer="http://localhost:3000";
  const endpoint="/usuarios"
  try {
    await axios.post(urlServer + endpoint, usuario);
    alert("Usuario registrado con exito");
    navigate("/login");
  } catch (error) {
    alert("Algo salió mal...")
    console.log(error)
  }
}

      
//     try {
//         const body= {nombre, email, direccion, password}
//         fetch ("http://localhost:3002/usuarios", {
//             method:"POST",
//             headers:{"Content-type": "application/json"},
//             body: JSON.stringify(body)
//         })
//     } catch (error) {
//         console.log(error)
//     }



  return (
    <div>
      <form >

        <div>
            <label className='form-label' htmlFor='title'>Nombre</label>
            <input className="form-control" type="text" id="title" value={usuario.nombre} onChange={handleSetUsuario}/>
        </div>

        <div>
            <label className='form-label' htmlFor='title'>email</label>
            <input className="form-control" type="email" id="email" value={usuario.email} onChange={handleSetUsuario}/>
        </div>

        <div>
            <label className='form-label' htmlFor='title'>Direccion</label>
            <input className="form-control" type="addres" id="addres" value={usuario.direccion} onChange={handleSetUsuario}/>
        </div>

        <div>
            <label className='form-label' htmlFor='title'>Password</label>
            <input className="form-control" type="password" id="password" value={usuario.password} onChange={handleSetUsuario}/>
        </div>

        <button className='btn btn-primary' onClick={registrarUsuario}>Registrarse</button>

      </form>
    </div>
  )
}

export default Formulario;
