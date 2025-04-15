import { useContext } from 'react';
import Head from 'next/head';
import BlogDetail from '../../components/blogs/blog-detail';
import { getAllBlogs, getBlogById } from '../../helper/api-helper';
import UiContext from '../../store/ui-context';

function BlogDetailPage(props) {
  const { selectedBlog, error } = props;
  const uiCtx = useContext(UiContext);

  if (error) {
    uiCtx.setError(error);
    return;
  }

  return (
    <div>
      <Head>
        <title>{selectedBlog.title}</title>
        <meta name="description" content={selectedBlog.content} />
      </Head>
      <BlogDetail blog={selectedBlog} />
    </div>
  );
}

export async function getStaticProps(context) {
  const blogId = context.params.blogId;

  try {
    const blog = await getBlogById(blogId);

    return {
      props: {
        selectedBlog: blog,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        selectedBlog: [],
        error: error.message || 'Error with fetch blog by id',
      },
    };
  }
}

export async function getStaticPaths() {
  try {
    const allblog = await getAllBlogs();

    const paths = allblog.map((blog) => ({
      params: { blogId: blog.id.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log('Error', err);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export default BlogDetailPage;
