// 1. Cree un nuevo archivo llamado `List.jsx`
// 2. Dentro de `List.jsx`, defina una nueva función
//   componente llamado `Lista`
// 3. Utilice el estado del componente para realizar un seguimiento de los elementos de la lista.
// 4. Agregue una entrada y un botón para agregar elementos a la lista.
// 5. Mostrar los elementos de la lista en el componente.
import {useState} from 'react';

function Lista () {
    const [datos, setDatos] = useState([])
    function agregar(){
        setDatos([...datos,"nombre"]);
    }

    return (
        <div>
        <ul>
        {datos.map((dato, index) => {
          return (
            <li key={index}>  
            dato: {dato}
            </li> 
          );
        })}

        </ul>
        <button onClick= {agregar}>Agregar</button>
        </div>
    )
  
}

export default Lista;

