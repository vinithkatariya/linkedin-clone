import React from 'react'
import "./Widgets.css";
import { Info , FiberManualRecord } from '@mui/icons-material';


function Widgets() {

  const newsArticle = (heading , subTitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord/>
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subTitle}</p>
      </div>
      
    </div>
  )

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info/>
      </div>
      {newsArticle("Level 2 Mocks this saturday", "Intense studies going on")}
      {newsArticle("Atishay Garmi in Neral" , "Stay hydrated")}
      {newsArticle("Today is chaudas" , "Dont eat aloo")}
      {newsArticle("Level 3 nearing" , "Imarticus schedule rip")}

    </div>
  )
}

export default Widgets
