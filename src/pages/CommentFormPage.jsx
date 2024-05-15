import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { firestore } from '../firebase/firebase';
import { collection, doc, updateDoc, arrayUnion, query, where, onSnapshot } from 'firebase/firestore';
import './CommentFormPage.css';
import { useParams } from 'react-router-dom';

const CommentFormPage = () => {
  const params = useParams();
  const { currentUser } = getAuth();
  const [comment, setComment] = useState('');
  const [blogId, setBlogId] = useState(null);

  useEffect(() => {
    if (params) {
      const unsubscribe = onSnapshot(
        query(collection(firestore, 'blogs'), where('id', '==', params.id)),
        (snapshot) => {
          if (snapshot.docs.length > 0) {
            // const docData = snapshot.docs[0].data();
            console.log(snapshot.docs[0].id);
            setBlogId(snapshot.docs[0].id);
          }
        }
      );
      return unsubscribe;
    }
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      console.error('User not logged in.');
      return;
    }

    try {
      const commentData = {
        comment: comment,
        user: currentUser.email,
        createdAt: new Date(),
      };

      // Update the blog document with new comment
      if (blogId) {
        await updateDoc(doc(firestore, 'blogs', blogId), {
          comments: arrayUnion(commentData),
        });
      }

      // Clear the comment input after submission
      setComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter your comment..."
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentFormPage;
