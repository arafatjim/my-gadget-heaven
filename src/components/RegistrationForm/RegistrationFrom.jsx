import React, { Component } from 'react'

export class RegistrationFrom extends Component {
  render() {
    return (
      <div>
<form className='bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto'>
          <h2>IT Club Registration</h2>
          <div>
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" required />
          </div>
          <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
          </div>
          <div>
                    <label htmlFor="studentId">Student ID:</label>
                    <input type="text" id="studentId" name="studentId" required />
          </div>
          <div>
                    <label htmlFor="interest">Area of Interest:</label>
                    <select id="interest" name="interest" required>
                              <option value="">Select...</option>
                              <option value="web">Web Development</option>
                              <option value="ai">Artificial Intelligence</option>
                              <option value="networking">Networking</option>
                              <option value="security">Cybersecurity</option>
                              <option value="other">Other</option>
                    </select>
          </div>
          <div>
                    <label htmlFor="experience">Experience Level:</label>
                    <select id="experience" name="experience" required>
                              <option value="">Select...</option>
                              <option value="beginner">Beginner</option>
                              <option value="intermediate">Intermediate</option>
                              <option value="advanced">Advanced</option>
                    </select>
          </div>
          <div>
                    <button type="submit">Register</button>
          </div>
</form>
      </div>
    )
  }
}

export default RegistrationFrom
