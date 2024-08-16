import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import { PostModelo } from "components/PostModelo";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import { NaoEncontrada } from "../NaoEncontrada";
import { DefaultLayout } from "components/DefaultLayout";
import styles from "./Post.module.css";
import { PostCard } from "components/PostCard";

export function Post() {

    const params = useParams();
    const post = posts.find((post) => post.id === Number(params.id));
    const postsRecomendados = posts
        .filter((post) => post.id !== Number(params.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        (post)? 
        <DefaultLayout>
            <PostModelo 
                titulo={post.titulo}
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
                <h1 className={styles.titulo}>Outros posts que você pode gostar:</h1>
                <ul className={styles.postsRecomendados}>
                    {postsRecomendados.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />                       
                        </li>
                    ))}
                </ul>
            </PostModelo>
        </DefaultLayout>
        : <NaoEncontrada />
    )
}