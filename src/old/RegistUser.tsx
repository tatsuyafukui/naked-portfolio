import React, { useState } from 'react';
import gql from 'graphql-tag';

import { client } from './apollo';
import { GET_POSTS } from './PostViewer';

const SUBMIT_USER = gql`
  mutation SubmitUser($input: UserInput!) {
    submitUser(input: $input) {
      name
    }
  }
`;

const RegisterUser = () => {
  const [name, setName] = useState('react test');

  return (
    <form
      onSubmit={async event => {
        event.preventDefault();
        const input = { name };

        const user = await client.mutate({
          variables: { input },
          mutation: SUBMIT_USER,
          refetchQueries: () => [{ query: GET_POSTS }],
        });

        if (user) {
          console.log(user);
        } else {
          console.log('error');
        }
      }}
    >
      <input value={name} />
      <button type={'submit'}>submit button</button>
    </form>
  );
};

export default RegisterUser;
