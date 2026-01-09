import './style.css'
import Logo from '/Principal.png'
import { setupCounter } from './counter.js'
import signup from './Signup/signup.js'

document.querySelector('#app').innerHTML = `
  <div>
    <nav>
      <img src="${Logo}" class="logo" alt="logo" />
      <div id="seccionMenu">
        <div id="linkHowToFuntion">
          <a class="linkText" href="">Cómo funciona</a>
        </div>
      </div>
    </nav>
    ${signup()}
  </div>
`

setupCounter(document.querySelector('#counter'))
