import React from 'react';


function HeroSection() {
  return (
    <div>
      <div className="container">
        <div className="HeroSection">
          SHAPING TECHNOLOGY
          FOR THE FUTURE
        </div>
        <div className="caption">
          <p>Growth. Innovation. Leadership.</p>
          <div className="btn">
            <a href='/contact'>
              Let's Talk
              <div className="svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg>
              </div>
            </a>
          </div>
         
        </div>

      </div>
    </div>
  )
}

export default HeroSection;