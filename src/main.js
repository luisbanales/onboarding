import './style.css'
import javascriptLogo from './javascript.svg'
import Logo from '/Principal.png'
import { setupCounter } from './counter.js'
import signup from './Signup/signup.js'

document.querySelector('#app').innerHTML = `
  <div>
    <nav>
      <img src="${Logo}" class="logo" alt="logo" />
      <div>
        <a href=''>Cómo funciona</a>
      </div>
    </nav>
    ${signup()}
  </div>
`

setupCounter(document.querySelector('#counter'))
