import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'
import { faMoon } from '@fortawesome/free-regular-svg-icons';

export default function Header(props){

    function darkMode(){

        const total = document.querySelectorAll("header, .Pais__back, .Input, .FilterBy, .Rodape");

        const m = document.querySelector("main");
        const lupa = document.querySelector(".Input");


        const items = document.querySelectorAll(".Item__conteiner");
        const botoes = document.querySelectorAll(".Pais__botao");

        if(!props.darkModeActive){

            total?.forEach(item => {
                item.classList.add('--darkModeStyle1');
            });

            m?.classList.add('--darkModeStyle2');
            lupa?.classList.add('--darkModeLupa');

            botoes?.forEach(botao => {
                botao?.classList.add('--darkModeStyle1');
            });
            items.forEach(item => {
                item?.classList.add('--darkModeStyle1');
        });
        props.setDarkModeActive(!props.darkModeActive)
        } else{

            total?.forEach(item => {
                item.classList.remove('--darkModeStyle1');
            });

            m?.classList.remove('--darkModeStyle2');
            lupa?.classList.remove('--darkModeLupa');

            botoes?.forEach(botao => {
                botao?.classList.remove('--darkModeStyle1');
            });
            items.forEach(item => {
                item?.classList.remove('--darkModeStyle1');
        });
        props.setDarkModeActive(!props.darkModeActive)
            
    }
}
    return(
        <header className="header">
            <h1 className="header__title">Where in the world?</h1>
            <div className="header__darkMode" onClick={darkMode}>
                {!props.darkModeActive &&
                <FontAwesomeIcon icon={faMoon} />}
                {props.darkModeActive &&
                <FontAwesomeIcon icon={faMoon} style={{color: "#ffffff",}} />
                }
                <p className='header__p'>Dark Mode</p>
            </div>
        </header>
    );
}