import {User} from './User'
import {Company} from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

// console.log (`La latitud es: ${user.location.lat}`);
// console.log (`La longitud es: ${user.location.lng}`);
// console.log(user);

// console.log(company);

let customMap = new CustomMap('map'); //Al intancair creamos una clase  Map de google, pasamos el id del elemento html en el que se renderiza
customMap.addMarket(user);
customMap.addMarket(company);




