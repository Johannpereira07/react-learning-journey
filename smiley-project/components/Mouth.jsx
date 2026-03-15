import {arc} from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

 export const Mouth = ({startAngle,endAngle,transform})=>{
    const smile = arc()
    .innerRadius(150)
    .outerRadius(170)
    .startAngle(startAngle)
    .endAngle(endAngle)
    .cornerRadius(10);
    
    return  (      
    <path d={smile()}  transform={transform}></path>
    )  
  }

