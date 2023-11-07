import React from 'react';

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "../styles/profile.css"
import ProfileUpdateForm from './ProfileUpdateForm';

// import ProfilePicture from './ProfilePicture';
// import Header from './Header';
// import Summary from './Summary';
// import Experience from './Experience';
// import Education from './Education';
// import Skills from './Skills';


const Profile = () => {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [userProfile, setUserProfile] = useState("");
    const [showForm, setShowForm] = useState(false)
    const [userData, setUserData] = useState({
      firstName : "",
      lastName : "",
      email : ""
    })

    useEffect(() => {
      const loadProfileData = async () => {
        if (!cookies.token) {
          navigate("/login");
        }
        const { data } = await axios.post(
          "http://localhost:4000/profile",
          {},
          { withCredentials: true }
        );
        const {status,user} = data;
        if(!status){
          toast("User Not Found", {
            position: "top-right",
          })
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        }else{
          setUserProfile(user);
          setUserData({
            firstName : user.firstName,
            lastName : user.lastName,
          })
        }
        return status
          ? toast(`Hello ${user.username}`, {
              position: "top-right",
            })
          : (removeCookie("token"), navigate("/login"));
      };
      loadProfileData();
    }, [cookies, navigate, removeCookie]);
    const Logout = () => {
      removeCookie("token");
      navigate("/");
    };

    const [updatedName, setUpdatedName] = useState('');
    //const [updatedEmail, setUpdatedEmail] = useState('');

  // const handleUpdateUserProfile = async () => {
  //   try {
  //     // Make a PUT or PATCH request to update the user's data
  //     const response = await axios.put('http://localhost:4000/updateUserProfile', {
  //       // name: updatedName,
  //       NewName: updatedName,
  //       userId: userProfile._id,
  //     });
      
  //     if (response.data.success) {
  //       toast(response.data.message, {
  //         position: "top-right",
  //       })
  //     } else {
  //       console.log(response.data.message);
  //       toast(response.data.message, {
  //         position: "top-right",
  //       })
  //     }
  //   } catch (error) {
  //     toast("Server error", {
  //       position: "top-right",
  //     })
  //   }
  // };


    const handleUpdateUserProfile = ()=> {
      setUserData({
        firstName : userProfile.firstName,
        lastName : userProfile.lastName,
      })
      setShowForm(true);
    }

    if(showForm) {
      return (
        <>
          <ProfileUpdateForm userId = {userProfile._id} userData = {userData} setUserData = {setUserData} setShowForm = {setShowForm}/>
        </>
      )
    }

    else  {
    return (
        <>
          {/* <div className="profile">
            <ProfilePicture />
            <Header />
            <Summary />
            <Experience />
            <Education />
            <Skills />
          </div> */}
     <div className="profile-container">
        <div className="profile-photo">
          <img src="/images/user-profile-photo.svg" alt="User Profile Photo" />
        </div>
        <h1 className="user-name">{userData.firstName} {userData.lastName}</h1>
        <p className="user-headline">MCA' 25 @NIT Allahabad | Front-end Developer | SEO Specialist</p>
        <p className="user-location">Rajasthan, India</p>
        <p className="user-conections">646 followers * 500+ connections</p>

        <button className="edit-button" id="edit-button" onClick="toggleEditForm()">Edit</button>
        <form className="edit-form" id="edit-form">
          <input type="text" id="edit-name" placeholder="New Name" />
          <input type="text" id="edit-title" placeholder="New Title" />
          <input type="text" id="edit-location" placeholder="New Location" />
          <button className="save-button" id="save-button" onClick="saveChanges()">Save</button>
        </form>
      </div>

            <button onClick={Logout}>LOGOUT</button>

            <div>
      <input
        type="text"
        value={updatedName}
        onChange={(e) => setUpdatedName(e.target.value)}
      />
        {/* <input
          type="text"
          value={setUpdatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        /> */}
        <button onClick={handleUpdateUserProfile}>Update Profile</button>
      </div>
              <ToastContainer />
        </>
      )
      }
}

export default Profile