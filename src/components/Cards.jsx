import React from 'react'

const Cards = ({card,handlesubmit,handledelete,ind}) => {

   
  return (
    <div>
    <div key={ind} className='card col-md-4 m-2'  style={{ width: '18rem', margin:'2rem 0rem' ,float:'left'}}>
                <h1 className='text-center'>Card</h1>
                <div className='card-body'>
                <p className='card-title'>First Name: {card.firstName}</p>
                  <p>Last Name: {card.lastName}</p>
                  <p>Email: {card.email}</p>
                  <p>Contact: {card.contact}</p>
 {              /*   <Button  className="btn-primary"  children="Edit" onClick={() => handlesubmit(ind)}/>
  <Button className="btn-danger"  children="Delete" onClick={() => handledelete(ind)}/> */}
       <button  className='btn btn-primary' onClick={() => handlesubmit(ind)}>Edit</button>
  <button className='btn btn-danger' onClick={() => handledelete(ind)}>Delete</button>
                </div>
          </div>
    </div>
  )
}

export default Cards;