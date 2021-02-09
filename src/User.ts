import {Mappable} from './CustomMap';

import faker from 'faker'; //faker es una libreria que proporciona informacion ficticia
//Cuando creamos un archivo cuyo proposito es crear una clase para exportar la comenzamos en mayucula
export class User implements Mappable{  //el implelemnts no es necesario pero nos ayuda a que nos muestre los "errores" o faltantes para que User cumpla con Mappable
    public name:string;
    public color: string='blue';
    public location:{
        lat: number,
        lng:number
    }    
    constructor(){
        this.name= faker.name.firstName(0);
        
        this.location={  //Resulta que no se crea el objeto de forma automatica, así que hay que hacerlo de nuevo para inicializarlo, nombre del objeto si lleva this
            lat: parseFloat(faker.address.latitude()), //no hacemos this.lat lo inicializamos desde cerom solo lat.
            lng: parseFloat(faker.address.latitude()),
        };
       
    } //Fin del constructor

    marketContent():string 
    {   
        return `<h2>Soy el Usuer <p>${this.name}</p></h2>`;
    }  
     
}


//const usuario = new User();

//console.log (usuario.getDataUsuario());