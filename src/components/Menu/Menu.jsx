import React from 'react';
import {wines,cocktails} from "../../Data/data"
import './Menu.css';


const silver=require("../../assets/menu.png");
const Menu = () => (
   
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      
      <h2>Menu that fits your palatte</h2>
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {wines.map((wine, index) => (
             <div className="app__menuitem">
             <div className="app__menuitem-head">
               <div className="app__menuitem-name">
                 <p className="p__cormorant" style={{ color: '#DCCA87' }}>{wine.title}</p>
               </div>
               <div className="app__menuitem-dash" />
               <div className="app__menuitem-price">
                 <p className="p__cormorant">{wine.price}</p>
               </div>
             </div>
         
             <div className="app__menuitem-sub">
               <p className="p__opensans" style={{ color: '#AAAAAA' }}>{wine.tags}</p>
             </div>
           </div>
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
       <img src={silver} alt="" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {cocktails.map((cocktail, index) => (
             <div className="app__menuitem">
             <div className="app__menuitem-head">
               <div className="app__menuitem-name">
                 <p className="p__cormorant" style={{ color: '#DCCA87' }}>{cocktail.title}</p>
               </div>
               <div className="app__menuitem-dash" />
               <div className="app__menuitem-price">
                 <p className="p__cormorant">{cocktail.price}</p>
               </div>
             </div>
         
             <div className="app__menuitem-sub">
               <p className="p__opensans" style={{ color: '#AAAAAA' }}>{cocktail.tags}</p>
             </div>
           </div>
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default Menu;