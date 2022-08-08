
import styles from './Infolabel.module.css';

interface InfoLabelProps {
    created?: boolean;
    text: string;
}

export function Infolabel( { created = false, text }: InfoLabelProps) {
    return(
        <div className={styles.label}>
            <strong className={created ? styles.labelCreated : styles.labelConcluded}>{text}</strong>
            <div className={styles.number}>
                0
            </div>
        </div>
    );
}