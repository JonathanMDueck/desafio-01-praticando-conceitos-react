import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import './global.css'

import styles from './App.module.css';


export default function App() {
  return (
    <div >
      <Header />
      <div className={styles.content}>
        <NewTask />
      </div>
    </div>
  )
}
