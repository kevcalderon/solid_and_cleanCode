(() => {

    // arreglo de temperaturas celsius
    const arrayOfNums = [33.6, 12.34];
    //correcto
    const arrayOfTemperatures = [50.4,33.6];



    // Dirección ip del servidor
    const ip = '123.123.123.123';
    //correcto
    const ipServer = '123.123.123.123'


    // Listado de usuarios
    const people = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    // correcto
    const usersList = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
 


    // Listado de emails de los usuarios
    const email = people.map( u => u.email );
    // correctos
    //const userEmails = users.map(user => user.email);



    // Variables booleanas de un video juego
    const jump = false;
    //correcto
    const canJump = false;

    const run = true;
    //correcto
    const canRun = true;
    
    const noTieneItems = true;

    const loading = false;
    //correcto
    const isLoading = false;
     

    // Otros ejercicios
    // tiempo inicial
    const startTime = new Date().getTime();

    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - startTime;


    // Funciones
    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function obtenerAreaCuadrado( lados: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    

})();
