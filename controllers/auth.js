const UsuarioSys = require('../models/usuario')
const { request, response } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Registra un usuario
const register = async (req = request, res = response) => {
    const {email, password} = req.body;
        try{
            const usuarioSysBD = await UsuarioSys.findOne({
                email
            })
            if (usuarioSysBD){
                return res.status(400).json({ 
                    msg: 'Ya existe el usuario' 
                })
            }
            const usuarioSys = new UsuarioSys(req.body);
            const salt = await bcrypt.genSalt()
            const passwordEnc = await bcrypt.hashSync(password, salt)
            usuarioSys.password = passwordEnc
            const usuariSyncSave = await usuarioSys.save();
            return res.status(201).json(usuariSyncSave);

        }catch(e){
          console.log(e)
          return res.status(500).json({ 
            msg: e 
            })
        }
    }
    
//Logea un usuario
const login = async (req = request, res = response) => {
    const {email, password} = req.body;
        try{
        const usuarioSys = await UsuarioSys.findOne({
            email
            })
            if (!usuarioSys){
                return res.status(404).json({ 
                    msg: 'El usuario no existe' 
                })
            }
            if (!usuarioSys.estado){
                return res.status(401).json({ 
                    msg: 'El usuario esta inactivo' 
                })
            }
            const isPassword = bcrypt.compareSync(
                password, usuarioSys.password
                );
            if (!isPassword) {
                return res.status(401).json({ 
                    msg: 'Credenciales incorrectas' 
                })
            }
            const payload = {
                usuario: usuarioSys.email,
                nombre: usuarioSys.nombre,
                rol: usuarioSys.rol
            }
            const token = await jwt.sign(
                payload,
                process.env.SECRET_KEY,{
                    expiresIn: '1h',
                }
            );
            return res.json({
                usuarioSys,
                token
            })

        }catch(e){
          console.log(e)
          return res.status(500).json({ 
            msg: e 
        })
        }
    }


module.exports = { 
   register,
   login
}