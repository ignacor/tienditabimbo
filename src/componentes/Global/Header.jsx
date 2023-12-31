import Footer from "./Footer"
function Header() {
  const cont = {
      backgroundColor: 'skyblue',
     

  }
  const h1 = {
      color: 'blue',
      textAlign: 'center',
  }
  const acont = {
      textAlign: 'center',
  

  }
  const a = {
      textDecoration: 'none',
      color: 'black',
      fontSize: '30px',
      margin: '15px'

  }
  return (

          <div style={cont}>
              <div>
                  <h1 style={h1}>EME DISTRIBUCIONES</h1>
              </div>

              <div style={acont}>
                  <a style={a} href="#pie">Bimbo</a>
                  <a style={a} href="">Valente</a>
                  <a style={a} href="">Oblita</a>
              </div>
          </div>

  )
}

export default Header