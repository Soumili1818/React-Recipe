import React from 'react';
import '../css/style.css';
import { Link } from 'react-router-dom';

function Subcat(props) {
  console.log(props);
    return (
      <div>
        <Link to= {"/recipe"}>

        <div className="card gallery__item">

        <img src={props.imgscr} className="gallery__img" alt="mypic"/>
        <div className="card-body">
          <h6 className="card-title gallery_font">{props.recipename}</h6>
          <hr/>
          <div className="fstyle">
            <i className="fa fa-cutlery fa-lg"> Recipe Servings:{props.recipieServe}</i>
            <i className="fa fa-clock-o fa-lg"> Pre Time:{props.preTime}</i>
            <i className="fa fa-clock-o fa-lg"> Cook Time:{props.cookTime}</i>
            <i className="fa fa-clock-o fa-lg"> Total Time:{props.totaltime}</i>
          </div>
        </div>
      </div>
      </Link>

      </div>
      
    );
  }
export default Subcat;
