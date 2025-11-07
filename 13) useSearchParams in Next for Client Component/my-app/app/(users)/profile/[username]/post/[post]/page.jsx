const SingleProfilePost = async (props) => {
  const user = await props.params;
    console.log(user);

  return (
    <h1>
      user : {user.username}, PostId : {user.post}
    </h1>
  );
};

export default SingleProfilePost;