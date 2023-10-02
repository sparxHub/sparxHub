// pages/blogs.js

import RootLayout from "../layout";

function BlogsPage() {
  return (
    <RootLayout title="Blog Posts" description="List of all blog posts">
      <div>
        <h1>Blog Posts</h1>
        {/* Your list of blog posts or any other content can go here */}
        <ul>
          <li>Blog Post 1</li>
          <li>Blog Post 2</li>
          <li>Blog Post 3</li>
          {/* ... */}
        </ul>
      </div>
    </RootLayout>
  );
}

export default BlogsPage;
