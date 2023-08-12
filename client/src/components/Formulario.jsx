import React from 'react'
import { useState } from 'react'

const Formulario = () => {
const [nombre, setNombre]=useState("")
const [email, setEmail]=useState("")
const [direccion, setDireccion]=useState("")
const [password, setPassword]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault()

    
    try {
        const body= {nombre, email, direccion, password}
        fetch ("http://localhost:3002/usuarios", {
            method:"POST",
            headers:{"Content-type": "application/json"},
            body: JSON.stringify(body)
        })
    } catch (error) {
        console.log(error)
    }
}


  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
            <label className='form-label' htmlFor='title'>Nombre</label>
            <input className="form-control" type="text" id="title" value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
        </div>

        <div>
            <label className='form-label' htmlFor='title'>email</label>
            <input className="form-control" type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div>
            <label className='form-label' htmlFor='title'>Direccion</label>
            <input className="form-control" type="addres" id="addres" value={direccion} onChange={(e)=>setDireccion(e.target.value)}/>
        </div>

        <div>
            <label className='form-label' htmlFor='title'>Password</label>
            <input className="form-control" type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        <button className='btn btn-primary'>Registrarse</button>

      </form>
    </div>
  )
}

export default Formulario;
