import React from "react";

type PageContentWrapProps = {
  children: React.ReactNode;
};

export default function PageContentWrap({ children }: PageContentWrapProps) {
  return <main className="pt-[200px]">{children}</main>;
}
