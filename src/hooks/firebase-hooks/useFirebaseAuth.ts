import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';  
import { auth } from '../../firebase/auth';

function useFirebaseAuth() {
  const [currentUser, setCurrentUser] = useState<User | null>(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user); 
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { currentUser, loading };
}

export default useFirebaseAuth;
