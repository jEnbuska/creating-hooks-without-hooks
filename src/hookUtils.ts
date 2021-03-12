import { useReducer as useReactReducer, } from 'react';

export const useForceUpdate = () => {
    const [ _, forceUpdate, ] =  useReactReducer<any>((prev: any) => prev + 1, 0);
    return forceUpdate();
};
