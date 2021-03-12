import { useMemo, } from 'react';
import { useForceUpdate, } from './hookUtils';

export function useState<T>(initiator: (() => T) | T): [T, ((nextState: T) => void) ] {
    return [] as any;
};

export const useReducer = (...args: any): any => {
    return []
};