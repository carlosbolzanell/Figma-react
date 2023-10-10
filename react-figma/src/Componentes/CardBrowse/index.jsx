import "./CardBrowse.css"

export default function CardBrowse(props){
    return(
        <div className="cardBrowse">
            <img src={props.src} alt="" />
            <p>{props.nome}</p>
        </div>
    )
}