import classes from './home-page-content.module.css';

function HomePageContent() {
  return (
    <section className={classes.mainSection}>
      <div className={classes.innerSectionWrapper}>
        <h1>Hi, i'm Oshri</h1>
        <p>This app was built with Next.js for NAVAN Company.</p>
      </div>
    </section>
  );
}

export default HomePageContent;
