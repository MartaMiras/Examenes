import ReactDOM from 'react-dom/client';
import Lista from './Ejercicio/List.jsx';

const Title = props => {
	return <h3 className='title'>{props.texto}</h3>;
};

const Examen = (
    <div>
        <Title texto='Examen 3.0' />
        <Lista />
    </div>
)
const Contenido = document.getElementById('root');

ReactDOM.createRoot(Contenido).render(Examen);
