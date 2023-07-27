import { useState } from "react";

const TodoListPage = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");
    const [taskDuration, setTaskDuration] = useState("");
    const addTasks = () => {
        if (taskName && taskDuration) {
            const data = { "taskName": taskName, "taskDuration": taskDuration };
            setTasks([...tasks, data])
            console.log(tasks);
            setTaskDuration('');
            setTaskName('');
        }
    }

    return (
        <>
            <div className="container">
                <h2>
                    Todo List
                </h2>
                <div>
                    <form action="" method="get">
                        <label className="m-1" htmlFor="taskName" >Task Name: </label>
                        <input className="m-1" type="text" id="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                        <label className="m-1" htmlFor="duration" >Duration: </label>
                        <input className="m-1" type="text" id="duration" value={taskDuration} onChange={(e) => setTaskDuration(e.target.value)} />
                        <input type="button" value="Add to list" onClick={addTasks} />
                    </form>
                </div>
                <br />
                <div>
                    { tasks.length > 0 &&
                    (
                        <table className="table table-bordered w-50">
                        <thead>
                            <tr>
                                <th>Task Name</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task) => (
                                <tr>
                                    <td>{task.taskName}</td>
                                    <td>{task.taskDuration}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    )

                    }
                    
                </div>
            </div>
        </>
    );
}

export default TodoListPage;