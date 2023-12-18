import PropTypes from "prop-types";
import Styles from "./styles.module.css";

InputTamanho.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setpasswordSize: PropTypes.func,
};

export default function InputTamanho(props) {
  return (
    <div>
      <label htmlFor="passwordSize">Tamanho: </label>
      <input
        className={Styles.InputNumber}
        type="number"
        id="passwordSize"
        min={1}
        value={props.passwordSize}
        onChange={(ev) => props.setpasswordSize(+ev.target.value)}
      />
    </div>
  );
}
