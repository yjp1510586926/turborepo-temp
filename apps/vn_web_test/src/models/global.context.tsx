import { createContext, useContext, useReducer, type Dispatch } from 'react';

interface IState {
  inputVal: string | number;
}

enum ActionTypeEnum {
  SET_INPUT_VAL = 'SET_INPUT_VAL',
}

type ActionType = keyof typeof ActionTypeEnum;

interface GlobalAction {
  type: ActionType;
  payload?: Partial<IState>;
}

interface IContext {
  state: IState;
  dispatch: Dispatch<GlobalAction>;
}

const globalInitialState: IState = {
  inputVal: '',
};

const GlobalContext = createContext<IContext | undefined>(undefined);

const GlobalReducer = (state: IState, action: GlobalAction): IState => {
  switch (action.type) {
    case ActionTypeEnum.SET_INPUT_VAL:
      return {
        ...state,
        inputVal: action.payload?.inputVal || '',
      };

    default:
      return state;
  }
};

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [state, dispatch] = useReducer(GlobalReducer, globalInitialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>{props.children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error('useAddressContext must be used within a AddressProvider');
  }

  return context;
};
