import React from "react";
import story1 from "../img/story-1.jpeg";
import story2 from "../img/story-2.jpeg";
import house1 from "../img/house-1.jpeg";
import house2 from "../img/house-2.jpeg";
import house3 from "../img/house-3.jpeg";
import house4 from "../img/house-4.jpeg";
import house5 from "../img/house-5.jpeg";
import house6 from "../img/house-6.jpeg";

const Container = () => {
  return (
    <div className="container">
      <div className="sidebar">Sidebar</div>

      <header className="header">Header</header>

      <div className="realtors">Top 3 realtors</div>

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

      <section className="gallery">Gallery</section>

      <footer className="footer">footer</footer>
    </div>
  );
};

export default Container;
