const Post = ({ params }) => {
  return (
    <div>
      <h1>Post</h1>
      <p>Slug: {params.slug && params.slug}</p>
      <p>{console.log(process.env.MY_TOKEN)}</p>
    </div>
  );
};
export default Post;
