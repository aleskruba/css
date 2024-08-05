import React from 'react'
import './subgrid.css'
import { data } from './constants'

function SubGrid() {

  const codeString = `
        <div className="wrapper">

          {data.map((element,idx)=>(
                      <div className="box">
                      <h2>{element.title}</h2>
                      <p>{element.text} </p>
                     <div className='image-div'>
                       <img  className='image'
                          src={element.image}
                           alt="flower" />
                     </div>
                </div>

          ))}
  

  


        </div>
`;

const styleString = `

.wrapper{
  display: grid;
  grid-template-columns:repeat(auto-fit,minmax(350px,1fr));
/*     grid-template-rows:auto auto auto; */
  gap:1rem;
  margin-top:5rem;
}

.box{
  border:1px solid black;
  border-radius: 6px;
  padding:2rem;
  text-align:center;
  display:grid;
  grid-template-rows:subgrid;
  grid-row:span 3;
}

.image-div {
  width:auto;
  min-height:200px;
  object-fit:cover;
}

.image{
  width:100%;
  height:100%;
}


`

  return (
    <>
        <div className="wrapper">

          {data.map((element,idx)=>(
                      <div className="box">
                      <h2>{element.title}</h2>
                      <p>{element.text} </p>
                     <div className='image-div'>
                       <img  className='image'
                          src={element.image}
                           alt="flower" />
                     </div>
                </div>

          ))}

    </div>

<div className="code">
<pre><code>{codeString}</code></pre>


</div>
<div className="style">
<pre>
<pre><code>{styleString}</code></pre>
</pre>

</div>
</>
  )
}

export default SubGrid