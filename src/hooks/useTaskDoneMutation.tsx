import { firestore } from '@/firebase';
import { collection, doc } from 'firebase/firestore';
import { Task, taskConverter } from '@/converters/task';
import { useFirestoreDocumentMutation } from '@react-query-firebase/firestore';

export default function useTaskDoneMutation(taskId: string) {
  const ref = doc(
    collection(firestore, 'tasks').withConverter<Task>(taskConverter),
    taskId,
  );
  const mutation = useFirestoreDocumentMutation(ref, { merge: true });

  return mutation;
}
