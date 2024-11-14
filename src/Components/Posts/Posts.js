import React, { useEffect, useState,useContext } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import Heart from '../../assets/Heart';
import './Post.css';
import { useNavigate } from 'react-router-dom';
import { collection,getDocs } from 'firebase/firestore';
import {productDetailContext} from '../../store/ProductContext'



function Posts() {
const navigate=useNavigate()
const [products,setProducts]=useState([])
const {db} = useContext(FirebaseContext)
const {setPostDetails}=useContext(productDetailContext)

useEffect(()=>{
  const fetchPosts=async()=>{
    try{
      const snapshot=await getDocs(collection(db,'posts'));
      const allPosts = snapshot.docs.map((product) => ({
        ...product.data(),
        id: product.id,
      }));
      console.log(allPosts)
      setProducts(allPosts)
    }catch(error){
      alert("Error while fetching Products")
    }
  };
  fetchPosts()
},[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map(product=>{  
            return <div className="card" key={product.id} onClick={()=>{navigate(`/viewposts/${product.id}`)}}>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;{product.price}</p>
              <span className="kilometer"> {product.productName}</span>
              <p className="name">{product.category}</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
          })}
          
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name">YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
