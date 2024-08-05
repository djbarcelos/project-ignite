import { PencilLine } from '@phosphor-icons/react'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1516820827855-3ea1bd6f79ea?q=50&w=500" />

            <div className={styles.profile}>
                <Avatar src='https://github.com/djbarcelos.png'/>
                <strong>Diogo Jorge</strong>
                <span>Software Develop</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}