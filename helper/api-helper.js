const apiUrl = 'https://67e9107ebdcaa2b7f5b8781a.mockapi.io/api';

export async function getAllBlogs() {
  let data = [];

  try {
    const response = await fetch(`${apiUrl}/blog`);

    if (!response.ok) {
      throw new Error('Somthing went wrong!');
    }
    data = await response.json();
  } catch (error) {
    throw new Error(error.message || 'Somthing went wrong!');
  }

  return data;
}

export async function getBlogById(blogId) {
  let data;

  try {
    const response = await fetch(`${apiUrl}/blog/${blogId}`);

    if (!response.ok) {
      throw new Error('Somthing went wrong!');
    }

    data = await response.json();
  } catch (error) {
    throw new Error(error.message || 'Somthing went wrong!');
  }

  return data;
}
