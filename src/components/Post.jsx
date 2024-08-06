import { format, formatDistanceToNow } from 'date-fns';
import prBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import PropTypes from 'prop-types';

import styles from './Post.module.css'
import { useState } from 'react';

Post.propTypes = {
    id: PropTypes.number,
    author: PropTypes.shape({
        avatarUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf(['paragraph', 'link', 'hashtags']).isRequired,
        content: PropTypes.string.isRequired,
    })).isRequired,
    publishedAt: PropTypes.instanceOf(Date).isRequired,
    listComments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string.isRequired,
        publishedIn: PropTypes.instanceOf(Date).isRequired,
    })),
};

export function Post({ author, publishedAt, content, listComments }) {

    const [comments, setComments] = useState(listComments || []);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: prBR })
    const publishedAtDateRelativeTonow = formatDistanceToNow(publishedAt, { locale: prBR, addSuffix: true })

    function handleCreateNewComment() {
        event.preventDefault();

        const newComment = {
            id: comments.length + 1,
            content: newCommentText,
            publishedIn: new Date()
        }

        setComments([...comments, newComment]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Comentário é obrigatório!');
    }

    function deleteComment(commentId) {
        const newCommentList = comments.filter(({ id }) => id !== commentId);
        setComments(newCommentList);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>{publishedAtDateRelativeTonow}</time>
            </header>

            <div className={styles.content}>
                {content.map((line, index) => {
                    if (line.type === 'paragraph') {
                        return <p key={index}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={index}><a href="">{line.content}</a></p>
                    } else if (line.type === 'hashtags') {
                        return <span key={index}><a href="">{line.content}</a></span>
                    }
                })}
            </div>

            <form id="myForm" onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentário.'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>


            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return <Comment
                        id={comment.id}
                        content={comment.content}
                        key={comment.id}
                        onDeleteComment={deleteComment}
                        publishedIn={comment.publishedIn}
                    />
                })}
            </div>
        </article>
    )
}