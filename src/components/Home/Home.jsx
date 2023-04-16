import React from 'react'
import "./Home.css"

export const Home = () => {
    const img=require("../../../src/assets/welcome.png")
    const spoon=require("../../../src/assets/spoon.png")
  return (
    <div className="home">
        <div className="left-home">
            <div className="top">
                <p>Chase The New Flavour</p>
                <img src={spoon} alt="no img" />
                <h1 className="color">THE KEY TO FINE DINING</h1>
                <p className="para">Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
                <button className="explore">Explore Menu</button>
            </div>
        </div>
        <div className="right-home">
            <img src={img} alt="No image" />
        </div>
    </div>
  )
}
