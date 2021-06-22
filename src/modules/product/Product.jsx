import { useState } from "react";
import CardItem from "./CardItem";
import PropTypes from "prop-types";
import CardQty from "./CardQty";
import SlideImg from "./SlideImg";
import SelectField from "components/form/SelectField";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faTimes } from "@fortawesome/free-solid-svg-icons";
const Product = ({ item }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className='col-md-4 animate__animated animate__fadeIn'>
      <div className='component_card'>
        <div className='component_card-img-wrap'>
          {item.images?.length ? (
            <SlideImg images={item.images} mainImg={item.image} />
          ) : (
            <img src={item.image} className='card-img-top' alt={item.handle} />
          )}
          <Button
            variant='light'
            className={`component_btn-variant ${
              show ? "no-show" : ""
            } shadow-sm`}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faSlidersH} />
          </Button>
          <div
            className={`component_field-wrap ${
              !show && "no-show"
            } shadow-sm animate__animated animate__flipInX`}
          >
            <SelectField variants={item.variants} />
            <Button
              variant='danger'
              onClick={handleClick}
              className='component_btn-variant-close'
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </div>
        </div>
        <div className='component_card-body'>
          <h5 className='card-title text_header-text'>{item.title}</h5>
          <p className='component_card-price'>${item.variants[0].price}</p>
          <div className='d-flex justify-content-between pt-3 pb-2'>
            <CardQty />
            <button className='btn btn-primary component_btn'>
              Add to cart
            </button>
          </div>
          <div className='pt-3'>
            <CardItem title='More about' text={item.description} />
            <CardItem title='Objective' text={item.objective} />
            <CardItem title='Suggested to use' text={item.suggested_use} />
          </div>
        </div>
      </div>
    </div>
  );
};

Product.prototype = {
  item: PropTypes.object.isRequired,
};

export default Product;
