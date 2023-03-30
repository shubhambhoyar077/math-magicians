import PropTypes from 'prop-types';

function CalcDisplay({ result }) {
  return (
    <span className="calc-display">{result}</span>
  );
}

CalcDisplay.propTypes = {
  result: PropTypes.string.isRequired,
};

export default CalcDisplay;
