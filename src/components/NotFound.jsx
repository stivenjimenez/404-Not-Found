import React from 'react';

const NotFound = () => {
  return(
    <div>
      <span class="logo">404 NOT FOUND</span>
      <div class="container">
        <div class="scarecrow__container">
          <img class="image__scarecrow" src="./Scarecrow.png" alt="scarecrow" />
        </div>
        <div class="content__container">
          <h1>I have bad news <br />for you</h1>
          <p>
            The page you are looking <br />
            for might be removed or is<br />
            temporarily unavailable
          </p>
          <a class="button" href="">BACK TO HOMEPAGE</a>
        </div>
      </div>
      <div class="name">
        <span>Stiven Jiménez @ DevChallenges.io </span>
      </div>
    </div>
  )
}

export default NotFound