import './index.scss';


export default function Input(props){
    return(
        <>
            <input className="Input" type="text" placeholder="Search for a country" onChange={e => props.setSearch(e.target.value)}/>
        </>
                
)
}