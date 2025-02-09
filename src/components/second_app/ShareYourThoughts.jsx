import React, { useState } from 'react';
import Header from './Header'; // Import the Header component
import './ShareYourThoughts.css';

const ShareYourThoughts = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [experienceInACMWSIST, setExperienceInACMWSIST] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fullName || !email || !phone || !role) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Form submitted:', {
      fullName,
      email,
      phone,
      role,
      experienceInACMWSIST,
      profilePicture,
    });

    setFullName('');
    setEmail('');
    setPhone('');
    setRole('');
    setExperienceInACMWSIST('');
    setProfilePicture(null);

    alert('Form submitted successfully!');
  };

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  return (
    <div>
      
      <div className="form-container">
        <h2 className="title">Share your Thoughts!</h2>
        <div className="form-content">
          {/* Profile Picture Section */}
          {/* Profile Picture Section */}
<div className="profile-section">
  <label htmlFor="profilePicture" className="profile-picture-label">
    <div className="profile-picture-circle">
      {profilePicture ? (
        <img
          src={URL.createObjectURL(profilePicture)}
          alt="Profile"
          className="uploaded-profile-picture"
        />
      ) : (
        <span className="upload-placeholder">Upload</span>
      )}
    </div>
  </label>
  <input
    type="file"
    id="profilePicture"
    accept="image/*"
    onChange={handleProfilePictureChange}
    hidden
  />
  <p className="upload-text">Upload your picture</p>
</div>

          

          {/* Form Section */}
          <div className="form-fields">
            <form>
              <div className="input-row">
                <div className="input-field">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className='input-row'>

              </div>
              <div className="input-row">
                <div className="input-field myfield">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-field myfield">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="role">Your Role</label>
                <div className="select-wrapper">
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Select one</option>
                  <option value="Current Member">Current Member</option>
                  <option value="Alumni">Alumni</option>
                  <option value="Event Participant">Event Participant</option>
                  <option value="Faculty Coordinator">Faculty Coordinator</option>
                  <option value="Institution Heads">Institution Heads</option>
                  <option value="Speaker">Speaker</option>
                </select>
              </div>
              </div> 
              <div className="form-group">
                <label htmlFor="experienceInACMWSIST">Tell us about your experience in ACM-W SIST</label>
                <textarea
                  id="experienceInACMWSIST"
                  value={experienceInACMWSIST}
                  onChange={(e) => setExperienceInACMWSIST(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleSubmit} className="submit-button">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareYourThoughts;
