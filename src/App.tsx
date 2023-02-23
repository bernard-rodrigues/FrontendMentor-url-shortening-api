import styled, { ThemeProvider } from 'styled-components'
import { Features } from './components/Features'
import { Header } from './components/Header'
import { Presentation } from './components/Presentation'

const Container = styled.div`
  width: 100vw;
  overflow-x: hidden;
`

export function App() {
  const theme = {
    //COLORS
    // Primary
    cyan: 'hsl(180, 66%, 49%)',
    darkViolet: 'hsl(257, 27%, 26%)',

    // Secondary
    red: 'hsl(0, 87%, 67%)',

    // Neutral
    gray: 'hsl(0, 0%, 75%)',
    grayishViolet: 'hsl(257, 7%, 63%)',
    veryDarkBlue: 'hsl(255, 11%, 22%)',
    veryDarkViolet: 'hsl(260, 8%, 14%)',

    //with transparency
    grayTransparent: 'hsla(0, 0%, 75%, 0.2)',

    //FONTS
    //Font Size
    fontBase: '18px',

    // Font Family
    poppins: "'Poppins', sans-serif",

    // Font Weight
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Presentation />
        <Features />
      </Container>
    </ThemeProvider>
  )
}
