import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const { name, email } = location.state || {};

  const displayName = name || 'Marry Doe';
  const displayEmail = email || 'Marry@Gmail.Com';

  const [profileImage, setProfileImage] = useState(
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  );

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar */}
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#ffffff', 
        fontSize: '18px', 
        fontWeight: '500', 
        color: '#1d2226',
        borderBottom: '1px solid #eaeaea'
      }}>
        Account Settings
      </div>

      {/* Content */}
      <div style={{ padding: '30px 20px', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
          
          {/* Avatar with Camera Icon */}
          <div style={{ position: 'relative', width: '80px', height: '80px' }}>
            <img 
              src={profileImage} 
              alt="Profile" 
              style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
            />
            <label style={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              backgroundColor: 'var(--primary)',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '2px solid white',
              cursor: 'pointer'
            }}>
              <input 
                type="file" 
                accept="image/*" 
                style={{ display: 'none' }} 
                onChange={handleImageChange}
              />
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </label>
          </div>

          {/* User Info */}
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1d2226', marginBottom: '4px' }}>
              {displayName}
            </h2>
            <p style={{ fontSize: '14px', color: '#4a4a4a', margin: 0 }}>
              {displayEmail}
            </p>
          </div>
        </div>

        {/* Description Text */}
        <p style={{ 
          fontSize: '15px', 
          color: '#4a4a4a', 
          lineHeight: '1.6', 
          marginBottom: '30px' 
        }}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        {/* Dashed Separators */}
        <div style={{ borderBottom: '1px dashed #d3d3d3', marginBottom: '300px' }}></div>
        <div style={{ borderBottom: '1px dashed #d3d3d3' }}></div>

      </div>
    </div>
  );
}

export default Profile;
