import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FirebaseContext } from '../../store/FirebaseContext';
import { doc, getDoc,getDocs, query, where,collection } from 'firebase/firestore'; 
import './View.css';
function View() {
  const { id } = useParams();
  const { db } = useContext(FirebaseContext)
  const [post, setPost] = useState(null)
  const [seller, setSeller] = useState(null)
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postRef = doc(db, 'posts', id)
        const postSnap = await getDoc(postRef)
        console.log(postSnap.data())
        if (postSnap.exists()) {
          const postData = postSnap.data()
          setPost(postData) 
        } else {
          console.log("Sorry Currently the Product information is not available")
        }
      } catch (error) {
        console.error("error Fetching post", error)
      }
    }
    fetchPost()
  }, [db, id])
  if (!post) {
    return <p>Loading post details...</p>;
  }
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src="../../../Images/R15V3.jpg"
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {post.price} </p>
          <span>{post.productName}</span>
          <p>{post.category}</p>
          <span>Tue May 04 2021</span>
        </div>
        {seller && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>No name</p>
            <p>1234567890</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
