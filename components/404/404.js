import classes from './404.module.css';

function NotFoundContent() {
  return (
    <div className={classes.notFoundWrapper}>
      <h1>Page not Found!</h1>
      <h2>Error 404</h2>
    </div>
  );
}

export default NotFoundContent;
