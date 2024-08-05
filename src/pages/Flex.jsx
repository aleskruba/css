import React from 'react'
import './flex.css';

function Flex() {

  const codeString = `
    <div className='flex-main'>

      <div className="flex-container">
        <div className="box1">HOR this is a text in box 1, an it'a justufied</div>
        <div className="box2">HOR</div>
        <div className="box3">HOR</div>
        <div className="box2">HOR</div>
        <div className="box3">HOR</div>
        <div className="box2">HOR</div>
        <div className="box3">HOR</div>
        <div className="box2">HOR</div>
        <div className="box3">HOR</div>
      </div>
    
      <div className="flex-sub-container">
        <div className="box1">VERT</div>
        <div className="box2">VERT</div>
        <div className="box3">VERT</div>
      </div>

    </div>
`;

const styleString = `
.flex-main{
display: flex;
}

.flex-container{
    display: flex;
    flex:1;
    gap:5px;
    justify-content: space-around;
    align-items: flex-start;
    height: 100vh;
    flex-wrap: wrap;
    align-content:flex-start; /* flex-end,flex-evenly,center */

}

.flex-sub-container{
    display: flex;
    
    justify-content: space-evenly;
    align-items: center;
    flex:1;
    background: lightgray;
    flex-direction: column;
    height: 100vh;
}

.box1{
    width: 100px;
    height: 100px;
    background:red;
    text-align:justify;
}
.box2{
    width: 100px;
    height: 100px;
    background:blue;
    flex-grow: 1;  /* if there is space it let the div grow
 */}
.box3{
    width: 100px;
    height: 100px;
    background:green;
    flex-schrink:5;  /*  let the box schrink if value i 0 it is does not let */
    order:0; /* -1 put this box at the start postion   value 1 to end position  */
}

`
  return (
    <div>
    <div className='flex-main'>

    <div className="flex-container">
  
      <div className="box1">HOR this is a text in box 1, an it'a justufied</div>
      <div className="box2">HOR</div>
      <div className="box3">HOR</div>
      <div className="box2">HOR</div>
      <div className="box3">HOR</div>
      <div className="box2">HOR</div>
      <div className="box3">HOR</div>
      <div className="box2">HOR</div>
      <div className="box3">HOR</div>
      </div>
    
      <div className="flex-sub-container">

        <div className="box1">VERT</div>
        <div className="box2">VERT</div>
        <div className="box3">VERT</div>
      </div>



    </div>

<div className="code">
<pre><code>{codeString}</code></pre>


</div>
<div className="style">
<pre>
<pre><code>{styleString}</code></pre>
</pre>

</div>
</div>
  )
}

export default Flex