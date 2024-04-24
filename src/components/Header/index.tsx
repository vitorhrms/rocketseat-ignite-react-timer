import * as S from './styles'
import { Timer, Scroll } from 'phosphor-react'
import logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={logo} alt="Logo" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  )
}
