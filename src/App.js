import React from 'react';
import logo from './logo.png';
import logo2 from './logo2.png'

function App() {
  return (
    <div className="container center">
        <nav className="menu">
            <h1 className="menu__logo" 
            style={{
              backgroundImage: 'url(' + logo + ')'
            }}>Time Logo</h1>

            <div className="menu__right">
                <ul className="menu__list">
                    <li className="menu__list-item"><a class="menu__link menu__link--active" href="#">Home</a></li>
                    <li className="menu__list-item"><a class="menu__link" href="#">About</a></li>
                    <li className="menu__list-item"><a class="menu__link" href="#">Portfolio</a></li>
                    <li className="menu__list-item"><a class="menu__link" href="#">Contact</a></li>
                </ul>
                <form className="menu__search-form hide" method="POST">
                    <input className="menu__search-input" placeholder="Type and hit enter" />
                </form>
            </div>
        </nav>
    </div>
  );
}

export default App;
