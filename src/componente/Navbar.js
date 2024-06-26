import style from './Navbar.module.css'
import { FiAlignJustify } from "react-icons/fi";

import fotoPerfil from '../imagens/foto-perfil-google.png'

function NavBar(){
    return (
        <div className={style.navBar}>
            <ul>
                <li><a href='https://www.google.com/intl/pt-BR/gmail/about/'>Gmail</a></li>
                <li><a href='https://www.google.com.br/imghp?hl=pt-PT'>Imagens</a></li>
                <li><a href='https://support.google.com/accounts/answer/3118621?hl=pt-BR'> <FiAlignJustify size={25}></FiAlignJustify> </a></li>
                <li><img src={fotoPerfil}></img></li>
            </ul>
        </div>
    )
}

export default NavBar