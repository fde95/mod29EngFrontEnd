import { ThemeProvider } from 'styled-components'

import Sobre from './containers/Sobre'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import Projetos from './containers/Projetos'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoThemaDark] = useState(false)

  function trocaThema() {
    setEstaUsandoThemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaThema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
