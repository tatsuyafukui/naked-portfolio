import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from 'reactstrap';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      author
      body
    }
  }
`;

const rowStyles: any = (post: any, canEdit: any) =>
  canEdit(post) ? { cursor: 'pointer', fontWeight: 'bold' } : {};

const PostViewer = ({ canEdit, onEdit }: any) => (
  <Query query={GET_POSTS}>
    {({ loading, data }: any) =>
      !loading && (
        <Table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.posts.map((post: any) => (
              <tr
                key={post.id}
                style={rowStyles(post, canEdit)}
                onClick={() => canEdit(post) && onEdit(post)}
              >
                <td>{post.author}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )
    }
  </Query>
);

export default PostViewer;
