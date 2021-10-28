import { useContext } from 'react';
import { Context } from "./ContextProvider";

export default function useContx() {
    const contextValue = useContext(Context);
    return contextValue;
};

