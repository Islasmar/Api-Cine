import { Schema,model } from "mongoose";
const peliculasSchema=new Schema({
    codigo:{
        type:String,
        unique:true,
        required:true
    },
    link_pelicula:String,
    nombre: String,
    descripcion: String,
    fechaEstreno:Date,
    status:Number
},{
    versionKey:false,
    timestamps:true
});
export default model('pelicula',peliculasSchema);