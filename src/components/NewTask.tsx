import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './NewTask.module.css';

interface NewTaskProps {
    addTask: (isComplete: boolean, description: string) => void;
}

export function NewTask({ addTask }: NewTaskProps) {

    const [description, setDescription] = useState('');

    function handleDescriptionChange(event: ChangeEvent<HTMLInputElement>){
        setDescription(event.target.value);
    }

    function handleAddTaskCreation(event: FormEvent){
        event.preventDefault();
        addTask(false, description);
        setDescription('');
    }    

    const isNewTaskEmpty = description.length === 0;

    return (
        <div className={styles.newtask}>
            <form onSubmit={handleAddTaskCreation}>
                <input placeholder='Adicione uma nova tarefa' type="text" name='description' onChange={handleDescriptionChange} value={description}/>
                <button type='submit' disabled={isNewTaskEmpty}>
                    <span>Criar</span>
                    <PlusCircle size={16} />
                </button>
            </form>
            
        </div>
    );
}