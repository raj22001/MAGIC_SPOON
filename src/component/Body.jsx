import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { useState } from "react";
import "./body.css"
import { cardData } from "../data/data";

const Body = () => {
  

  const [productArrLength, setProductArrArrLength] = useState(4);
  const [productImage, setProductImage] = useState([]);
  const addProduct = (image , id) => {
    if (productImage.length === productArrLength) return;
    setProductImage((prev) => [...prev, { image, id , quantity: 1 }]);
  };

  const addQuantity = (image , id) => {
    if (productImage.length === productArrLength) return;

    const existingProduct = productImage.find((item) => item.image === image);

    if (existingProduct) {
      const newProductImage = productImage.map((item) =>
        item.image === image ? { ...item, quantity: item.quantity + 1 } : item
      );
      setProductImage(newProductImage);
      setProductImage((prev) => [...prev, { image, id , quantity: 1 }]);
    } else {
      setProductImage((prev) => [...prev, { image, quantity: 1 }]);
    }
  };

  const subQuantity = (image) => {
    const existingProduct = productImage.find((item) => item.image === image);

    if (existingProduct) {
      const newProductImage = productImage.map((item) =>
        item.image === image ? { ...item, quantity: item.quantity - 1 } : item
      );

      const updatedProductImage = newProductImage.filter(
        (item) => item.quantity > 0
      );

      setProductImage(updatedProductImage);
    }
  };

  return (
    <div className="container">
      <div className="box-container">
        {cardData.map((data, index) => (
          <div className="card" key={index}>
            <div className="image-container">
              <img
                src={data.image}
                alt={data.title}
                onMouseOver={(e) => (e.target.src = data.hoverImage)}
                onMouseOut={(e) => (e.target.src = data.image)}
              />
            </div>
            <p className="card-title">{data.title}</p>
            {productImage.findIndex((item) => item.image === data.image) ===
            -1 ? (
              <button
                className={`btn ${
                  productArrLength === productImage.length ? "btn-disabled" : ""
                }`}
                onClick={() => addProduct(data.image , data.id)}
              >
                Add
              </button>
            ) : (
              <div className="btn btn-product-quantity">
                <IoMdAdd onClick={() => addQuantity(data.image)} />
                <p>
                  {productImage.find((item) => item.image === data.image)
                    ?.quantity || 0}
                </p>
                <RiSubtractFill onClick={() => subQuantity(data.image)} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="cart-container">
        <div className="selected-box-container">
          <div className="empty-box-image">
            <img
              src={
                productArrLength === 4
                  ? "https://magicspoon.imgix.net/t/534/assets/MS_BYO_background.svg?v=163569969682011716421695836136&amp;auto=format,compress"
                  : "https://magicspoon.com/cdn/shop/t/534/assets/MS_BYO_6PACK_background.svg?v=85441753105695147711695836135"
              }
              alt="empty box image"
            />
          </div>
          <div className="checkimage">
            <h1>Product List here </h1>
          {productImage.flatMap((product, idx) =>
            Array.from({ length: product.quantity }, (_, i) => (
              <div
              key={`${idx}-${i}`}
              className={`selected-${productArrLength}-image image-${productArrLength}-${
                idx + 1
              }`}
              >
                <img src={product.image} alt={`Product ${idx + 1}`} />
                <p>{`Quantity: ${product.quantity}`}</p>
              </div>
            ))
            )}
            </div>
        </div>
        <div className="cart-form-container">
          <h1 className="hide-h1-mg">build your own <span className="hide-sm">box</span></h1>
          <div className="btn-group">
            <p
              className={`btn-group-btn ${
                productArrLength === 4 ? "btn-bg" : ""
              }`}
              onClick={() => {
                if (productArrLength > 4) {
                  setProductImage((prev) => prev.slice(0, 4));
                }
                setProductArrArrLength(4);
              }}
            >
              4 Packs
            </p>
            <p
              className={`btn-group-btn ${
                productArrLength === 6 ? "btn-bg" : ""
              }`}
              onClick={() => setProductArrArrLength(6)}
            >
              6 Packs
            </p>
          </div>
          <div className="product-info">
            <div className="review">
              <FaStar fontSize={30} color="#3f0791" />
              <FaStar fontSize={30} color="#3f0791" />
              <FaStar fontSize={30} color="#3f0791" />
              <FaStar fontSize={30} color="#3f0791" />
              <CiStar fontSize={30} color="#3f0791" />
              <span>23423 reviews</span>
            </div>
            <div className="price-box">
              <p className="price-title">$ 39</p>
            </div>

            

            <div className="sm-bottom">

            {
              productImage.some((item) => item.id === 3) ? (
                <div className="subscription" >
                    <p>Subscription not available for Limited Edition flavors</p>
                  </div>
                ) : (
                  <div className="subscription">
                    <input type="checkbox" name="subscription" id="subscribe" />
                    <label htmlFor="subscribe"> SUBSCRIBE & SAVE (25%)</label>
                  </div>
                )
              }
            {/* <div className="cart-btn"> */}
            <div className="check">
            <button
              className={`cart-btn btn-full ${
                productArrLength - productImage.length === 0
                ? "btn-bg"
                : "btn-border"
              } `}
              >
              {productArrLength - productImage.length === 0
                ? "Add to cart"
                : `Add ${productArrLength - productImage.length} more items`}
            </button>
                </div>
              </div>
            <p className="info">
              Try risk free, 100% gauranteed. see term of use.
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
// https://magicspoon.com/cdn/shop/t/534/assets/MS_BYO_6PACK_background.svg?v=85441753105695147711695836135
export default Body;