import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png"

export function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Celso Siqueira, aluno da Alura.Aqui compartilho vários conhecimentos, espero que aprendam algo novo!
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""
                />

                <img 
                    className={styles.minhaFoto}
                    src="http://github.com/CelsoSiqueira1996.png"
                    alt="foto do Celso em Paris"
                />
            </div>
        </div>
    )
}