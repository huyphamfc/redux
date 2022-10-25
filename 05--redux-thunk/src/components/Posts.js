import { useSelector } from 'react-redux';

function Posts() {
  const state = useSelector(state => state.fetchData);
  const { status } = state;
  let { posts } = state;
  posts = posts.map(post => <li key={Math.random()}>{post.title}</li>);

  return (
    <div>
      <p>{status}</p>
      <ul>{posts}</ul>
    </div>
  );
}

export default Posts;
