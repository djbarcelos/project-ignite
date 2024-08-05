import { PencilLine } from '@phosphor-icons/react'
import style from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img className={style.cover} src="https://images.unsplash.com/photo-1516820827855-3ea1bd6f79ea?q=50&w=500" />

            <div className={style.profile}>
                <img className={style.avatar} src="https://github.com/djbarcelos.png" />

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