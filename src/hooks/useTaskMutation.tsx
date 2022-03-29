import { firestore } from '@/firebase';
import { collection } from 'firebase/firestore';
import { useFirestoreCollectionMutation } from '@react-query-firebase/firestore';
import { Task, taskConverter } from '@/converters/task';

export default function useTaskMutation() {
  const ref = collection(firestore, 'tasks').withConverter<Task>(taskConverter);
  const mutation = useFirestoreCollectionMutation(ref, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return mutation;
}
