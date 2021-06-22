import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

const CardItem = ({title, text }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className='component_list-card-item' onClick={handleOpen}>
      <h6><FontAwesomeIcon icon={faCheck} /> {title}</h6>
      <div className={`animate__animated animate__fadeIn ${open ? 'expand' : 'no-expand'}`}>
        <p className='card-text'>
         {text ? text : "Not information to show at this time!"}
        </p>
      </div>
    </div>
  );
};

CardItem.prototype = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default CardItem;
