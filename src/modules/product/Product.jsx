import SelectField from "components/form/SelectField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CardItem from "./CardItem";
import PropTypes from "prop-types";
import CardQty from "./CardQty";

const Product = ({ item }) => {
  return (
    <div className='col-md-4'>
      <div className='component_card'>
        <div className='component_card-img-wrap'>
          {/* <img src={item.image} className='card-img-top' alt={item.handle} /> */}
          <div
            id='carouselExampleInterval'
            className='carousel slide'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active' data-bs-interval='10000'>
                <img src={item.image} className='d-block w-100' alt='...' />
              </div>
              <div className='carousel-item active' data-bs-interval='2000'>
                <img src={item.image} className='d-block w-100' alt='...' />
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#carouselExampleInterval'
              data-bs-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#carouselExampleInterval'
              data-bs-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
        <div className='component_card-body'>
          <h5 className='card-title text-uppercase text_header-text'>
            {item.title}
          </h5>
          <p className='component_card-price'>${item.variants[0].price}</p>
          <div className='pt-2'>
            <SelectField variants={item.variants} />
          </div>
          <div className='d-flex justify-content-between pt-3 pb-2'>
            <CardQty />
            <button className='btn btn-primary component_btn'>
              <FontAwesomeIcon icon={faShoppingCart} size='lg' />
            </button>
          </div>
          <div className='pt-3'>
            <CardItem title='More about' text={item.description} />
            <CardItem title='Objective' text={item.objective} />
            <CardItem title='Suggested' text={item.suggested_use} />
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
