import React, { ReactNode } from "react";

interface StateProps {
  isDrawerOpen: boolean;
  isRegisterDialogOpen: boolean;
}

export interface GlobalAppState extends StateProps {
  toggleDrawer?: (isOpen: boolean) => void;
  toggleRegisterDialog?: (isOpen: boolean) => void;
}

export const Context = React.createContext<GlobalAppState>({
  isDrawerOpen: false,
  isRegisterDialogOpen: false,
});

export class Provider extends React.Component {
  state: Readonly<StateProps> = { isDrawerOpen: false, isRegisterDialogOpen: false };

  toggleDrawer = (isOpen: boolean) => {
    this.setState({ isDrawerOpen: isOpen });
  };

  toggleRegisterDialog = (isOpen: boolean) => {
    this.setState({ isRegisterDialogOpen: isOpen });
  };

  render() {
    this.state;
    return (
      <Context.Provider
        value={{
          ...this.state,
          toggleDrawer: this.toggleDrawer,
          toggleRegisterDialog: this.toggleRegisterDialog,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export function getGlobalState(Component: React.ComponentType<GlobalAppState>) {
  return function (appProps: any) {
    return <Context.Consumer>{(props) => <Component {...props} {...appProps} />}</Context.Consumer>;
  };
}
