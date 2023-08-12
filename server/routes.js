const express= require('express')
require('dotenv').config();

const router=express.Router();
const pool=require('./conexion')

const{registrarUsuario}=require('./consultas')

router.get('/', (req,res)=>{
    res.send('Servidor en express')
})

router.post('/usuarios'), async (req, res)=>{
    try {
        const usuario=req.body
        await registrarUsuario(usuario)
        res.send("Usuario creado con exito")
    } catch (error) {
        res.status(500).send(error)
    }
}


// router.post('/usuarios', async(req, res)=>{
//     try {
//         const {nombre, email, direccion, password}=req.body;
//         const consulta= 'INSERT INTO usuarios values (DEFAULT, $1, $2, $3, $4)';
//         const values=[nombre, email, direccion, password]
//         const result= await pool.query(consulta, values)
//         res.json(result)
        
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

module.exports= router;