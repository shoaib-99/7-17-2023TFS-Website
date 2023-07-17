import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Bookings = () => {
  const [Name, setName] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [EventType, setEventType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!Name || !MobileNumber || !EventType) {
      toast.error("Please fill all the form details.");
      return;
    }
  
    const formData = new FormData();
    formData.append("Name", Name);
    formData.append("MobileNumber", "'" + MobileNumber);
    formData.append("EventType", EventType);
  
    // Perform the form submission and handle the response
    fetch("https://script.google.com/macros/s/AKfycbzU0NmInGeMFQt62ztWMLIBGiTkbVrBcKXB4GPBXhhIqwUgD7RE-h8KR6U4wcaRjb6DyA/exec", {
      method: "POST",
      body: formData
    })
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
        // Clear form fields
        setName("");
        setMobileNumber("");
        setEventType("");
  
        // Show success toast message
        toast.success("Thank you for booking us! We will contact you shortly.");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Show error toast message
        toast.error("Booking failed. Please try again.");
      });
  };

  return (
    <div className="container bookings">
      <div className="card-booking">
        <div className="card-body">
      <h1 className="text-center">BOOKINGS</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="Name"
            placeholder="Enter your Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="MobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="MobileNumber"
            placeholder="Enter your Mobile Number"
            value={MobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className="form-group custom-dropdown">
          <label htmlFor="EventType">Event Type:</label>
          <select
            id="EventType"
            value={EventType}
            onChange={(e) => setEventType(e.target.value)}
          >
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Corporate Event">Corporate Event</option>
          </select>
        </div>
        <div className="container-button">
        <button type="submit" className="ubtn btn1">
          Submit
        </button>
        </div>
      </form>
      </div>
      </div>
      </div>
     
    
  );
};

export default Bookings;
