
import styles from './Infolabel.module.css';

interface InfoLabelProps {
    created?: boolean;
    text: string;
    tasksCreated: number;
    tasksCompleted?: number;
}

export function Infolabel( { created = false, text, tasksCreated, tasksCompleted = 0}: InfoLabelProps) {
    return(
        <div className={styles.label}>
            <strong className={created ? styles.labelCreated : styles.labelConcluded}>{text}</strong>
            <div className={styles.number}>
                {created ? tasksCreated : (tasksCompleted + " de " + tasksCreated)}
            </div>
        </div>
    );
}