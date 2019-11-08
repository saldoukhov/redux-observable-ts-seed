import * as React from "react";

export interface LoginProps {
  performLogin: (user: string, password: string) => any;
}

interface LoginState {
}

export default class Login extends React.Component<LoginProps, LoginState> {

  public render() {
    return (
      <button onClick={e => this.click()}>Click</button>
    );
  }

  private click() {
    this.props.performLogin("serge","111111");
  }
}
