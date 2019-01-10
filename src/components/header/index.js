import { h } from 'preact'
import { Link } from 'preact-router/match'
import style from './style'

const Header = () => (
  <header class={style.header}>
    <h1>Preact App</h1>
    <nav>
      <Link activeClassName={style.active} href='/'>Home</Link>
      <Link activeClassName={style.active} href='/categories'>All</Link>
      <Link activeClassName={style.active} href='/categories/34'>Autos</Link>
    </nav>
  </header>
)

export default Header