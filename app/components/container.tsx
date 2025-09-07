import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="container-px max-w-7xl mx-auto">{children}</div>;
}
