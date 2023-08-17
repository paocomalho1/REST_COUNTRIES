import './index.scss';

export default function FilterBy(props){
    return(
        <select className='FilterBy' id="continentes" name="continentes" onChange={e => props.setRegion(e.target.value)}>
            <option value="" selected disabled hidden>Filter by Region</option>
            <option value="Africa" className='FilterBy__options'>Africa</option>
            <option value="Americas" className='FilterBy__options'>America</option>
            <option value="Asia" className='FilterBy__options'>Asia</option>
            <option value="Europe" className='FilterBy__options'>Europe</option>
            <option value="Oceania" className='FilterBy__options'>Oceania</option>
        </select>
    )
}