import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CardQty = () => {
  const [qty, setQty] = useState(0);

  const handleChange = ({ target }) => {
    setQty(target.value)
  };

  return (
    <div className='d-flex'>
      <button className='btn btn-primary component_btn'>
      <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        type='number'
        value={qty}
        className='form-control component_field-qty'
        onChange={(e) => handleChange(e)}
      />
      <button className='btn btn-primary component_btn '>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default CardQty;
