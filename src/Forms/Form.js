import React, { useState } from "react";
// import Card from 'react-bootstrap/Card';
import Cards from "../components/Cards";
import InputField from "../components/Input";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    contactEmail: "",
  });

  const [cards, setCards] = useState([]);

  const handleChange = (e) => {
    // console.log(e.target)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      contactEmail: "",
    });
  }

  const handleEdit = (index) => {
    const selectedCard = cards[index];
    setFormData(selectedCard);
    setCards(cards.filter((_, i) => i !== index));
  };

  const handleDelete = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-2 p-4">
            <h1 className="card-title text-center">Form</h1>
            <form onSubmit={handleSubmit} className="form">
              <div className="row">
                <InputField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="row">
                <InputField
                  label="User Name"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />

                <InputField
                  label="Contact Email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                />
              </div>
              {/*<button
                className="btn-primary"
                type="submit"
                children="submit"
  ></button>*/}
              <button
                type="submit"
                className="btn btn-primary mx-auto d-block mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Form;

// <div className='card-body'>
// <p className='card-title'>First Name: {card.firstName}</p>
//   <p>Last Name: {card.lastName}</p>
//   <p>Username: {card.username}</p>
//   <p>Contact Email: {card.contactEmail}</p>
//   <button  className='btn btn-primary' onClick={() => handleEdit(index)}>Edit</button>
//   <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
// </div>
