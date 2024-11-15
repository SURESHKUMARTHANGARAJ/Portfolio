import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ContactForm = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Form submission handler
  const onSubmit = async (data) => {
    try {
      // Example of sending data using fetch
      const response = await fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        Swal.fire('Success', 'Message sent successfully!', 'success');
        reset(); // Reset form after successful submission
      } else {
        Swal.fire('Error', 'Failed to send message. Please try again later.', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'An error occurred while sending your message.', 'error');
    }
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <h3>Contact Form</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
            })}
            placeholder="Enter your name"
          />
          {/* Display validation errors below the name input */}
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address",
              },
            })}
            placeholder="Enter your email"
          />
          {/* Display validation errors below the email input */}
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows="5"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters long",
              },
            })}
            placeholder="Enter your message"
          ></textarea>
          {/* Display validation errors below the message input */}
          {errors.message && (
            <p className="error-message">{errors.message.message}</p>
          )}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
  );
};

export default ContactForm;
