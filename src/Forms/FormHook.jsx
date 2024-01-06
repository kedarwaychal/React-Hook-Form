import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import  Cards  from "../components/Cards";
import Modal from "react-modal";

const Form = () => {
  const form = useForm();

  const { register, control,setValue, handleSubmit,formState } = form;

  const {errors} = formState;

  const [cards, setCards] = useState([]);

  const [isModalOpen, setModalOpen] = useState(false);

  const onSubmit = (data) => {
    console.log("form submitted", data);
    setCards([...cards, data]);
    setValue("firstName", '');
    setValue("lastName", '');
    setValue("email", '');
    setValue("contact",'');
    closeModal()
  };

  const handleEdit = (index) => {
    const selectedCard = cards[index];
    setCards(cards.filter((_, i) => i !== index));
    setValue("firstName", selectedCard.firstName);
    setValue("lastName", selectedCard.lastName);
    setValue("email", selectedCard.email);
    setValue("contact",selectedCard.contact)
    openModal()
  };

  const handleDelete = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  const formFields = [{
    name: "firstName",
    label: "First Name",
    type: "text",
    defaultValue: "",
    placeholder:'john',
    validation: {
      required: "First Name is required",
    },
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    placeholder:'Doe',
    defaultValue: "",
    validation: {
      required: "Last Name is required",
    },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    defaultValue: "",
    placeholder:'john.doe@example.com',
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Invalid email address",
      },
    },
  },
  {
    name: "contact",
    label: "Contact",
    type: "tel",
    defaultValue: "",
    placeholder:'123-456-7890',
    validation: {
      required: "Contact is required",
      pattern: {
        value: /^[0-9-]+$/,
        message: "Invalid contact number",
      },
    },
  },
];


const openModal = () => {
  setModalOpen(true);
};

const closeModal = () => {
  setModalOpen(false);
};


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
                <h1>Please Open Form</h1>
      
        {/*<button className="btn btn-primary" onClick={openModal}>Open Form</button>*/}       
 </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div style={{width:"500px"}}>
            <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Form Modal"
            
          >
            <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            {formFields.map((field) => (
              <div key={field.name}>
                <label htmlfor={field.name}>{field.label}</label>
                <input
                className="form-control"
                  type={field.type}
                  id={field.name}
                  {...register(field.name, field.validation)}
                  defaultValue={field.defaultValue} placeholder={field.placeholder}
                />
                <p style={{ color: "red" }}>{errors[field.name]?.message}</p>
              </div>
            ))}


              <button type="submit"  className="btn btn-primary mx-auto d-block mt-2">
                Submit
              </button>
            </form>
            <DevTool control={control} />
            <button onClick={closeModal} className="btn btn-primary">Close</button>
            </Modal>
          </div>
        </div>
      </div>
      <div className="row">
      {cards.map((card, index) => (
  
        <Cards key={index} card={card} handlesubmit={handleEdit}  handledelete={handleDelete} ind={index}/>
      ))}
    </div>
    </div>
  
  );
};

export default Form;

