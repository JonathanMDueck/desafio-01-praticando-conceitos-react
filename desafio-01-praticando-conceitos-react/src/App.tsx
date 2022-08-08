import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import './global.css'

import styles from './App.module.css';
import { TaskList } from './components/TaskList';


export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <div className={styles.content}>
        <NewTask />
        </div>
        <TaskList />
      </div>
    </div>
  )
}
