import React from 'react';
import { Task } from '@/converters/task';
import { QueryResult } from '@/types';
import { TaskItem } from '../TaskItem';
import { TaskEditor } from '../TaskEditor';

interface TaskListProps {
  title: string;
  tasks?: QueryResult<Task>[];
  isEditorExist?: boolean;
}

export default function TaskList({
  title,
  tasks,
  isEditorExist,
}: TaskListProps) {
  return (
    <section className="bg-neutral-100 dark:bg-neutral-800 p-5 rounded-xl mt-8">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="w-7 h-7 flex items-center justify-center rounded bg-white dark:bg-neutral-700">
          <span className="text-secondary text-sm">
            {tasks ? tasks.length : 0}
          </span>
        </div>
      </div>
      <ul className="task-list">
        {tasks?.map((task) => (
          <li key={task._id}>
            <TaskItem task={task} />
          </li>
        ))}
        {isEditorExist && (
          <li>
            <TaskEditor />
          </li>
        )}
      </ul>
    </section>
  );
}
