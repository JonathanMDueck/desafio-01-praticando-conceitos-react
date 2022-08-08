import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';


export function NewTask() {
    return (
        <div className={styles.newtask}>
            <input placeholder='Adicione uma nova tarefa' type="text" />
            <button>
                <span>Criar</span>
                <PlusCircle size={20} />
            </button>
        </div>
    );
}