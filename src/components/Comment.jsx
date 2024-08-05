import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/djbarcelos.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}></div>
                        <strong>Diogo Jorge</strong>
                        <time title="05 de Agosto as 14:56h" dateTime="2024-08-05 14:56:22">Cerca de 1h atrás</time>
                        <button title='Remover comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!!</p>
                </div>
            </div>

            <footer>
                <button >
                    <ThumbsUp size={20} />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    )
}