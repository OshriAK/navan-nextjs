import Image from 'next/image';
import classes from './blog-item.module.css';
import Link from 'next/link';
import { formatedDateHandler } from '../../helper/util';

function BlogItem(props) {
  const { blog } = props;

  const formatedDate = formatedDateHandler(blog.createdAt);

  return (
    <li className={classes.blogWrapper}>
      <Link href={`/blog/${blog.id}`} className={classes.link}>
        <div className={classes.blogItem}>
          <h1>{blog.category}</h1>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            width={200}
            height={100}
            fetchpriority="high"
          />
          <time className={classes.time}>{formatedDate}</time>
        </div>
      </Link>
    </li>
  );
}

export default BlogItem;
