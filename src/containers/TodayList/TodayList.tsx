import React, { useMemo } from 'react';
import useTaskQuery from '@/hooks/useTaskQuery';
import { isToday } from '@/utils/date';
import { TaskList } from '@/components/shared/TaskList';
import { Skeleton } from '@/components/shared/Skeleton';

export default function TodayList() {
  const { data: tasks, isLoading } = useTaskQuery();

  const todayTasks = useMemo(
    () => tasks?.filter((task) => isToday(task.dueDate)),
    [tasks],
  );
  const expiredTasks = useMemo(
    () => tasks?.filter((task) => !isToday(task.dueDate)),
    [tasks],
  );

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div>
      {expiredTasks && 0 < expiredTasks.length && (
        <TaskList tasks={expiredTasks} title="기한이 지난" />
      )}
      <TaskList tasks={todayTasks} title="오늘 할 일" isEditorExist />
    </div>
  );
}
