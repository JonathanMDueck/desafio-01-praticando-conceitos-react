import { Circle, CheckCircle } from 'phosphor-react';
import Trash from '../assets/Trash.svg';

import styles from './Task.module.css';


interface TaskProps {
    isComplete: boolean;
    description: string;
}


export function Task({ isComplete, description }: TaskProps) {
    return(
        <div className={styles.task}>
            <div className={isComplete ? styles.taskComplete : styles.taskIncomplete}> 
                <button >
                    {isComplete ? <CheckCircle size={24} weight='fill'/> : <Circle size={24}/>}
                </button>
                <p>{description}</p>
                <button className={styles.trash}>
                    <img src={Trash} />
                </button>
            </div>
        </div>
    );
}