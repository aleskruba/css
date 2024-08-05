import React from 'react'
import './animation.css';
import { sponsors } from './constants';

function Animation() {

  const codeString = `
  const calculateLeft = (length) => {
    const leftValue = 200 * length;
    return leftValue > window.innerWidth ? \`\${leftValue}px\` : '100%';
  };
  
  return (
    <div>
      <div className="beginner">
        <button className="btn">Button</button>
      </div>
  
      <section>
        <div className="heading-1">Hello World</div>
        <div className="bounce">Hello World</div>
        <div className="rotate">ROTATE</div>
      </section>
  
      <div className='sponsors'>
        <h1>sponsors and partners</h1>
        <div className="animation-wrapper">
  
        {sponsors.map((element, idx) => (
          <div 
            key={idx} 
            className={\`item item\${idx}\`}
            style={{ 
              animationDelay: \`calc(25s / \${sponsors.length} * \${idx} * -1)\`,
              left: calculateLeft(sponsors.length)
            }}
          >
            <div className='inner'>
              <img className='animation-image'
                   src={element.image}
                   alt={element.name} />
            </div>
          </div>
        ))}
  
        </div>
      </div>
    </div>
  )
  `;
  

const styleString = `

:root {
  --clr-accent: #3498db;
  --clr-primary: lightgray;
}

.beginner{
margin-top:20px;
}  
.btn{
  font-size:1rem;
  font-width:700;
  padding: 0.5em 1em;
  color: var(--clr-accent);
  background-color: var(--clr-primary);
  border:10px solid var(--clr-accent);
  border-radius:5px;

/*     transition:transform 0.3s, background-color 0.3s, color 0.3s;
*/
  transition:all 0.3s
  }

.btn:hover {
  transform: translateY(-10px);
  background-color:var(--clr-accent);
  color: var(--clr-primary);
  border:10px solid var(--clr-primary);

}

section {
  display:flex;
  justify-content: center;
  font-size:1.5rem;
}

@keyframes slideInLeft {
  from {
      transform: translateX(-300px);
  }

  to{
      transform: translateX(0);
  }
}

.heading-1{
  animation-name: slideInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-delay:0;
  animation-iteration-count:1;  /* infinite */
  animation-direction:normal; /* reverse */ 
  animation-fill-mode:none;  /* forwards,backwards,both */

/*     animation: slideInLeft 1s ease-in 0s 1 normal none; */

  transform: translateX(-150px);
}

.animation-wrapper {
  margin-inline:auto;
  position: relative;
  height: 100px;
  margin-top:5rem;
  overflow: hidden;
  mask-image: linear-gradient(
                      to right,
                      rgba(0,0,0,0),
                      rgba(0,0,0,1) 20%,
                      rgba(0,0,0,1) 80%,
                      rgba(0,0,0,0) 
                       )
}


@keyframes scrollLeft {
  to{
      left:-200px;
  }
}


@keyframes bounce {
  0% {
      transform: translateY(0);
  }
  40% {
      transform: translateY(-30px);
  }
  50% {
      transform: translateY(0);
  }
  60% {
      transform: translateY(-20px);
  }
  100% {
      transform: translateY(0);
  }
}

.bounce {
  animation: bounce 2s ease infinite;
}


@keyframes rotate {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}

.rotate {
  animation: rotate 10s linear infinite;
  display: inline-block; 
  font-size: 24px; 
  padding: 10px; 
  border: 2px solid #000; 
  border-radius: 5px; 
  text-align: center; 
}

.item{
  width:150px;
  height:80px;
  border-radius:6px;
  position: absolute;
  animation-name:scrollLeft;
  animation-duration:25s;
  animation-timing-function:linear;
  animation-iteration-count:infinite;
}

.inner{
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:black;
}

.animation-image{
  width:100%;
  height:100%;
  object-fit:cover;
}

`

  const calculateLeft = (length) => {
    const leftValue = 200 * length;
    return leftValue > window.innerWidth ? `${leftValue}px` : '100%';
  };
  
  return (
    <div>
      <div className="beginner">
        <button className="btn">Button</button>
     </div>

      <section>
          <div className="heading-1">Hello World</div>
          <div className="bounce">Hello World</div>
          <div className="rotate">ROTATE</div>
      </section>
      
      <div className='sponsors '> 
      <h1>sponsors and partners</h1>
        <div className="animation-wrapper">

        {sponsors.map((element, idx) => (
          <div 
          key={idx} 
          className={`item item${idx}`}
          style={{ 
            animationDelay: `calc(25s / ${sponsors.length} * ${idx} * -1)`,
            left: calculateLeft(sponsors.length)
          }}
        >
              <div 
                className='inner'>
                  <img className='animation-image'
                       src={element.image}
                       alt={element.name} />
              </div>
      
            </div>
        ))}


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

export default Animation