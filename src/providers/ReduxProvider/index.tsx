import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { configStore } from "store/store";

import type { StateSchema } from "store/types/StateSchema";

interface ReduxProviderProps extends PropsWithChildren {
  initialState?: StateSchema;
}

const ReduxProvider = (props: ReduxProviderProps) => {
  const { children, initialState } = props;

  const store = configStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
