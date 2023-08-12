const pool=require('./conexion')
const bcrypt=require('bcryptjs')


const registrarUsuario= async (usuario)=>{
    let {nombre, email, direccion, password}=usuario
    const passwordEncriptada=bcrypt.hashSync(password)
    password=passwordEncriptada
    const values=[nombre, email, direccion, passwordEncriptada]
    const consultas="INSERT INTO usuarios values (DEFAULT, $1, $2, $3, $4)"
    await pool.query(consultas,values)
}


module.export={
    registrarUsuario
}
