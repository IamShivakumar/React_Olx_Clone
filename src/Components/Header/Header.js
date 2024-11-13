import React, { useEffect, useState ,useContext} from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { FirebaseContext } from '../../store/FirebaseContext';


function Header() {
  const[user,setUser]=useState(null)
  const { auth } = useContext(FirebaseContext)
  const navigate=useNavigate()

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
      user?setUser(user):setUser(null)
    })
    return()=>unsubscribe()
  },[auth])

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span>ENGLISH</span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        {user ? (
            <>
              <span onClick={handleSignOut}>Sign Out</span>
              <hr />
            </>
          ) : (
            <>
              <span onClick={()=>navigate('/login')}>Login</span>
              <hr />
            </>
          )}
        </div>
        <div className="sellMenu" onClick={()=>navigate("/create")}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span >SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
