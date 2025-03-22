import React from 'react'

const Contact = () => {
  return (
    <>
    {/*   Contact Us Header */}
    <header className="contact-header">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below or contact us directly.</p>
    </header>
  
     {/* Main Section  */}
    <div className="container my-5">
      <div className="row g-4">
    
        <div className="col-md-4">
          <div className="contact-details">
            <h5>Contact Information</h5>
            <p><strong>Address:</strong> 123 Street, Islamic City</p>
            <p><strong>Email:</strong> info@SoulVerse.com</p>
            <p><strong>Phone:</strong> +1 (234) 567-890</p>
            <p><strong>Working Hours:</strong> Mon-Fri, 9AM - 6PM</p>
          </div>
        </div>
  
         {/* Contact Form  */}
        <div className="col-md-8">
          <h5 style={{color: "#6f2dbd"}} className="text-center fw-bold fs-3">Send Us a Message</h5>
          <form id="contact-form" >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        <small className="text-danger" id="error-name"></small>
  
  
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email"/> 
        <small className="text-danger" id="error-email"></small>
  
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Enter the subject"/>
        <small className="text-danger" id="error-subject"></small>
  
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Write your message here" ></textarea>
        <small className="text-danger" id="error-textarea"></small>
  
            </div>
            <button type="submit"  style={{backgroundColor:" #6f2dbd" }}  className="btn text-white submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  
    
  
    
   
    </>
  
  )
}

export default Contact