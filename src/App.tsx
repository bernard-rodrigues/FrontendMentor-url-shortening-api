import styled, { ThemeProvider } from 'styled-components'
import { BoostYourLinks } from './components/BoostYourLinks'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Presentation } from './components/Presentation'

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  font-family: ${props => props.theme.poppins};

  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    main{
      width: 100%;
    }
  }
`

export function App() {
  const theme = {
    //COLORS
    // Primary
    cyan: 'hsl(180, 66%, 49%)',
    darkViolet: 'hsl(257, 27%, 26%)',

    //hover
    cyanHover: 'hsl(180, 66%, 78%)',

    // Secondary
    red: 'hsl(0, 87%, 67%)',

    // with transparency
    redTransparent: 'hsla(0, 87%, 67%, 0.5)',

    // Neutral
    gray: 'hsl(0, 0%, 75%)',
    grayishViolet: 'hsl(257, 7%, 63%)',
    veryDarkBlue: 'hsl(255, 11%, 22%)',
    veryDarkViolet: 'hsl(260, 8%, 14%)',

    //with transparency
    grayishVioletTransparent: 'hsla(257, 7%, 63%, 0.175)',

    //FONTS
    //Font Size
    fontBase: '18px',

    // Font Family
    poppins: "'Poppins', sans-serif",

    // Font Weight
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,

    // SIZING
    desktopWidth: '1110px'
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <main>
          <Presentation />
          <Features />
          <BoostYourLinks />
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}