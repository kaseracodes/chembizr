// src/hooks/useMetaTags.js
import { useState, useEffect } from 'react';
import { firestore } from '../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const useMetaTags = (pagePath) => {
    const [metaTags, setMetaTags] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMetaTags = async () => {
            if (!pagePath) {
                setLoading(false);
                return;
            }
            
            try {
                setLoading(true);
                
                // Query Firestore for meta tags using pagePath
                const q = query(
                    collection(firestore, 'metaTags'),
                    where('pagePath', '==', pagePath)
                );
                
                const querySnapshot = await getDocs(q);
                
                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0];
                    setMetaTags(doc.data());
                    console.log('Meta tags loaded for:', pagePath, doc.data());
                } else {
                    setMetaTags(null);
                    console.log('No meta tags found for:', pagePath);
                }
            } catch (error) {
                console.error('Error fetching meta tags:', error);
                setMetaTags(null);
            } finally {
                setLoading(false);
            }
        };

        fetchMetaTags();
    }, [pagePath]);

    return { metaTags, loading };
};
