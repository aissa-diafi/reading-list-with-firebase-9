import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";

// firebase imports
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);

  // set up query
  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, c);

    if (query) {
      ref = query(ref, where(...q));
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      const results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [c, q]);

  return { documents };
};
