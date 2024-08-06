import { format, formatDistanceToNow } from 'date-fns';
import prBR from 'date-fns/locale/pt-BR';

import { ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import PropTypes from 'prop-types';

import styles from './Comment.module.css';
import { useState } from 'react';

Comment.propTypes = {
    id: PropTypes.number,
    content: PropTypes.string.isRequired,
    publishedIn: PropTypes.instanceOf(Date).isRequired,
    onDeleteComment: PropTypes.instanceOf(Function).isRequired
}

export function Comment({ id, content, publishedIn, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    const publishedInDateFormatted = format(publishedIn, "d 'de' LLLL 'às' HH:mm'h'", { locale: prBR })
    const publishedInDateRelativeToNow = formatDistanceToNow(publishedIn, { locale: prBR, addSuffix: true })


    function handleDeleteComment() {
        onDeleteComment(id)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/djbarcelos.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diogo Jorge</strong>
                            <time title={publishedInDateFormatted} dateTime={publishedIn.toISOString()}>{publishedInDateRelativeToNow}</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Remover comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>


                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}