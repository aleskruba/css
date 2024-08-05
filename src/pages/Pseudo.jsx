import React from 'react'
import './pseudo.css';

function Home() {
  const codeString = `
       <h1 class="title">This is a title</h1>

        <p className='title-moving'>This is a title with moving dots </p>


                  <h1 class="intro">BEFORE CSS text before and after</h1>
          <blockquote>This is a blockquote</blockquote>

          <p>Lorem ipsum dolor <a href="www.dokram.cz" data-tool-tip="dokram page"> dokram </a> sit amet consectetur, adipisicing elit. Dolorem, nam?</p>

          <div class="counters">
            <h1 class="counter-title">first title</h1>
            <h2 class="section-with-deco">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum earum dolorum delectus reprehenderit sunt eius, cum deleniti vitae impedit vel.</h2>
            <h1 class="counter-title">second title</h1>
            <h2 class="section-with-deco">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa ex totam reprehenderit doloremque suscipit repudiandae excepturi quibusdam assumenda laborum!</h2>
            <h1 class="counter-title">third" title</h1>
            <h2 class="section-with-deco">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo laboriosam esse corporis aliquid veritatis adipisci et non, blanditiis commodi.</h2>

                <ul>
                  <li>first Li</li>
                  <li>second Li</li>
                  <li>third Li</li>
                </ul>
          </div>
    `;

    const styleString = `
.container{
    display:flex;
    flex-direction:column;
    font-family: "Poppins", sans-serif;
}

.style{
    background:lightgray;
}


.title{
    position: relative;
    width: max-content;
}

.title::after {
    content: "";    
    position: absolute;
    border-radius: 100px;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right,red,blue);
    left: 0;
    bottom: 0;
    transition: 1000ms;
}
.title:hover::after {
    width: 0;    
}


.title-moving{
    position: relative;
    color:red;
    transition: 1000ms;
    width: max-content;
}
.title-moving:hover{
    color:black;
}

.title-moving::before{
        content: '';
        background: linear-gradient(to right,red,blue);
        display: block;
        position: absolute;
        right:0;
        top:-15px;
        width: 10px;
        height: 10px;
        transition: 1000ms;
        border-radius: 100%;
}
.title-moving:hover::before{
    right: 100%;  
 }

 .title-moving::after{
        content: '';
        background: black;
        display: block;
        width: 10px;
        height: 10px;
        position: absolute;
        border-radius: 100%;
        bottom: -15px;
        left: 0;
        transition: 1000ms;
    }
    .title-moving:hover::after{
    left: 100%;  
}

.intro::before{
    content:'text ::before   ';
 }

 .intro::after{
    content:'    text ::after ';
 }

 blockquote::before{
    content:open-quote;
    font-size: 2rem;
    color: red;
 }

 blockquote::after{
    content:close-quote;
 }
 a[data-tool-tip]{
    position: relative;
 }


 a[data-tool-tip]::after{
    content:attr(data-tool-tip);
    position: absolute;
    white-space: nowrap; 
    padding: 20px;
    color:white;
    bottom:0;
    left:0;
    padding: 1em 3em;
    border-radius: 5px;
    background: blue;
    display: block;
    transform: scale(0);
    transition: 
       transform ease-out 150ms,
       bottom ease-out 150ms;
    }

 a[data-tool-tip]:hover::after{
    transform: scale(1);
    bottom:100%;
 } 

 a[href^="http"]::after{
    font-family: 'Font Awesome 5 Free';
    content: '\f35d';
    font-weight: 100;
 }



 .section-with-deco{
    font-size: 15px;

 }

 .counters{
    background: lightgray;
    text-align: left;
    padding: 5em 8em;
    margin-top: 7em;

    counter-reset: counter-name;
 }

 .counter-title{
    position: relative;
    font-size: 24px;
    color:red;
    font-weight: 100;
 }
 .counter-title::before{
    position: absolute;
    counter-increment: counter-name;
    content: counter(counter-name) ' ';
    left: -2.5em;
    background: white;
    width: 2em;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 3px solid gray;
    box-sizing: border-box;
 }


 .counters ul{
    counter-reset: ordered-list;
    list-style: none;
 }

 .counters li::before{
    counter-increment: ordered-list;
    content: 'list item ' counter(ordered-list);
    font-size: .8em;
    color:red;
 }



    `
  return (
    <div className='container'>

        <div className='main'>
        <h1 class="title">This is a title</h1>

        <p className='title-moving'>This is a title with moving dots </p>


                  <h1 class="intro">BEFORE CSS text before and after</h1>
          <blockquote>This is a blockquote</blockquote>

          <p>Lorem ipsum dolor <a href="www.dokram.cz" data-tool-tip="dokram page"> dokram </a> sit amet consectetur, adipisicing elit. Dolorem, nam?</p>

          <div class="counters">
            <h1 class="counter-title">first title</h1>
            <h2 class="section-with-deco">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum earum dolorum delectus reprehenderit sunt eius, cum deleniti vitae impedit vel.</h2>
            <h1 class="counter-title">second title</h1>
            <h2 class="section-with-deco">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa ex totam reprehenderit doloremque suscipit repudiandae excepturi quibusdam assumenda laborum!</h2>
            <h1 class="counter-title">third` title</h1>
            <h2 class="section-with-deco">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo laboriosam esse corporis aliquid veritatis adipisci et non, blanditiis commodi.</h2>

                <ul>
                  <li>first Li</li>
                  <li>second Li</li>
                  <li>third Li</li>
                </ul>
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

export default Home