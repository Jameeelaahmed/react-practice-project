import "./TabButton.css"
export default function TabButtons({onSelect,buttonName,isSelected}){
    return(
        <button className={isSelected && "active"} onClick={onSelect}>{buttonName}</button>    
    )
}