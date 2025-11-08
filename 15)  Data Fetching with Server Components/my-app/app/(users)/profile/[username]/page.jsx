// const SingleProfile = async (props) => {
//   console.log(props)
//   const user = await props.params;


//   //   console.log(user);

//   return <h1>user = {user.username}</h1>;
// };

// export default SingleProfile;
'use client';
import { use } from "react";
const SingleProfile = (props) => {
  console.log(props)
  const user = use(props.params);

  //   console.log(user);

  return <h1>user = {user.username}</h1>;
};

export default SingleProfile;