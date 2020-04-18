import React from 'react';
import '../css/Experience.css'


const Profile = (props) => {
  return (
    <div class = "body" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridGap: 20 }}>
        <div><h1>Cashier -></h1>{"\n"}<p>Walmart</p></div>
        <div><h1>Teaching Assistant -></h1>{"\n"}<p>Thompson Rivers University</p></div>
        <div><h1>Research Assistant -></h1>{"\n"}<p>Thompson Rivers University</p></div>
        <div><h1>Software Developer Co-op</h1> -> {"\n"}<p>USNR</p></div>
        <div><h1>Software Developer</h1>{"\n"}<p>Swartz Software Development</p></div>
    </div>
  );

}

export default Profile;