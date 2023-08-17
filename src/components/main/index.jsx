import FilterField from '../FilterField';
import './index.scss';
import Items from './Items';
import http from '../../http'
import { useEffect, useState } from 'react';


export default function Main (props){
    const [data, setData] = useState([]);
    const [region, setRegion] = useState('all');
    const [search, setSearch] = useState('');
    const [darkItems, setDarkItems] = useState(false);


    useEffect(()=>{

        // Requisição para API RestCountries + 

        http.get("/all").then(resposta =>{

            //Dark mode

            if(props.darkModeActive){

                const total = document.querySelectorAll(".Pais__back, .Input, .FilterBy");

                const m = document.querySelector("main");
                const lupa = document.querySelector(".Input");

                const botoes = document.querySelectorAll(".Pais__botao");

                total?.forEach(item => {
                    item.classList.add('--darkModeStyle1');
                });

                m?.classList.add('--darkModeStyle2');
                lupa?.classList.add('--darkModeLupa');

                botoes?.forEach(botao => {
                    botao?.classList.add('--darkModeStyle1');
                });
                
                setDarkItems(true)
            }

            //Filtro

            if (region == 'all'){
                setData(resposta.data.filter(pais => pais.name.common.toLowerCase().includes(search.toLowerCase())));
            }else{
                setData(resposta.data.filter(pais => (pais.region == region) && pais.name.common.toLowerCase().includes(search.toLowerCase())));

            }

        }).catch(erro =>{
            console.log(erro)
        })
    }, [region,search])

    // Mudar para dark mode os itens

    useEffect(()=>{

        const items = document.querySelectorAll(".Item__conteiner");

        items.forEach(item => {
            item?.classList.add('--darkModeStyle1');
        });
        setDarkItems(false)

    },[darkItems])
    return(
        <main className="main">
            <FilterField setRegion={setRegion} setSearch={setSearch}/>
            <Items data={data}/>
        </main>
    )
}