// const SingleProfile = async (props) => {
//   console.log(props)
//   const user = await props.params;

import { use } from "react";

//   //   console.log(user);

//   return <h1>user = {user.username}</h1>;
// };

// export default SingleProfile;
const SingleProfile = (props) => {
  console.log(props)
  const user = use(props.params);

  //   console.log(user);

  return <h1>user = {user.username}</h1>;
};

export default SingleProfile;