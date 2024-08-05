import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/djbarcelos.png" />
                    <div className={styles.authorInfo}>
                        <strong>Diogo Jorge</strong>
                        <span>Software Develop</span>
                    </div>
                </div>

                <time title="05 de Agosto as 14:56h" dateTime="2024-08-05 14:56:22">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a>jane.design/doctorcare</a></p>

                <p>
                    <a>#novoprojeto</a>{' '}
                    <a>#nlw</a>{' '}
                    <a>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário.'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>


            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}