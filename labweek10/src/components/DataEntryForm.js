import React, { useState } from 'react';

function DataEntryForm () {
    const [values, setInputs] = useState({
        email: '',
        fullName: '',
        address: '',
        city: '',
        province: '',
        postalCode: ''
      });
    
      const [output, setOutput] = useState(null);
    
      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setOutput({...values})
      }
    
    return (
        <div className='container'>
        <h2>Data Entry Form</h2>
        <form onSubmit={handleSubmit}> 
          <div className='mb-3'>
          <label className='form-label'>Email:</label>
            <input type="email" className='form-control' name="email" placeholder="Email" value={values.email} onChange={handleChange} />
          </div>
          
          <div className='mb-3'>
          <label className='form-label'>Full Name:</label>
            <input type="text" className='form-control' name="fullName" placeholder="Full Name" value={values.fullName} onChange={handleChange} />
          </div>
         
          <div className='mb-3'>
          <label className='form-label'>Address:</label>
            <input type="text" className='form-control' name="address" placeholder="Address" value={values.address} onChange={handleChange} />
          </div>
         
    
          <label className='mb-3'>City:</label>
            <input type="text" className='form-control' name="city" placeholder="City" value={values.city} onChange={handleChange} />
        
         
    
          <label className='mb-3'>Province:</label>
              
              <select name="province" className='form-control' value={values.province} onChange={handleChange}>
                <option value="">Select a province</option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="MB">Manitoba</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="NS">Nova Scotia</option>
                <option value="ON">Ontario</option>
                <option value="PE">Prince Edward Island</option>
                <option value="QC">Quebec</option>
                <option value="SK">Saskatchewan</option>
                <option value="NT">Northwest Territories</option>
                <option value="NU">Nunavut</option>
                <option value="YT">Yukon</option>
              </select>
            
           
    
    
            <label className='mb-3'>Postal Code:</label>
            
            <input type="text" className='form-control' name="postalCode" placeholder="Postal Code" value={values.postalCode} onChange={handleChange} />
          
          <br />
    
          <button type="submit" className='btn btn-primary'>Submit</button>
    
    
        </form>
    
         {output && (
            <div>
              <h3>Submitted Information</h3>
              <p>Email: {output.email}</p>
              <p>Full Name: {output.fullName}</p>
              <p>Address: {output.address}</p>
              <p>City: {output.city}</p>
              <p>Province: {output.province}</p>
              <p>Postal Code: {output.postalCode}</p>
            </div>
          )}
       
        </div>   
    
    );

}

export default DataEntryForm;