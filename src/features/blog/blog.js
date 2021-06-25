import React from 'react';
import postList from './post-list';

const Blog = () => {
  return (
    <section className="p-6 grid gap-4">
      {postList &&
        postList.map(post => {
          return (
            <article key={post.id} className="border-2 p-2">
              <h6 className="text-2xl pb-2">{post.title}</h6>
              <p className="text-l">{post.body}</p>
            </article>
          );
        })}
    </section>
  );
};

export default Blog;
