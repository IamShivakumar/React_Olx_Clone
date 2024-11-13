import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext } from '../../store/FirebaseContext';
import { addDoc,collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [productName,setProductname]=useState('')
  const[category,setCategory]=useState('')
  const[price,setPrice]=useState('') 
  const [image,setImage]=useState(null)
  const navigate=useNavigate()
  // const storage = getStorage();

  const {db,auth,firebase}=useContext(FirebaseContext)
  const user=auth.currentUser
  const handlePost=async()=>{
    if(!user){
      alert('You must be Logged in to post an item');
      return
    }
    if (!productName || !category || !price || !image) {
      alert('Please fill all fields and upload an image.');
      return;
    }try {
      // const storageRef = ref(storage, `images/${Date.now()}_${image.name}`);
      // const snapshot = await uploadBytes(storageRef, image);
      // const imageURL = await getDownloadURL(snapshot.ref);
      await addDoc(collection(db, 'posts'), {
        productName,
        category,
        price,
        image:"Image URL Here",
        createdBy: user.uid, 
        createdAt: new Date(),
      });
      navigate('/')
      alert('Post created successfully!');
      setProductname('');
      setCategory('');
      setPrice('');
      setImage(null);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="productName"
              name="Name"
              value={productName}
              onChange={(e)=>setProductname(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="catgregory"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <br />
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):''}></img>
            <br />
            <input type="file" onChange={(e)=>{
              setImage(e.target.files[0])
            }} />
            <br />
            <button onClick={handlePost} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
