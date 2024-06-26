import React from 'react';
import style from './Imglogo.module.css';
import ButtonA from '../elements/ButtonA';
import logo from '../imagens/logo-google.svg';
import segurancaImg from '../imagens/privacidade.svg'
import { AiOutlineAudio, AiOutlineSearch } from "react-icons/ai";

function Imglogo() {
    return (
        <div className={style.imgLogo}>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div className={style.inputContainer}>
                <AiOutlineSearch className={style.icon} />
                <input type='text' className={style.inputField} />
                <AiOutlineAudio className={style.icon} />
            </div>
            <div className={style.btn}>
                <ButtonA text={'Pesquisa Google'} link={'https://www.google.com.br/?hl=pt-BR'}></ButtonA>
                <ButtonA text={'Estou com sorte'} link={'https://doodles.google/'}></ButtonA>
            </div>

            <div className={style.final}>
                <img src={segurancaImg}></img>
                <a href='https://myaccount.google.com/intro/privacycheckup?hl=pt-BR'>Faça o Check-up de privacidade</a>
            </div>
        </div>
    );
}

export default Imglogo;

