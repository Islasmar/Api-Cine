import Pelicula from '../models/peliculas.model.js';
const peliculaDAO = {};
peliculaDAO.getAll= async()=>{
    const peliculas = await Pelicula.find();
    return peliculas;
};

peliculaDAO.getOne= async(codigo)=>{
    const pelicula = await Pelicula.findOne({
        codigo: codigo
    });
    return pelicula;
};
peliculaDAO.insertOne= async(pelicula)=>{
    return await Pelicula.create(pelicula);
};

peliculaDAO.updateOne = async(codigo,pelicula) =>{
    return await Pelicula.findOneAndUpdate({codigo:codigo}, pelicula)
};
peliculaDAO.deleteOne= async(codigo)=>{
    return await Pelicula.findOneAndDelete({codigo:codigo});
};

export default peliculaDAO;