import './signupStyle.css'
import gruopImg from '/Group1670.png'

const signup = () => {
  return (`
    <div id="layout">
      <div id="copyBackground">
        <p class="copyTitle">Una forma accesible de invertir</p>
        <div>
          <img src="${gruopImg}" class="gruopImg" alt="gruopImg" />
        </div>
        <div id="textCopy">
          <p id="text">Dividimos la propiedad en partes iguales llamadas Ladrillos, 
            para que puedas ser dueño de uno o más y así disfrutar de todos 
            los beneficios de tu inversión en una propiedad.
          </p>
        </div>
      </div>

      <div id="formsLayout">
        <div class=content>
          <p class="subtitle">Crear tu cuenta</p>

          <div class="text">
            <p>Al crear una cuenta en 100 Ladrillos, aceptas el 
              <a class="link" href="">Aviso de Privacidad</a>, los 
              <a class="link" href="">Derechos Arco</a>y los 
              <a class="link" href="">Términos y Condiciones</a>.
            </p>
          </div>

          <div class="field">
            <label for="email" class="label">¿Cuál es tu correo electrónico?</label>
            <input id="email" class="input" placeholder="lucile@correo.com">
          </div>

          <div class="field">
            <label for="password" class="label">Escribe una contraseña</label>
            <input id="password" class="input" placeholder="Kevin145.">
          </div>

          <div class="field">
            <label for="confirmPass" class="label">Confirma tu contraseña</label>
            <input id="confirmPass" class="input" placeholder="*********">
          </div>

          <label class="checkbox">
            <input type="checkbox">
            Autorizo a “100 Ladrillos” para que la información de mis datos personales
            sea utilizada para fines mercadotécnicos o publicitarios, así como recibir 
            publicidad incluyendo la comercialización de productos o servicios de “100 Ladrillos”.
          </label>

          <button class="btn">Siguiente</button>
        </div>
      </div>
    </div>
`);
};

export default signup;
