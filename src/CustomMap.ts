export interface Mappable {  //Definimos el tipo que deben cumplir los objetos para poder ser mappables, No es necesario esportar lo hacemos para que hagamos un implements en USer y Company solo para que no ayude a mostrar mas información de los herrores.
    color: string;
    location: {
        lat: number;
        lng: number;
    };
    marketContent():string;  //Si no especificamos es publica, no lleva parentesis porque no la estamos implementando
}

export class CustomMap{
    private googleMap: google.maps.Map;
    
    constructor(divId:string)  //Recibe el elemto donde queremos rrenderizar para reutilizar la clase
    {
        this.googleMap= new google.maps.Map(document.getElementById(divId), {
            zoom:2,
            center:{lat:0,lng:0} 
        }); //Creamo uns clase Map de google.map y que recibe uno o dos parametros, uno de ellos es el elemto html donde se va a renderizar. El segundo argumento son las opciones de configuración, las pasamos con un objeto, se pueden verificar en el archivo de typos. Es muy util revisar los tipos para sabe como pasar los argumentos a la función
    }
    //INstruccions to every other class on how
    //they can be an argumente to addMarker
        
    //addMarket(mappable:User | Company):void    //Esta es una solucion para no tener una funcion para cada tipo de objeto. si estamos seguros que no seguira inbcrementado los objetos, lo que hace tsc es comparar los objetos y solo dejará usar las propiedades y merodos compartidos, pero si hay mas obvjetos que usarían el metodo habría que, ademas de improtar, hacer | objetoc3 | object4 tc.. así que lo mejor será usar una interface
    addMarket(mappable:Mappable):void
    {
        const marker= new google.maps.Marker({
            map: this.googleMap,
            position: 
            {  
                lat: mappable.location.lat, 
                lng: mappable.location.lng
            }
        });

        //PAsamos parametro opcionales, uno es map que indica en que mapa lo queremo poner, por si tenemos mas de uno y otro es position que recibe la latitud y longitud, podemos el docs o el arcivo de tipo para ver como se pasa en este caso es un objeto como en center
        marker.addListener('click',()=>{
            //Crea el objeto y pone el texto, por lo que puede estar fuera del evento addlistener
            const infoWindow= new google.maps.InfoWindow( 
                {
                    content: mappable.marketContent(),  //Devuelve el contenido, debe estar en las clase que usen addMarker
            });
        
            //indica que muestre el objeto, osea el popUp
            infoWindow.open(this.googleMap, marker); 
        });

       
    }

    //windowPopUp()
   

    // addCompanyMarket(company:Company):void
    // {
    //     new google.maps.Marker({
    //         map:this.googleMap,
    //         position:{
    //             lat:company.location.lat,
    //             lng:company.location.lng
    //         }
    //     });
    // }
}