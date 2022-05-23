module.exports = {
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', {
        runtime: 'automatic' /*Este comando é para que não precise em todo código inserir/importar o import { render } from 'react-dom'; */
      }],
    ]
    
  }
  