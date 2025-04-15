import ReactDOM from 'react-dom';
import classes from './error-alert.module.css';

function ErrorAlert({ message = '' }) {
  return ReactDOM.createPortal(
    <div className={classes.errorWrapper}>
      <p className={classes.errorText}>{message || 'An error occured!'}</p>
    </div>,
    document.getElementById('portal')
  );
}

export default ErrorAlert;
