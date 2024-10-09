import React from "react";
import './../css/ContactMe.css'

class ContactMe extends React.Component { // Extend from React.Component
  render() {
    return (
      <div className="py-20 bg">
          <div className="contact"> {/* Use className instead of class */}
            <div id="container">
              <h2>Contact</h2>
              <form action="#" method="post" id="contact_form" onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
                <div className="name">
                  <label htmlFor="name"></label>
                  <input type="text" placeholder="Name" name="name" id="name_input" required />
                </div>
                <div className="email">
                  <label htmlFor="email"></label>
                  <input type="email" placeholder="E-mail"  name="email" id="email_input" required />
                </div>
                <div className="subject">
                  <label htmlFor="subject"></label>
                </div>
                <div className="message">
                  <label htmlFor="message"></label>
                  <textarea name="message" placeholder="Message" id="message_input" cols="30" rows="5" required></textarea>
                </div>
                <div className="submit">
                  <input type="submit" value="Submit" id="form_button" />
                </div>
              </form>
            </div>
          </div>
      </div>
    );
  }
}

export default ContactMe;
