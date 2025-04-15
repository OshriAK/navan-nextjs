import Image from 'next/image';
import { formatedDateHandler } from '../../helper/util';
import classes from './blog-detail.module.css';

function BlogDetail(props) {
  const { blog } = props;

  const formatedDate = formatedDateHandler(blog.createdAt);

  return (
    <div className={classes.blogDetailWrapper}>
      <h1>{blog.category}</h1>
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <Image src={blog.thumbnail} alt={blog.title} width={400} height={400} />
      <time className={classes.time}>{formatedDate}</time>
    </div>
  );
}

export default BlogDetail;
