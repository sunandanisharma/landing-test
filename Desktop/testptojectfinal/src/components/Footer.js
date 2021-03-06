import React from "react";
import "../App.css";

const FooterSection = () => {
  return (
    <div class="mt-5 pt-5 pb-5 footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-xs-12 about-company">
            <h2>Medical</h2>
            <p class="pr-5 text-white-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              ante mollis quam tristique convallis{" "}
            </p>
            <p>
              <a href="#">
                <i class="fa fa-facebook-square mr-1"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </p>
          </div>
          <div class="col-lg-3 col-xs-12 links">
            <h4 class="mt-lg-0 mt-sm-3">Explore</h4>
            <ul class="m-0 p-0">
              <li>
                - <a href="#">Lorem ipsum</a>
              </li>
              <li>
                - <a href="#">Nam mauris velit</a>
              </li>
              <li>
                - <a href="#">Etiam vitae mauris</a>
              </li>
              <li>
                - <a href="#">Fusce scelerisque</a>
              </li>
              <li>
                - <a href="#">Sed faucibus</a>
              </li>
              <li>
                - <a href="#">Mauris efficitur nulla</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-xs-12 location">
            <h4 class="mt-lg-0 mt-sm-4">Subscribe</h4>
          </div>
          <div>
            <h5 class="mt-lg-0 mt-sm-4">Legal</h5>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col copyright"></div>
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
