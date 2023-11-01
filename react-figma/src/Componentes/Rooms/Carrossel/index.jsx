import "./Carrossel.css";

export default function Carrossel(){
    return(
        <div className="carrossel">
            <div className="pImagem">
                <img src="./assets/Rectangle 24.png" alt="" />
                <div className="card-sImagem">
                    <div className="text-pImagem">

                    </div>
                    <div className="flecha-pImagem">

                    </div>
                </div>
            </div>
            <div className="sImagem">
                <div className="pImagem-sImagem">
                    <img src="./assets/Rectangle 25.png" alt="" />
                </div>
                <div className="prox-sImagem">
                    <p>{'>'}</p>
                </div>
                <div className="radioButton-sImagem">
                    <input type="radio" />
                    <input type="radio" />
                    <input type="radio" />
                    <input type="radio" />
                </div>
            </div>
            <div className="tImagem">
                <img src="./assets/Rectangle 26.png" alt="" />
            </div>
        </div>
    )
}