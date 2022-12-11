
const isAdmin = (req= request,
    res=response, next) => {
        console.log(req.user); 
        const { rol } = req.user      
        if (!req.user) {
            return res.status(500).json({ 
                msg: 'Validar el token' 
            })
        }
        if (rol !== 'ADMIN'){
            return res.status(403).json({ 
                msg: 'Acceso no permitido' 
            })
        }
        next();
}

module.exports = {
    isAdmin
}