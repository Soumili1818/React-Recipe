import React from 'react';
import Scroll from '../Components/Scroll';
import '../index.css';
import '../css/style.css';
import { healthyRecipeData } from '../Data/healthyRecipe';
import SubCategory from '../Components/Subcategory';


export default function HealthyRecipe(){
    return (
      <SubCategory data={healthyRecipeData}/>
    );
}