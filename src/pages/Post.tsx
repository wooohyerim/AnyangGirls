import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();

  return <div>Post {params.id}</div>;
};

export default Post;
