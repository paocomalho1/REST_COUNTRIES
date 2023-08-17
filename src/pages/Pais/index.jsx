import { useNavigate, useParams } from "react-router"
import "./index.scss"
import { useEffect, useState } from "react";
import http from "../../http";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Pais(props){

    const navegate = useNavigate();
    const { index } = useParams();
    const [data, setData] = useState();
    const [name, setName] = useState();
    const [currencies, setCurrencies] = useState();
    const [languages, setLanguages] = useState();
    const [borders, setBorders] = useState([]);
    const [reset, setReset] = useState();

    useEffect(() =>{

        //DarkMode

        const total = document.querySelectorAll(".Pais__back, .Input, .FilterBy");

        const m = document.querySelector("main");


        if(props.darkModeActive){
                
            total?.forEach(item => {
                item.classList.add('--darkModeStyle1');
            });

            m?.classList.add('--darkModeStyle2');

            }

        //Requisição filtrada por Nome + atribuições de useState

        http.get("/all").then(resposta => {
            const pais = resposta.data.filter(pais => (pais.name.common == index))
            setData(pais[0])
            setLanguages(Object.values(pais[0].languages))
            setName(Object.values(pais[0].name.nativeName)[0].common)
            setCurrencies(Object.values(pais[0].currencies))

            var bordersVar = []
            Object.values(pais[0].borders).forEach(border => {
                bordersVar.push(resposta.data.filter(pais => (pais.cca3 == border))[0].name.common)
            });
            setBorders(bordersVar)
            

        }).catch(erro => {
            console.log(erro)
        })
        setReset(false)
    }, [reset])
    function navegator(pais){
        navegate(`/pais/${pais}`)
        setReset(true)

    }
    function back(){
        navegate(-1)
        setReset(true)
    }

    return(
        
        <main className="Pais">
            <button className="Pais__back" onClick={() => back()}>
            {!props.darkModeActive &&
                <FontAwesomeIcon icon={faArrowLeft} />}
            {props.darkModeActive &&
                <FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",}} />}
                 <span className="Pais__backText">Back</span></button>
            <div className="Pais__div">
                <img className="Pais__img" src={`${data?.flags.png}`}/>
                <section className="Pais__secao">
                    <h1 className="Pais__titulo" >{data?.name.common}</h1>
                    <div className="Pais__divisao">
                        <p className="Pais__paragrafo"><strong className="strong">Native Name: </strong>{name}</p>
                        <p className="Pais__paragrafo"><strong className="strong">Population: </strong>{new Intl.NumberFormat().format(data?.population)}</p>
                        <p className="Pais__paragrafo"><strong className="strong">Region: </strong>{data?.region}</p>
                        <p className="Pais__paragrafo"><strong className="strong">Sub Region: </strong>{data?.subregion}</p>
                        <p className="Pais__paragrafo"><strong className="strong">Capital: </strong>{data?.capital}</p>
                        <p className="Pais__paragrafo"><strong className="strong">Top Level Domain: </strong>{data?.tld}</p>
                        <p className="Pais__paragrafo"><strong className="strong">Currencies: </strong>
                        {currencies?.map(currency => <span>{`${currency.name} `}</span>)}
                        </p>
                        <p className="Pais__paragrafo languages"><strong className="strong">Languages: </strong>
                        {languages?.map(language => <span>{`${language} `}</span>)}
                        </p>
                    </div>
                    <div className="Pais__conteiner">
                        <p className="Pais__paragrafo border"><strong className="strong">Border Countries: </strong></p>
                        <div>
                            {props.darkModeActive && borders?.map(pais => <button className="Pais__botao --darkModeStyle1" onClick={() => navegator(pais)}>{pais}</button>)}
                            {!props.darkModeActive && borders?.map(pais => <button className="Pais__botao" onClick={() => navegator(pais)}>{pais}</button>)}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}