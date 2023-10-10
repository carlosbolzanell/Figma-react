import "./Browse.css"
import CardBrowse from '../CardBrowse'

export default function Browse(){
    return(
        <div className="div">
            <div className="div1">
                <div className="browse">
                    <h1>Browse The Range</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="cards">
                <CardBrowse src="./assets/Mask Group.png" nome="Dining"/>
                <CardBrowse src="./assets/Image-living room.png" nome="Living"/>
                <CardBrowse src="./assets/Mask Group 2.png" nome="Bedroom"/>
            </div>

        </div>
    )
}