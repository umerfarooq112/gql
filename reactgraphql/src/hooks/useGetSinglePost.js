import { useQuery, gql } from "@apollo/client";

const findPost = gql`
  query findPost($id: ID) {
    findPost(id: $id) {
      id
      title
      description
    }
  }
`;

export const useFindPostById = (id) => {
  const { error, data, loading } = useQuery(findPost, {
    variables: {
      id,
    },
  });
  return {
    error,
    data,
    loading,
  };
};
