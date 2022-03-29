import { firestore } from '@/firebase';
import { useFirestoreQueryData } from '@react-query-firebase/firestore';
import { collection, orderBy, query, where } from 'firebase/firestore';
import { Task, taskConverter } from '@/converters/task';
import { useAuthContext } from '@/contexts/AuthContext';

export default function useTaskQuery() {
  const { user } = useAuthContext();
  const ref = query(
    collection(firestore, 'tasks').withConverter<Task>(taskConverter),
    where('uid', '==', user?.uid),
    where('done', '==', false),
    orderBy('dueDate', 'asc'),
  );

  const queryResult = useFirestoreQueryData(['tasks'], ref, {
    subscribe: true,
    includeMetadataChanges: true,
    idField: '_id',
  });

  return queryResult;
}
