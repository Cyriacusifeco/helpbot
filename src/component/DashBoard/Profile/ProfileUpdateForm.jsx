import { useState } from 'react';

const ProfileUpdateForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    username: '',
    email: '',
    phoneNumber: '',
    industry: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with data:', formData);
    // Reset the form fields after submission
    setFormData({
      businessName: '',
      username: '',
      email: '',
      phoneNumber: '',
      industry: '',
    });
  };

  return (
    <form className="profile-update-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Business Name</label>
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="mainBtn">
        Update
      </button>
    </form>
  );
};

export default ProfileUpdateForm;
