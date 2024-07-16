import React from 'react'

function Footer() {
  return (
    <footer className="">
      <div className="banner">
        <div className="title">
          <h1>EVENT's</h1>
          <p>Events & Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
          <input type='text' placeholder="E-mail"/>
          <button>Subscribe</button>
        </div>
        <p>Sign in with your email to receive news</p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
