import React from 'react'
import "../component/Test.css";

function Test() {
  return (
    <div className="ag-offer-block">
    <div className="ag-format-container">
      <ul className="ag-offer_list">
        <li className="ag-offer_item">
          <div className="ag-offer_visible-item">
            <div className="ag-offer_img-box">
              {/* <img src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-1.svg" className="ag-offer_img" alt="" /> */}
            </div>
            <div className="ag-offer_title">
              Lorem ipsum
            </div>
          </div>
          <div className="ag-offer_hidden-item">
            <p className="ag-offer_text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
        </li>
      </ul>
      </div>
    </div>
  ) }

export default Test