import PropTypes from "prop-types";

const SelectField = ({variants}) => {
  return (
    <select className='form-select component_field-select' aria-label='Default select example'>
      <option defaultValue >Select an variant</option>
        {variants.map((variant) =>(
             <option key={variant.id} value={variant.id}>{variant.title}</option>
        ))}
    </select>
  );
};

SelectField.prototype = {
    variants: PropTypes.array.isRequired
}

export default SelectField;
