import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar>
          SideBar
        </Sidebar>
        <main>
          <Post
            author='Diogo Jorge'
            content='Message'
          />
          <Post
            author='Anne Caroline'
            content='Message'
          />
        </main>
      </div>
    </div>
  )
}
