import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IRootState } from '../reducer/root-reducer';

export const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;
