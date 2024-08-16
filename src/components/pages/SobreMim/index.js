import { PostModelo } from "components/PostModelo";
import styles from "./SobreMim.module.css";
import fotoCapa from "assets/sobre_mim_capa.png"

export function SobreMim() {
    return (
        <PostModelo
            titulo="Sobre mim"
            fotoCapa={fotoCapa}
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Celso!
            </h3>
            <img
                src="http://github.com/CelsoSiqueira1996.png"
                alt="Foto do Celso em Paris."
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Formado em engenharia mecânica com experiência em desenvolvimento de produtos e automação industrial. Atualmente, curso Análise e Desenvolvimento de Sistemas, buscando transição de carreira para tecnologia, com foco em desenvolvimento web FullStack.
            </p>
            <p className={styles.paragrafo}>
                Conhecimento sólido em diversas linguagens e ferramentas, como JavaScript, TypeScript, Node.JS, HTML, CSS, Banco de Dados SQL e NoSQL, entre outras. Conhecimento em metodologias e boas práticas de desenvolvimento, como The Twelve Factor App, SOLID, CI/CD, entre outras. Durante minha jornada, adquiri habilidades em gestão de projetos, normas de desenho e programação.
            </p>
            <p className={styles.paragrafo}>
                Participei do programa Desenvolve 2024, uma iniciativa do grupo Boticário em parceria com a escola de tecnologia Alura para inclusão de novos talentos em tecnologia. Durante o programa, realizei a formação de Desenvolvedor Web FullStack, totalizando 43 cursos distribuídos em 374 horas de aulas, projetos e desafios. Sou resiliente, criativo e tenho facilidade com números, buscando sempre soluções inovadoras para desafios complexos.
            </p>
        </PostModelo>
    )
}