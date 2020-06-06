import React from "react"

export const containPresenter = (Container, Presenter) => {
  return props => (
    <Container
      presenter={presenterProps => <Presenter {...presenterProps} />}
      {...props}
    />
  )
}
