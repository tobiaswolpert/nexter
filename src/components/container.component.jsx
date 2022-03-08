import React from "react";
import story1 from "../img/story-1.jpeg";
import story2 from "../img/story-2.jpeg";
import house1 from "../img/house-1.jpeg";
import house2 from "../img/house-2.jpeg";
import house3 from "../img/house-3.jpeg";
import house4 from "../img/house-4.jpeg";
import house5 from "../img/house-5.jpeg";
import house6 from "../img/house-6.jpeg";
import gal1 from "../img/gal-1.jpeg";
import gal2 from "../img/gal-2.jpeg";
import gal3 from "../img/gal-3.jpeg";
import gal4 from "../img/gal-4.jpeg";
import gal5 from "../img/gal-5.jpeg";
import gal6 from "../img/gal-6.jpeg";
import gal7 from "../img/gal-7.jpeg";
import gal8 from "../img/gal-8.jpeg";
import gal9 from "../img/gal-9.jpeg";
import gal10 from "../img/gal-10.jpeg";
import gal11 from "../img/gal-11.jpeg";
import gal12 from "../img/gal-12.jpeg";
import gal13 from "../img/gal-13.jpeg";
import gal14 from "../img/gal-14.jpeg";
import logo from "../img/favicon.png";
import logo1 from "../img/logo-bbc.png";
import logo2 from "../img/logo-bi.png";
import logo3 from "../img/logo-forbes.png";
import logo4 from "../img/logo-techcrunch.png";
import realtor1 from "../img/realtor-1.jpeg";
import realtor2 from "../img/realtor-2.jpeg";
import realtor3 from "../img/realtor-3.jpeg";

