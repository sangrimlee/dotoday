import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextareaAutosize from 'react-textarea-autosize';

import { TaskSchema } from '@/types';
import { SCHEMA } from '@/constants/schema';
import useTaskMutation from '@/hooks/useTaskMutation';
import { useAuthContext } from '@/contexts/AuthContext';
import { Button } from '../Button';
import { SVGIcon } from '../SVGIcon';

export default function TaskEditor() {
  const { user } = useAuthContext();
  const { mutate } = useTaskMutation();
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty },
    reset,
  } = useForm<TaskSchema>({
    mode: 'onChange',
    resolver: yupResolver(SCHEMA.TASK),
  });
  const [isEditable, setIsEditable] = useState<boolean>(false);

  useEffect(() => {
    reset();
  }, [isEditable]);

  const onSubmit = ({ title, description }: TaskSchema) => {
    if (user) {
      mutate({
        title,
        description,
        dueDate: new Date(),
        done: false,
        uid: user.uid,
      });
    }
    reset();
  };

  const AddTaskButton = () => {
    return (
      <button className="add-task-btn" onClick={() => setIsEditable(true)}>
        <SVGIcon icon="AddIcon" size={24} />
      </button>
    );
  };

  const AddTaskInput = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="task-editor-editing-wrap">
          <TextareaAutosize
            autoFocus
            minRows={1}
            placeholder="할 일"
            className="task-editor-input task-editor-title"
            {...register('title')}
          />
          <TextareaAutosize
            minRows={2}
            placeholder="설명"
            className="task-editor-input task-editor-desc"
            {...register('description')}
          />
        </div>
        <div className="task-editor-form-actions">
          <Button
            buttonColor="brand"
            buttonType="small"
            disabled={!isValid || !isDirty}
          >
            확인
          </Button>
          <Button buttonType="small" onClick={() => setIsEditable(false)}>
            취소
          </Button>
        </div>
      </form>
    );
  };

  return (
    <div>
      {!isEditable && <AddTaskButton />}
      {isEditable && <AddTaskInput />}
    </div>
  );
}
