import { Link } from "react-router-dom";
import "./index.scss";

export default function Item(props){

    return(
            <li className="Item">
                <Link to={`/pais/${props.pais.name.common}`} className="Item__link">
                    <img className="Item__img" src={props.pais.flags.png} alt="" />
                    <div className="Item__conteiner">
                        <figcaption className="Item__pais">{props.pais.name.common}</figcaption>
                        <p className="Item__populacao">Population: {new Intl.NumberFormat().format(props.pais.population)}</p>
                        <p className="Item__regiao">Region: {props.pais.region}</p>
                        <p className="Item__capital">Capital: {props.pais.capital}</p>
                    </div>
                </Link>
            </li>
    )
}