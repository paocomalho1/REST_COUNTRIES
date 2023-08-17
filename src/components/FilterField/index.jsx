import './index.scss';
import FilterBy from "./FilterBy";
import Input from "./Input";


export default function FilterField(props){
    return(
        <section className="FilterField">
            <Input setSearch={props.setSearch}/>
            <FilterBy setRegion={props.setRegion}/>
        </section>
    )
}