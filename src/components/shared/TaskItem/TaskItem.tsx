import React from 'react';
import { Task } from '@/converters/task';
import { SVGIcon } from '../SVGIcon';
import { QueryResult } from '@/types';
import useTaskDoneMutation from '@/hooks/useTaskDoneMutation';

interface TaskItemProps {
  task: QueryResult<Task>;
}

export default function TaskItem({ task }: TaskItemProps) {
  const { mutate } = useTaskDoneMutation(task._id);

  const handleTaskDone = () => {
    mutate({
      ...task,
      done: true,
    });
  };

  return (
    <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg">
      <div className="flex flex-row">
        <button
          onClick={handleTaskDone}
          className="flex-shrink-0 w-5 h-5 rounded-full ring-1 ring-neutral-300 dark:ring-neutral-600 mt-1 mr-4 flex items-center justify-center text-transparent hover:text-white transition-colors hover:bg-brand "
        >
          <SVGIcon icon="CheckIcon" size={12} />
        </button>
        <div className="min-w-0">
          <h3 className="truncate">{task.title}</h3>
          {task.description && (
            <p className="text-sm text-secondary truncate mt-2">
              {task.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
