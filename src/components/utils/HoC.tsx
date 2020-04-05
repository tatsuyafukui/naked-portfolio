import React, { FC } from 'react';

export const containPresenter = (Container: FC, Presenter: FC) => {
  return (props: any) => (
    <Container
      presenter={(presenterProps: any) => <Presenter {...presenterProps} />}
      {...props}
    />
  );
};
