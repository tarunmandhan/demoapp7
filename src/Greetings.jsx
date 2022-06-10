import React from "react";

let greeting ="";
const cssStyle = {};
let curDate = new Date();
curDate = curDate.getHours();


if(curDate>=3 && curDate<12){
    greeting="Good Morning";
    cssStyle.color = "green" ;
  } else if(curDate>=12 && curDate<15){
    greeting="Good Afternoon";
    cssStyle.color = '#104b79' ;
  } else if(curDate>=15 && curDate<20){
    greeting="Good Evening";
    cssStyle.color = '#ff5722' ;
  } else{
    greeting="Good Night";
    cssStyle.color = "#604439" ;
  }
  

function Greetings(){
    return(
      <>
        <span style={cssStyle} > {greeting} </span>
      </>
    );
} 

export default Greetings;