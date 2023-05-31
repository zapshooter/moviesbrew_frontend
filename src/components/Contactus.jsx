import React from 'react';
import { Link} from 'react-router-dom';

function ContactUsLink() {
  return (
    <div>
      <p className='text-white my-3 align-middle text-center'>If you have any questions, please  
      
      <Link to="/Contactpage">
      <button className='bg-red-600 px-2 py-2 rounded cursor-pointer text-white'>
              Contact Us
            </button>
      
      </Link>
      </p>
    </div>
  );
}

export default ContactUsLink;