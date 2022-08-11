import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import './global.css'

import styles from './App.module.css';
import { Infolabel } from './components/Infolabel';
import { Task } from './components/Task';
import { useState } from 'react';
import Clipboard from './assets/Clipboard.svg';

interface TaskProps {
  isComplete: boolean;
  description: string;
}

export default function App() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [tasksCreated, setTasksCreated] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);

  function handleAddTask(isComplete: boolean, description: string){
    const newList = [...tasks, {isComplete, description}]
    setTasks(newList);
    setTasksCreated(tasksCreated + 1);
  }

  function handleCompleteTask(taskToComplete: string){
    tasks.forEach(t => {
      if(t.description === taskToComplete){
        t.isComplete = !t.isComplete;
      }
    })
    updateTasksCompleted(tasks);
  }
  
  function updateTasksCompleted(taskList: TaskProps[]){
    
    const list = taskList.filter(task => {
      return task.isComplete;
    })
    setTasksCompleted(list.length);
  }

  function handleDeleteTask(taskToDelete: string){
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.description !== taskToDelete;
    })
    setTasks(tasksWithoutDeletedOne);
    setTasksCreated(tasksCreated - 1);
    updateTasksCompleted(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <div className={styles.main}>
        <div className={styles.content}>
        <NewTask addTask={handleAddTask}/>
        </div>
          <div className={styles.tasklistLabel}>

            <div className={styles.label}>
                <Infolabel tasksCreated={tasksCreated} created text='Tarefas criadas'/>
                <Infolabel tasksCreated={tasksCreated} tasksCompleted={tasksCompleted} text='Concluídas'/>
            </div>

            <div className={styles.tasklistcontent}>
              <div className={tasks.length > 0 ? styles.notaskhidden : styles.notasks}>
                <img src={Clipboard}/>
                <span>Você ainda não tem tarefas cadastradas</span>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
                <div className={styles.tasks}>
                  {tasks.map(task => {
                    return( 
                      <Task 
                        key={task.description}
                        isComplete={task.isComplete} 
                        description={task.description}
                        onCompleteTask={handleCompleteTask}
                        onDeleteTask={handleDeleteTask}
                      />
                    )
                    })
                  }
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}
