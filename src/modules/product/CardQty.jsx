import { useState } from "react";

const CardQty = () => {
  const [qty, setQty] = useState(0);

  const handleChange = ({ target }) => {
    setQty(target.value)
  };

  return (
    <div className='d-flex'>
      <button className='btn btn-primary component_btn'>-</button>
      <input
        type='number'
        value={qty}
        className='form-control component_field-qty'
        onChange={(e) => handleChange(e)}
      />
      <button className='btn btn-primary component_btn '>+</button>
    </div>
  );
};

export default CardQty;
