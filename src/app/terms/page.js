import React from 'react';
import Image from 'next/image';
import chevronleft from '@icons/icon-fi-chevron left.svg';

function TermsCondition() {
    
    return (
        <div className="container">
          <div className="row mt-4 mb-5 mx-auto">
              <div className="col-3 col-md-3 col-lg-3 custom-text-align-center">
                  <a href="/settings">
                  <Image src={chevronleft} width="24" alt="chevronleft"/>
                  </a>
              </div>
              <div className="col-6 col-md-6 col-lg-6 display-8 fw-bold custom-text-align-center">
              Terms and Conditions
              </div>
          </div>
    
          <div className="row">
            <h6>Lorem Ipsum</h6>
            <p>
            Lorem ipsum dolor sit amet consectetur. Hac nec tristique fermentum eu lorem sollicitudin posuere etiam. Felis imperdiet congue nulla arcu tellus adipiscing nulla. 
            Accumsan sed quisque in enim lacus. Quis at scelerisque sit pellentesque sed id. Ultricies proin neque purus eu lectus. Sed lacinia mauris lacus nulla ultricies 
            lacus suspendisse ac eu. Commodo urna facilisis lectus quisque sit elit.
            </p>
          </div>
          <div className="row">
            <h6>Lorem Ipsum</h6>
            <p>
            Lorem ipsum dolor sit amet consectetur. Hac nec tristique fermentum eu lorem sollicitudin posuere etiam. Felis imperdiet congue nulla arcu tellus adipiscing nulla. 
            Accumsan sed quisque in enim lacus. Quis at scelerisque sit pellentesque sed id. Ultricies proin neque purus eu lectus. Sed lacinia mauris lacus nulla ultricies 
            lacus suspendisse ac eu. Commodo urna facilisis lectus quisque sit elit.
            </p>
          </div>
          <div className="row">
            <h6>Lorem Ipsum</h6>
            <p>
            Lorem ipsum dolor sit amet consectetur. Hac nec tristique fermentum eu lorem sollicitudin posuere etiam. Felis imperdiet congue nulla arcu tellus adipiscing nulla. 
            Accumsan sed quisque in enim lacus. Quis at scelerisque sit pellentesque sed id. Ultricies proin neque purus eu lectus. Sed lacinia mauris lacus nulla ultricies 
            lacus suspendisse ac eu. Commodo urna facilisis lectus quisque sit elit.
            </p>
          </div>
          
        </div>
      );
    }
export default TermsCondition;
