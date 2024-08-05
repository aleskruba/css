import React from 'react'
import './grid.css';

function Grid() {

  const codeString = `
    <div>
      <div className="grid-container-basic">
        <div className="grid-item1">Grid 1</div>
        <div className="grid-item2">Grid 2</div>
        <div className="grid-item3">Grid 3</div>
       </div>

      <div className="grid-container-fr">
        <div className="grid-item4">Grid 4</div>
        <div className="grid-item5">Grid 5</div>
        <div className="grid-item6">Grid 6</div>
        <div className="grid-item7">Grid 7</div>
       </div>

       
      <div className="grid-container-align">
        <div className="grid-item8">Grid 8</div>
        <div className="grid-item9">Grid 9</div>
        <div className="grid-item10">Grid 10</div>
        <div className="grid-item11">Grid 11</div>
      </div>
    </div>
`;

const styleString = `
.grid-container-basic{
    background:#f5f5f5 ;
    margin-bottom:10px;
    display: grid;
    grid-template-rows:50px 50px 50px 50px 50px;  /* 6 rows */
    grid-template-columns:150px 150px 150px 150px 150px; /* 6 columns */
    border-bottom: 1px solid black;
    flex-wrap: wrap;
}

.grid-container-fr{
    margin-bottom:10px;
    display: grid;
    grid-template-rows: repeat(6,50px) ;
    grid-template-columns: 1fr minmax(100px,2fr)  1fr 1fr 1fr; 
    grid-gap:1em  2em;   /* gaps on rows and columns */
    border-bottom: 1px solid black;
}

.grid-container-align{
    background:#f5f5f5;
    display: grid;
    height:600px;
    grid-template-rows: repeat(4,100px);
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    grid-gap:0.5em 1em;
 /*    justify-content:space-evenly;
    align-content:space-evenly;; */


    border-bottom: 1px solid black;
}
    

.grid-item1{
    background-color:lightgreen;
    grid-row-start:2;
    grid-row-end:4;
    grid-column-start:2;
    grid-column-end:4;
}

.grid-item2{
    background-color:lightblue;
}

.grid-item3{
    background-color:lightgray;
}


.grid-item4{
    background-color:lightgreen;
    grid-row:2/3;   
    grid-column:3/5;
}

.grid-item5{
    background-color:lightblue;
    grid-row: span 2;

}

.grid-item6{
    background-color:lightgray;
    grid-column:3/6;
}


.grid-item7{
    background-color:pink;
    grid-area : 4/1/4/4; 
}


.grid-item8{
    background-color:red;
    color:white;
}

.grid-item9{
    background-color:red;
    color:white;
}

.grid-item10{
    background-color:red;
    color:white;
}

.grid-item11{
    background-color:red;
    color:white;
}

`

  return (
    <div>
      <div className="grid-container-basic">
        <div className="grid-item1">Grid 1</div>
        <div className="grid-item2">Grid 2</div>
        <div className="grid-item3">Grid 3</div>
       </div>

      <div className="grid-container-fr">
        <div className="grid-item4">Grid 4</div>
        <div className="grid-item5">Grid 5</div>
        <div className="grid-item6">Grid 6</div>
        <div className="grid-item7">Grid 7</div>
       </div>

       
      <div className="grid-container-align">
        <div className="grid-item8">Grid 8</div>
        <div className="grid-item9">Grid 9</div>
        <div className="grid-item10">Grid 10</div>
        <div className="grid-item11">Grid 11</div>
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

export default Grid