import { ReactNode } from "react";
import "./styles.scss";

interface ILayoutContent {
  children: ReactNode;
}
const LayoutContent = ({ children }: ILayoutContent) => {
  return <div className="layout-content">{children}</div>;
};

export default LayoutContent;
