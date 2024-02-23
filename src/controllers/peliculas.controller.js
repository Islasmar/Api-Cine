import peliculaDAO from "../dao/peliculas.dao.js";
export const getAll = (req, res) => {
    peliculaDAO.getAll()
        .then(peliculas => res.render('../src/views/index', { peliculas })).catch(err => res.json({
            status: "Server unavailable"
        }));
};

export const insertOne = (req, res) => {
    console.log(req.body)
    console.log("La pelicula a insertar es:")
    console.log(req.body)
    peliculaDAO.insertOne(req.body)
        .then(result => res.redirect('/'))
        .catch(err => res.json({ status: "Datos almacenados" }));
};

export const getOne = (req, res) => {
    peliculaDAO.getOne(req.params.codigo)
        .then(pelicula => {
            !pelicula ? res.json({
                message: "Movie not found "
            }) : res.render('../src/views/edit', {pelicula});
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
};

export const deleteOne=(req,res)=>{
    peliculaDAO.deleteOne(req.params.codigo)
    .then(result=>{
        !result ? res.json({
            message: " not found"
        }) : res.redirect('/');
    })
    .catch(err=>res.json({status: "Server unavaliable"}));
}
export const updateOne=(req,res)=>{
    peliculaDAO.updateOne(req.params.codigo, req.body)
    .then(result=>res.redirect('/'))
    .catch(err=>res.json({status: "Server unavaliable"}));
}
