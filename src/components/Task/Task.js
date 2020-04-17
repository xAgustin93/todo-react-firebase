import React from "react";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { ReactComponent as Check } from "../../assets/check.svg";
import firebase from "../../utils/firebase";
import "firebase/firestore";

import "./Task.scss";

const db = firebase.firestore(firebase);

export default function Task(props) {
  const { task, setRelodTasks } = props;

  const completeTask = () => {
    db.collection("tasks")
      .doc(task.id)
      .update({
        completed: true,
      })
      .then(() => {
        setRelodTasks(true);
      });
  };

  const deleteTask = () => {
    db.collection("tasks")
      .doc(task.id)
      .delete()
      .then(() => {
        setRelodTasks(true);
      });
  };

  return (
    <div className="task">
      <div>
        <Check
          className={task.completed && "completed"}
          onClick={completeTask}
        />
      </div>
      <div>{task.name}</div>
      <div>
        <Delete onClick={deleteTask} />
      </div>
    </div>
  );
}
