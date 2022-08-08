import { Infolabel } from './Infolabel';
import styles from './TaskList.module.css';
import Clipboard from '../assets/Clipboard.svg';
import { Task } from './Task';
import { useState } from 'react';

const tasks = [
    {
        isComplete: false,
        description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    },
    {
        isComplete: true,
        description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    },
    {
        isComplete: false,
        description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    },
    {
        isComplete: true,
        description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    }
]

export function TaskList() {

    return(
        <div className={styles.tasklistLabel}>
            <div className={styles.label}>
                <Infolabel created text='Tarefas criadas'/>
                <Infolabel text='Concluídas'/>
            </div>
            <div className={styles.tasklistcontent}>
                <div className={tasks.length > 0 ? styles.notaskhidden : styles.notasks}>
                    <img src={Clipboard}/>
                    <span>Você ainda não tem tarefas cadastradas</span>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
                <div className={styles.tasks}>
                    {tasks.map(task => {
                        return <Task isComplete={task.isComplete} description={task.description}/>
                    })}
                </div>
            </div>
        </div>
    );
}