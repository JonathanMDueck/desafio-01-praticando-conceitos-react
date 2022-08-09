import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';
import styles from './NewTask.module.css';

interface NewTaskProps {
    addTask: (isComplete: boolean, description: string) => void;
}

export function NewTask({ addTask }: NewTaskProps) {

    const [description, setDescription] = useState('');

    function handleDescriptionChange(event: ChangeEvent<HTMLInputElement>){
        setDescription(event.target.value);
    }

    function handleAddTaskCreation(){
        addTask(false, description);
        setDescription('');
    }    

    return (
        <div className={styles.newtask}>
            <input placeholder='Adicione uma nova tarefa' type="text" name='description' onChange={handleDescriptionChange} value={description}/>
            <button onClick={handleAddTaskCreation}>
                <span>Criar</span>
                <PlusCircle size={16} />
            </button>
        </div>
    );
}