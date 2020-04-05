import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export const GET_USERS = gql`
  query GetUsers($input: UserInput) {
    users(input: $input) {
      id
      name
      email
    }
  }
`;

const UserViewer = () => (
  <Query query={GET_USERS} variables={{ input: { id: 8, name: 'tatsuya' } }}>
    {({ loading, data }: any) =>
      !loading && (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((user: any) => (
              <p key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </p>
            ))}
          </tbody>
        </table>
      )
    }
  </Query>
);

export default UserViewer;
