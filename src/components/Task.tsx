import { Circle, CheckCircle, Trash } from 'phosphor-react';

import styles from './Task.module.css';


interface TaskProps {
    isComplete: boolean;
    description: string;
    onCompleteTask: (description: string) => void;
    onDeleteTask: (description: string) => void;
}


export function Task({ isComplete, description, onCompleteTask, onDeleteTask }: TaskProps) {


    function handleCompleteTask() {
        onCompleteTask(description);
    }

    function handleDeleteTask() {
        onDeleteTask(description);
    }

    return (
        <div className={styles.task}>
            <div className={styles.taskContent}>
                <div className={isComplete ? styles.taskComplete : styles.taskIncomplete}>
                    <button onClick={handleCompleteTask}>
                        {isComplete ? <CheckCircle size={24} weight='fill' /> : <Circle size={24} />}
                    </button>
                    <p>{description}</p>
                </div>
                <button className={styles.trash} onClick={handleDeleteTask}>
                    <Trash />
                </button>
            </div>
        </div>
    );
}