import { PropsWithChildren, ReactElement, ReactNode } from "react";

export interface IBaseProps {
  children: ReactNode | ReactElement[];
}

export interface ReactComponent<T> extends React.FC<PropsWithChildren<T>> {}
