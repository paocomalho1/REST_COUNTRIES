import "./index.scss";
import Item from "./Item";


export default function Items(props){
    return(
        <>
        <ul className="Items">
            {props.data?.map((pais,index) => <Item pais={pais} index={index}/>)}
        </ul> 
        </>
    )
}