const Container = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <button className="nav-btn">
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </div>

      <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <h3 className="heading-3">Your own home</h3>
        <h1 className="heading-1">The ultimate personal freedom</h1>
        <button className="btn header__btn">View our properties</button>
        <header className="header__seenon-text">As seen on</header>
        <div className="header__seeonon-logos">
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="logo" />
          <img src={logo3} alt="logo" />
          <img src={logo4} alt="logo" />
        </div>
      </header>

      <div className="realtors">
        <h3 className="heading-3">Top 3 realtors</h3>
        <div className="realtors__list">
          <img className="realtors__img" src={realtor1} alt="realtor" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
            <p className="realtors__sold">245 houses sold</p>
          </div>

          <img className="realtors__img" src={realtor2} alt="realtor" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Kim Brown</h4>
            <p className="realtors__sold">212 houses sold</p>
          </div>

          <img className="realtors__img" src={realtor3} alt="realtor" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
            <p className="realtors__sold">198 houses sold</p>
          </div>
        </div>
      </div>

      <section className="features">
        <div className="feature">
          <ion-icon name="globe-outline"></ion-icon>
          <h4 className="heading-4 heading-4--dark">
            Worlds best luxury homes
          </h4>
          <p className="feature__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>

        <div className="feature">
          <ion-icon name="trophy-outline"></ion-icon>
          <h4 className="heading-4 heading-4--dark">
            Only the best properties
          </h4>
          <p className="feature__text">
            Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
            rerum sed a eligendi aut quia.
          </p>
        </div>

        <div className="feature">
          <ion-icon name="navigate-outline"></ion-icon>
          <h4 className="heading-4 heading-4--dark">
            All homes in top locations
          </h4>
          <p className="feature__text">
            Tenetur distinctio necessitatibus pariatur voluptatibus quidem
            consequatur harum.
          </p>
        </div>

        <div className="feature">
          <ion-icon name="key-outline"></ion-icon>
          <h4 className="heading-4 heading-4--dark">New homein one week</h4>
          <p className="feature__text">
            Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="feature">
          <ion-icon name="laptop-outline"></ion-icon>
          <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
          <p className="feature__text">
            Quidem consequatur harum, voluptatum mollitia quae. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </p>
        </div>
        <div className="feature">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <h4 className="heading-4 heading-4--dark">
            Securey payments on Nexter
          </h4>
          <p className="feature__text">
            Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
            quae.
          </p>
        </div>
      </section>

      <div className="story__pictures">
        <img
          className="story__img--1"
          alt="Couple with new house"
          src={story1}
        />
        <img className="story__img--2" alt="New house" src={story2} />
      </div>

      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;The best decission of our lives&rdquo;
        </h2>
        <p className="story__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className="btn">Find your own home</button>
      </div>

      <div className="homes">
        <div className="home">
          <img className="home__img" src={house1} alt="Family Home" />
          <ion-icon name="heart"></ion-icon>
          <h5 className="home__name">Beautiful Family House</h5>

          <div className="home__location">
            <ion-icon name="location-outline"></ion-icon>
            <p>USA</p>
          </div>

          <div className="home__rooms">
            <ion-icon name="person-outline"></ion-icon>
            <p>5 rooms</p>
          </div>

          <div className="home__area">
            <ion-icon name="resize-outline"></ion-icon>
            <p>
              325 m<sup>2</sup>
            </p>
          </div>

          <div className="home__price">
            <ion-icon name="key-outline"></ion-icon>
            <p>$1,200,000</p>
          </div>

          <button className="btn home__btn">contact realtor</button>
        </div>

        <div className="home">
          <img className="home__img" src={house2} alt="Glass Villa" />
          <ion-icon name="heart"></ion-icon>
          <h5 className="home__name">Modern Glass Villa</h5>

          <div className="home__location">
            <ion-icon name="location-outline"></ion-icon>
            <p>Canada</p>
          </div>

          <div className="home__rooms">
            <ion-icon name="person-outline"></ion-icon>
            <p>6 rooms</p>
          </div>

          <div className="home__area">
            <ion-icon name="resize-outline"></ion-icon>
            <p>
              450 m<sup>2</sup>
            </p>
          </div>

          <div className="home__price">
            <ion-icon name="key-outline"></ion-icon>
            <p>$2,750,000</p>
          </div>

          <button className="btn home__btn">contact realtor</button>
        </div>

        <div className="home">
          <img className="home__img" src={house3} alt="Country House" />
          <ion-icon name="heart"></ion-icon>
          <h5 className="home__name">Cozy Country House</h5>

          <div className="home__location">
            <ion-icon name="location-outline"></ion-icon>
            <p>UK</p>
          </div>

          <div className="home__rooms">
            <ion-icon name="person-outline"></ion-icon>
            <p>4 rooms</p>
          </div>

          <div className="home__area">
            <ion-icon name="resize-outline"></ion-icon>
            <p>
              250 m<sup>2</sup>
            </p>
          </div>

          <div className="home__price">
            <ion-icon name="key-outline"></ion-icon>
            <p>$850,000</p>
          </div>

          <button className="btn home__btn">contact realtor</button>
        </div>

        <div className="home">
          <img className="home__img" src={house4} alt="Rustical Villa" />
          <ion-icon name="heart"></ion-icon>
          <h5 className="home__name">Large Rustical Villa</h5>

          <div className="home__location">
            <ion-icon name="location-outline"></ion-icon>
            <p>Portugal</p>
          </div>

          <div className="home__rooms">
            <ion-icon name="person-outline"></ion-icon>
            <p>6 rooms</p>
          </div>

          <div className="home__area">
            <ion-icon name="resize-outline"></ion-icon>
            <p>
              480 m<sup>2</sup>
            </p>
          </div>

          <div className="home__price">
            <ion-icon name="key-outline"></ion-icon>
            <p>$1,590,000</p>
          </div>

          <button className="btn home__btn">contact realtor</button>
        </div>

        <div className="home">
          <img className="home__img" src={house5} alt="Palace House" />
          <ion-icon name="heart"></ion-icon>
          <h5 className="home__name">Majestic Palace House</h5>

          <div className="home__location">
            <ion-icon name="location-outline"></ion-icon>
            <p>Germany</p>
          </div>

          <div className="home__rooms">
            <ion-icon name="person-outline"></ion-icon>
            <p>18 rooms</p>
          </div>

          <div className="home__area">
            <ion-icon name="resize-outline"></ion-icon>
            <p>
              4230 m<sup>2</sup>
            </p>
          </div>

          <div className="home__price">
            <ion-icon name="key-outline"></ion-icon>
            <p>$9,500,000</p>
          </div>

          <button className="btn home__btn">contact realtor</button>
        </div>

        <div className="home">
          <img className="home__img" src={house6} alt="Family Apartment" />
          <ion-icon name="heart"></ion-icon>
          <h5 className="home__name">Modern Family Apartment</h5>

          <div className="home__location">
            <ion-icon name="location-outline"></ion-icon>
            <p>Italy</p>
          </div>

          <div className="home__rooms">
            <ion-icon name="person-outline"></ion-icon>
            <p>3 rooms</p>
          </div>

          <div className="home__area">
            <ion-icon name="resize-outline"></ion-icon>
            <p>
              180 m<sup>2</sup>
            </p>
          </div>

          <div className="home__price">
            <ion-icon name="key-outline"></ion-icon>
            <p>$600,000</p>
          </div>

          <button className="btn home__btn">contact realtor</button>
        </div>
      </div>

      <section className="gallery">
        <figure className="gallery__item gallery__item--1">
          <img src={gal1} className="gallery__img1" alt="House" />
        </figure>

        <figure className="gallery__item gallery__item--2">
          <img src={gal2} className="gallery__img2" alt="House" />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <img src={gal3} className="gallery__img3" alt="House" />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <img src={gal4} className="gallery__img4" alt="House" />
        </figure>
        <figure className="gallery__item gallery__item--5">
          <img src={gal5} className="gallery__img5" alt="House" />
        </figure>
        <figure className="gallery__item gallery__item--6">
          <img src={gal6} className="gallery__img6" alt="House" />
        </figure>
        <figure className="gallery__item gallery__item--7">
          <img src={gal7} className="gallery__img7" alt="House" />
        </figure>
        <figure className="gallery__item gallery__item--8">
          <img src={gal8} className="gallery__img8" alt="House" />
        </figure>
        <figure className="gallery__item gallery__item--9">
          <img src={gal9} className="gallery__img9" alt="House" />
        </figure>
        <figure className="gallery__item gallery__item--10">
          <img src={gal10} className="gallery__img10" alt="House" />
        </figure>
        <figure className="gallery__item gallery__item--11">
          <img src={gal11} className="gallery__img11" alt="House" />
        </figure>
        <figure className="gallery__item gallery__item--12">
          <img src={gal12} className="gallery__img12" alt="House" />
        </figure>
        <figure className="gallery__item gallery__item--13">
          <img src={gal13} className="gallery__img13" alt="House" />
        </figure>
        <figure className="gallery__item gallery__item--14">
          <img src={gal14} className="gallery__img14" alt="House" />
        </figure>
      </section>

      <footer className="footer">
        <nav className="footer__nav">
          <a href="##">Find your dream home</a>
          <a href="##">request proposal</a>
          <a href="##">download home planner</a>
          <a href="##">contact us</a>
          <a href="##">submit your property</a>
          <a href="##">come work with us</a>
        </nav>

        <p className="footer__copyright">
          &copy; Copyright 2017 by Jonas Schmedtmann.
        </p>
      </footer>
    </div>
  );
};

export default Container;
