import { useQuery, gql } from "@apollo/client";

const getAllPostsData = gql`
  query {
    getAllPosts {
      id
      title
      description
    }
  }
`;

export const useGetAllPosts = () => {
  const { error, data, loading } = useQuery(getAllPostsData);
  return {
    error,
    data,
    loading,
  };
};

// const findPost = gql`
//   query {
//     findPost(id: "620105c5581d6b0375e711df") {
//       id
//       title
//       description
//     }
//   }
// `;

// const createPost = gql`
//   mutation {
//     createPosts(
//       title: "I am react title"
//       description: "I am react description"
//     ) {
//       title
//       description
//     }
//   }
// `;
