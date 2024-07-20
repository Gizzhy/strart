// utils
import increment, { decrement } from "../../utils/quantity";
import submit from "../../utils/submitOrder";
// images
import Alexander from "../../assets/images/Alexander.png";
import DandG from "../../assets/images/D&G.png";
import DandG1 from "../../assets/images/D&G.png";
import Tom from "../../assets/images/TomFord-shoe.png";

const DressShoe = () => {
  return (
    <>
      {/* Collections */}
      <div className="container shoe-collection">
        <h3 className="dress-shoe-header">Dress Shoe Collections </h3>
        <div className="row">
          {/* Berlutti */}
          <div className="collection-pc col-lg-3">
            <div className="collection-container">
              <img
                className="collection-shoe"
                src={Alexander}
                alt="Alexander"
              />
              <p className="shoe-name" id="berlutti-name">
                Berlutti
              </p>
              <p className="item-details" id="berlutti-details">
                Can be Won On Native
              </p>
              <div className="collection-details">
                <span className="shoe-price">
                  ₦<span id="berlutti-price">20000</span>
                </span>
                <span>Size</span>
              </div>
              <div className="user-selection">
                <span className="quantity">
                  <i
                    class="fa-solid fa-circle-minus"
                    style={{
                      marginRight: "5px",
                      cursor: "pointer",
                      fontSize: "22px",
                    }}
                    onClick={() => {
                      decrement("berlutti-quantity");
                    }}
                  ></i>{" "}
                  <span className="shoe-quantity" id="berlutti-quantity">
                    0
                  </span>{" "}
                  <i
                    class="fa-solid fa-circle-plus"
                    style={{
                      margin: "5px",
                      cursor: "pointer",
                      fontSize: "22px",
                    }}
                    onClick={() => {
                      increment("berlutti-quantity");
                    }}
                  ></i>
                </span>
                <button
                  className="add-to-bag"
                  type="button"
                  onClick={() => {
                    submit(
                      "berlutti-name",
                      "berlutti-details",
                      "berlutti-price",
                      "berlutti-quantity"
                    );
                  }}
                >
                  Add to Bag
                </button>
              </div>
            </div>
            <div></div>
          </div>
          {/* D and G */}
          <div className="collection-pc col-lg-3">
            <div className="collection-container">
              <img className="collection-shoe" src={DandG} alt="Alexander" />
              <p className="shoe-name" id="D&G-name">
                Dolce and Gabbana
              </p>
              <p className="item-details" id="D&G-details">
                Can be Won On Native
              </p>
              <div className="collection-details">
                <span className="shoe-price">
                  ₦<span id="D&G-price">10000</span>
                </span>
                <span>Size</span>
              </div>
              <div className="user-selection">
                <span className="quantity">
                  <i
                    class="fa-solid fa-circle-minus"
                    style={{
                      marginRight: "5px",
                      cursor: "pointer",
                      fontSize: "22px",
                    }}
                    onClick={() => {
                      decrement("D&G-quantity");
                    }}
                  ></i>{" "}
                  <span className="shoe-quantity" id="D&G-quantity">
                    0
                  </span>{" "}
                  <i
                    class="fa-solid fa-circle-plus"
                    style={{
                      margin: "5px",
                      cursor: "pointer",
                      fontSize: "22px",
                    }}
                    onClick={() => {
                      increment("D&G-quantity");
                    }}
                  ></i>
                </span>
                <button
                  className="add-to-bag"
                  type="button"
                  onClick={() => {
                    submit(
                      "D&G-name",
                      "D&G-details",
                      "D&G-price",
                      "D&G-quantity"
                    );
                  }}
                >
                  Add to Bag
                </button>
              </div>
            </div>
            <div></div>
          </div>
          {/* D and G 1 */}
          <div className="collection-pc col-lg-3">
            <div className="collection-container">
              <img className="collection-shoe" src={DandG1} alt="Alexander" />
              <p className="shoe-name" id="D&G1-name">
                Dolce and Gabbana
              </p>
              <p className="item-details" id="D&G1-details">
                Can be Won On Native
              </p>
              <div className="collection-details">
                <span className="shoe-price">
                  ₦<span id="D&G1-price">10000</span>
                </span>{" "}
                <span>Size</span>
              </div>
              <div className="user-selection">
                <span className="quantity">
                  <i
                    class="fa-solid fa-circle-minus"
                    style={{
                      marginRight: "5px",
                      cursor: "pointer",
                      fontSize: "22px",
                    }}
                    onClick={() => {
                      decrement("D&G1-quantity");
                    }}
                  ></i>{" "}
                  <span className="shoe-quantity" id="D&G1-quantity">
                    0
                  </span>{" "}
                  <i
                    class="fa-solid fa-circle-plus"
                    style={{
                      margin: "5px",
                      cursor: "pointer",
                      fontSize: "22px",
                    }}
                    onClick={() => {
                      increment("D&G1-quantity");
                    }}
                  ></i>
                </span>
                <button
                  className="add-to-bag"
                  type="button"
                  onClick={() => {
                    submit(
                      "D&G1-name",
                      "D&G1-details",
                      "D&G1-price",
                      "D&G1-quantity"
                    );
                  }}
                >
                  Add to Bag
                </button>
              </div>
            </div>
            <div></div>
          </div>
          {/* TomFord */}
          <div className="collection-pc col-lg-3">
            <div className="collection-container">
              <img className="collection-shoe" src={Tom} alt="Alexander" />
              <p className="shoe-name" id="Tom-name">
                TomFord
              </p>
              <p className="item-details" id="Tom-details">
                Can be Won On Native
              </p>
              <div className="collection-details">
                <span className="shoe-price">
                  ₦<span id="Tom-price">50000</span>
                </span>{" "}
                <span>Size</span>
              </div>
              <div className="user-selection">
                <span className="quantity">
                  <i
                    class="fa-solid fa-circle-minus"
                    style={{
                      marginRight: "5px",
                      cursor: "pointer",
                      fontSize: "22px",
                    }}
                    onClick={() => {
                      decrement("Tom-quantity");
                    }}
                  ></i>{" "}
                  <span className="shoe-quantity" id="Tom-quantity">
                    0
                  </span>{" "}
                  <i
                    class="fa-solid fa-circle-plus"
                    style={{
                      margin: "5px",
                      cursor: "pointer",
                      fontSize: "22px",
                    }}
                    onClick={() => {
                      increment("Tom-quantity");
                    }}
                  ></i>
                </span>
                <button
                  className="add-to-bag"
                  type="button"
                  onClick={() => {
                    submit(
                      "Tom-name",
                      "Tom-details",
                      "Tom-price",
                      "Tom-quantity"
                    );
                  }}
                >
                  Add to Bag
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DressShoe;
