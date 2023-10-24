import "./Produtos.css"
import Produto from "../Produto";

export default function Produtos(){
    return(
        <div className="container">
            <div className="text">
                Our Products
            </div>
            <div className="div10">
                <div className="produtos">
                    <Produto imageSrc="./assets/image 1.png" nome="Syltherine" descricao="Stylish cafe hair" preco="Rp 2.500.000" desconto="Rp3.500.000"/>
                    <Produto imageSrc="./assets/image 2.png" nome="Leviosa" descricao="Stylish cafe hair" preco="Rp 2.500.000"/>
                    <Produto imageSrc="./assets/image 3.png" nome="Lolito" descricao="Luxury big sofa" preco="Rp 7.000.000" desconto="14.000.000"/>
                    <Produto imageSrc="./assets/image 4.png" nome="Respira" descricao="Outdoor bar table and stool" preco="Rp 500.000"/>
                </div>
                <div className="produtos">
                <Produto imageSrc="./assets/image 1.png" nome="Syltherine" descricao="Stylish cafe hair" preco="Rp 2.500.000" deconto="Rp3.500.000"/>
                    <Produto imageSrc="./assets/image 2.png" nome="Leviosa" descricao="Stylish cafe hair" preco="Rp 2.500.000"/>
                    <Produto imageSrc="./assets/image 3.png" nome="Lolito" descricao="Luxury big sofa" preco="Rp 7.000.000" desconto="14.000.000"/>
                    <Produto imageSrc="./assets/image 4.png" nome="Respira" descricao="Outdoor bar table and stool" preco="Rp 500.000"/>
                </div>
            </div>
            <div className="div11">
                <a href="">Show More</a>
            </div>
        </div>
    )
}