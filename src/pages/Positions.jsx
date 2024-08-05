import React from 'react'
import './positions.css';


function Positions() {

  const codeString = `
<div>

    <div className="parent">
    <h1>Parent</h1>
    <div className="child-zero child">Zero</div>
      <div className="child-one child">One</div>
      <div className="child-two child">Two</div>
      <div className="child-three child">Three</div>
      <div className="child-four child">Four</div>
    </div>


<div className='section-two'>
  <header className='primary-header'>
    <nav className='section-two-navbar'>This is a navbar </nav>
  </header>
  <main className='section-two-main'>
    
    <div className="container">
        <div className="page-title">CSS Postions</div>

    <div>

      <div className='text-area'>
      <article className='article-withsidebar'> </article>
        <div className='article-text'>
         <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio exercitationem sapiente excepturi rem aliquid, voluptatum eos pariatur dolor laudantium voluptates.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, odio?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     
        <p>
        <img src="data:image/jpeg;base64,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" alt="Placeholder Image" className="float-left"/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.
      </p>
      </div>


    <aside className='aside'>
      This is aside
    </aside>
    </div>

    <div className='section-two-bottom'>
          THis is a bottom
    </div>
     
     <div className="test-div">
      THIS IS A TEST
     </div>

        </div>



    </div>
    
    </main>
    </div>

    </div>
`;

const styleString = `
.parent{
    margin-top:50px;
    background:blue;
    position:relative;
 
}

.child-zero{
    padding:20px;
    opacity:50%;
    background:red;
    position:absolute;
    top:0;

}

.child-one{
    padding:20px;
    background:yellow;
/*     position:relative;
    left:5px;
    top:5px; */
}

.child-two{
    position:sticky;
    top:0;
    padding:20px;
    background:green;
}

.child-three{
    position:fixed; /* ingore parent element, it is wixed to entire html element */
    top:0;
    padding:20px;
    background:pink;
}


.child-four{
    position:static;  /* default */
    padding:20px;
    background:lightblue;
}


.section-two{
    margin-top: 20px;
    position:sticky;
    background:lightgray;

}

.section-two-navbar{
    padding:10px;
    color:white;
    background:black;
}

.section-two-main{
    display:flex;
    flex-direction:column;
    overflow: scroll;
    height:200px;
    position:relative;

}

.page-title{
    margin-top:20px;
    background:white;
    position:sticky;
    top:0;
}

.text-area{
    display:flex;
    border: 2px solid black
}

.article-text{
    position:relative;
   

}

.float-left {
    float: left;
    margin-right: 15px;
}
p {
    text-align: justify;
}

.section-two-bottom{
    position:absolute;
    background:purple;
    color:white;
    width:50%;
    bottom:0px;
 
}

.test-div{
    background: green;
    position:fixed;
    top:80px;
    left:0;
    right:0;
    text-align:center;
}


.aside{
    position:sticky;
    top:0;
    align-self:start;  /*  important to stizky make work inside block*/
    width:50%;
    background:yellow;
}

    `
  return (
    <div>

    <div className="parent">
    <h1>Parent</h1>
    <div className="child-zero child">Zero</div>
      <div className="child-one child">One</div>
      <div className="child-two child">Two</div>
      <div className="child-three child">Three</div>
      <div className="child-four child">Four</div>
    </div>


<div className='section-two'>
  <header className='primary-header'>
    <nav className='section-two-navbar'>This is a navbar </nav>
  </header>
  <main className='section-two-main'>
    
    <div className="container">
        <div className="page-title">CSS Postions</div>

    <div>

      <div className='text-area'>
      <article className='article-withsidebar'> </article>
        <div className='article-text'>
         <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio exercitationem sapiente excepturi rem aliquid, voluptatum eos pariatur dolor laudantium voluptates.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, odio?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
     
        <p>
        <img src="data:image/jpeg;base64,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" alt="Placeholder Image" className="float-left"/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.
      </p>
      </div>


    <aside className='aside'>
      This is aside
    </aside>
    </div>

    <div className='section-two-bottom'>
          THis is a bottom
    </div>
     
     <div className="test-div">
      THIS IS A TEST
     </div>

        </div>



    </div>
    
    </main>
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

export default Positions