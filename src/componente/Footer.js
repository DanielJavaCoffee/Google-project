import style from './Footer.module.css'


function Footer(){
    return (
        <footer className={style.footerStyle}>
            
            <div className={style.div01}>
                <nav>
                    <a href=''>Brasil</a>
                </nav>
            </div>

            <div className={style.grid}>
                <nav className={style.nav01}>
                    <ul>
                        <li><a href=''>Sobre</a></li>
                        <li><a href=''>Publicidade</a></li>
                        <li><a href=''>Negócios</a></li>
                        <li><a href=''>Como funciona a Pesquisa</a></li>
                    </ul>
                </nav>

                <nav className={style.nav02}>
                    <ul>
                        <li><a href=''>Privacidade</a></li>
                        <li><a href=''>Termos</a></li>
                        <li><a href=''>Configurações</a></li>
                    </ul>
                </nav>
            </div>

        </footer>
    )
}

export default Footer