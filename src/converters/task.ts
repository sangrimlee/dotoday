import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  Timestamp,
  WithFieldValue,
} from 'firebase/firestore';

export class Task {
  constructor(
    readonly title: string,
    readonly dueDate: Date,
    readonly done: boolean,
    readonly uid: string,
    readonly description?: string,
  ) {}
}

export const taskConverter = {
  toFirestore(task: WithFieldValue<Task>): DocumentData {
    return {
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      done: task.done,
      uid: task.uid,
    };
  },

  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Task {
    const data = snapshot.data(options)!;
    return new Task(
      data.title,
      data.dueDate.toDate(),
      data.done,
      data.uid,
      data.description,
    );
  },
};
