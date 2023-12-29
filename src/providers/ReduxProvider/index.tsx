import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { configStore } from "store/store";

import type { IStateSchema } from "store/types/StateSchema";

interface IProps extends PropsWithChildren {
  initialState?: IStateSchema;
}

const ReduxProvider = (props: IProps) => {
  const { children, initialState } = props;

  const store = configStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
