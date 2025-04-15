import { useContext, useState } from 'react';
import AllBlogs from '../../components/blogs/all-blogs';
import BlogsSearch from '../../components/blogs/blogs-search';
import { getAllBlogs } from '../../helper/api-helper';
import Head from 'next/head';
import UiContext from '../../store/ui-context';

function AllBlogsPage(props) {
  const { blogs, error } = props;

  const uiCtx = useContext(UiContext);

  if (error) {
    uiCtx.setError(error);
    return;
  }

  const [blogsToShow, setBlogsToShow] = useState(blogs);

  function onSearchHandler(search) {
    const filteredBlogs = blogs.filter((blog) => {
      const searchTerm = search.toLowerCase();

      return (
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.category.toLowerCase().includes(searchTerm)
      );
    });

    setBlogsToShow(filteredBlogs);
  }

  return (
    <div>
      <Head>
        <title>Blogs Application</title>
        <meta
          name="description"
          content="Find a lot of greats blogs that can help you..."
        />
      </Head>
      <BlogsSearch onSearchHandler={onSearchHandler} />
      <AllBlogs allBlogs={blogsToShow} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const allBlogs = await getAllBlogs();

    return {
      props: {
        blogs: allBlogs,
        error: null,
      },
      revalidate: 600,
    };
  } catch (error) {
    return {
      props: {
        blogs: [],
        error: error.message || 'error with fetch all blogs',
      },
      revalidate: 600,
    };
  }
}

export default AllBlogsPage;
