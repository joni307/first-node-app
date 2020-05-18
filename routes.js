const fs = require ('fs');


mostrarArchivos = ()=>{
    let rootDir = fs.readdirSync('./');
    console.log('todas las rutas', rootDir);

}
archivoSinc = (ruta)=>{
    let rootDir = fs.readdirSync(ruta);
    console.log('Archivos', rootDir);
}
archivoAsinc = (ruta)=>{
    fs.readdir(ruta,(error,archivos)=>{
        (error)? console.log(error) : console.log('Archivos',archivos);
        
    })

}

enOrden = (ruta)=>{
    let rootDir = fs.readdirSync(ruta).reverse();
    console.log('Archivos',rootDir);
}

contadorLetra = (ruta,letra)=>{
    cont=0;
    let rootDir = fs.readdirSync(ruta);
    for (const archivo of rootDir) {
        if(archivo.charAt(0)===letra){
            cont++;
        }
        
    }
    console.log(`La cantidad de archivos ${cont}, que comienza con ${letra}`);
}


module.exports.mostrarArchivos = mostrarArchivos;
module.exports.archivoSinc = archivoSinc;
module.exports.archivoAsinc = archivoAsinc;
module.exports.enOrden = enOrden;
module.exports.contadorLetra = contadorLetra;

