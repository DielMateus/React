// const user = {
//     name: 'Diel',
// }

// console.log(user.address?.street)

// import React from 'react'; /*Nas versões anteriores a v17 precisava importar em todos os arquivos o REACT mas agora basta criar dentro do babel.config.js */


// import { App } from './App'; /*Estou importando a função {App} do arquivo './App' eu não preciso colocar a extensão App.jsx por que no arquivo webpack.cong.js eu passei as extensões .js e .jsx */

// import { render } from 'react-dom';
// import { App } from './App';

// render(<h1>Test</h1>, document.getElementById('root'))
// dentro do render eu passo dois parâmetros, 1 é o que eu quero mostrar em tela no caso a função App dentro do arquivo ./App quw tem o <h1>Hello World</h1>
//Já o segundo parâmetro é o ID="root" que é onde eu quero exibir o <h1>Hello World</h1>
import { render } from 'react-dom';
import { App } from './App';

render(<App />, document.getElementById('root'))


