import faker from 'faker';
import {Mappable} from './CustomMap';


export class Company implements Mappable{
    public companyName: string;
    public catchPhrase: string;
    public color: string= 'red';
    location:{  //Dos puntos porque estamos definiendo
        lat: number,
        lng: number
    };
    constructor()
    {
        this.companyName= faker.company.companyName();
        this.catchPhrase= faker.company.catchPhrase();
        this.location={  //rrecuerda en nombre del objeto si lleva this
            //company no tiene latitude, usare direccion como ejemplo
            lat: parseFloat(faker.address.latitude()),  
            lng: parseFloat(faker.address.longitude())
        }
    }

    marketContent():string 
    {   
        return `
        <h2 >Company: <p>${this.companyName}</p></h2>
        <h3>CatchPhrase: \"${this.catchPhrase}\"</h3>`;
    }  
}

