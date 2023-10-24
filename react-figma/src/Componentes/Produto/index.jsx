import "./Produto.css"

export default function Produto(props){
    return(
        <div className="tudo">
            <div className="imagem">
                <img src={props.imageSrc} alt="" />
            </div>
            <div className="escritas">
                <p className="fChild">{props.nome}</p>
                <p>{props.descricao}</p>
                <div className="div2">
                    <p>{props.preco}</p>
                    <p>{props.desconto}</p>
                </div>
            </div>
        </div>
    )
}