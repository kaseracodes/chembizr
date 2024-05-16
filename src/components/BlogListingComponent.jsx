import React, { useState, useEffect } from 'react';
import { firestore, storage } from '../firebase/firebase';
import BlogListingCard from './blogListingCard/BlogListingCard'; // Assuming you have a component for rendering each blog listing card
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore';

const BlogListingComponent = ({ currentTopic }) => {
  const [blogsData, setBlogsData] = useState([]);

useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(firestore, "blogs"),where("category", "==", currentTopic), orderBy("timestamp", "desc")), (snapshot) => {
        setBlogsData(snapshot.docs);
        // console.log(snapshot.docs[0].data());
    });

    return unsubscribe;
}, [currentTopic]);

// useEffect(() => {
//     console.log(blogsData);
// }, [blogsData]);


  return (
    <div>
      {blogsData && blogsData.map((item, index) => (
        <BlogListingCard
          key={index}
          blogId={item.data().id}
          heading={item.data().heading}
          imagePath={item.data().image}
          author={item.data().author}
          desc={item.data().short}
          category={item.data().category}
          date={item.data().date}
        />
      ))}
    </div>
  );
};

export default BlogListingComponent;
