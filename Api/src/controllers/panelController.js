exports.allAccess = (req,  res)=>{
    res.status(200).send('Home')
}

exports.userBoard = (req, res)=>{
    res.status(200).send('Usuarios registrados')
}

exports.adminBoard = (res, req)=>{
    res.status(200).send('Contenido Admin')
}

exports.moderatorBoard = (res, req)=>{
    res.status(200).send('Usuario moderado')
}