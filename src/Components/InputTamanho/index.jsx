import PropTypes from "prop-types";

InputTamanho.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setpasswordSize: PropTypes.func,
};

export default function InputTamanho(props) {
  return (
    <div>
      <label htmlFor="passwordSize">Tamanho: </label>
      <input
        type="number"
        id="passwordSize"
        min={1}
        value={props.passwordSize}
        onChange={(ev) => props.setpasswordSize(+ev.target.value)}
      />
    </div>
  );
}
