import { useState } from 'react'
import logo from './assets/img/logo_frase_do_dia.webp'
// @ts-ignore
import promessasBiblicas from './promessas'
// @ts-ignore
import frasesBomDia from  './frasesBomDia'


function App() {
  const [frase, setFrase] = useState('')
  const categorias = [
    'Promessas',
    'Bom dia',
    'Bom noite',
  ]
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const frases = [
    {
      categoria: 'Promessas',
      frases: promessasBiblicas
    },
    {
      categoria: 'Bom dia',
      frases: frasesBomDia
    }
  ]

  function gerar(){
    const numeroAleatorio = Math.floor(Math.random( )* frases[categoriaSelecionada].frases.length)

    setFrase(frases[categoriaSelecionada].frases[numeroAleatorio])

  }

  return (
    <>
      <div className="container">
        <div className="frases">

          <div className="botoes">
            {categorias.map((item, index) => (
              <button className={categoriaSelecionada == index ? 'categoriaSelecionada' : ''} key={index} onClick={()=>setCategoriaSelecionada(index)}>{item}</button>
            ))}
          </div>

          <img src={logo} alt="logo" />

          <button className='btnGerar' onClick={gerar}>Gerar</button>

          {frase !== '' && <h2>{frase}</h2>}
        </div>
      </div>
    </>
  )
}

export default App
