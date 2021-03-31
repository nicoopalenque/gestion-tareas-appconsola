require('colors');
const rl = require('readline');

const mostrarMenu = () => {

    return new Promise((resolve,reject)=>{
        console.clear();
    
        console.log('========================='.green);
        console.log('  Seleccione una opcion   '.green);
        console.log('========================='.green);
        console.log( `${ '1.'.green } Crear tarea` );
        console.log( `${ '2.'.green } Listar tareas` );
        console.log( `${ '3.'.green } Listar tareas completadas` );
        console.log( `${ '4.'.green } Listar tareas pendientes` );
        console.log( `${ '5.'.green } Completar tarea(s)` );
        console.log( `${ '6.'.green } Borrar tarea`);
        console.log( `${ '0.'.green } Salir\n` );
    
    
        const readLine = rl.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question('Seleccione una opcion: ', (opt) => {
            readLine.close();
            resolve(opt);
        })
    })
}

const pausa = ()=>{

    return new Promise((resolve)=>{

        const readLine = rl.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question(`\nPresione ${ 'ENTER'.green } para continuar`, (opt) => {
           readLine.close();
           resolve();
        })
    })
}

module.exports = {
    mostrarMenu,
    pausa
}