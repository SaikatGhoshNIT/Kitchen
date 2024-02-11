import React, { useState } from 'react'
import ItemList from './ItemList';

function RestaurantCategory({data , showItems, setShowIndex , index }) {
    //console.log(data);
    //! Lifting the state up
  //const [showItems, setShowItems] = useState(true)
  const handling = ()=>{
    //{setShowItems(!showItems)}
    //setShowIndex()
    showItems ? setShowIndex(-1) : setShowIndex(index)
    
  }
  return (
    <div style={{
        marginLeft:"auto",
        marginRight:"auto",
        padding:"12px",
        borderRadius:'5px',
        marginTop:"18px",
        marginBottom:"10px",
        
        boxShadow: "0px 25px 20px -20px rgba(207, 90, 69, 0.877)",
        width:"50vw",
        background:"rgb(252, 209, 156)",
        
    }}>
      <div style={{display:"flex",
        justifyContent:"space-between", paddingBottom:"6px", cursor:"pointer"}} onClick={handling}>
        <span style={{fontWeight:"800"}}>{data.title} ({data.itemCards.length})</span>
        <span>▽</span>
        </div>
        <div /*style={{borderTop:"1px solid black"}*/>
          {showItems && <ItemList items={data.itemCards} buttonText = {"ADD+"}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory