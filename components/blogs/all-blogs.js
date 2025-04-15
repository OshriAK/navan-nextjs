import classes from './all-blogs.module.css';
import BlogItem from './blog-item';

function AllBlogs(props) {
  const { allBlogs } = props;

  return (
    <section className={classes.allBlogs}>
      <h1 className={classes.title}>All Blogs</h1>
      <ul>
        {allBlogs.map((blog) => (
          <BlogItem key={blog.slug} blog={blog} />
        ))}
      </ul>
    </section>
  );
}

export default AllBlogs;
