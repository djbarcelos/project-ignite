import styles from './Avatar.module.css';
import PropTypes from 'prop-types';

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    hasBorder: PropTypes.bool.isRequired
};

export function Avatar({ src, hasBorder = true }) {
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
    );
}