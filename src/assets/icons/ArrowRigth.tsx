import React from 'react'

interface IProps {
    heigth:string,
    width:string,
    color:string
}
const ArrowRigth = ({ width='512', color='black', heigth='512'}:IProps) => {
  return (
    <svg width={width} height={heigth} fill={color} id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
    viewBox="0 0 512 512" enable-background="new 0 0 512 512" >
<g>
   <g>
       <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
           c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
           l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
           c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"/>
   </g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
  )
}

export default ArrowRigth