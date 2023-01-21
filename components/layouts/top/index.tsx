import TopHeader from "@/components/header/top";
import BottomMenu from "@/components/menu/bottom";
import { FC, PropsWithChildren } from "react";
import { MainContainer, OuterBodyContainer } from "./sc";

const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <OuterBodyContainer>
      <TopHeader />
      <MainContainer>{children}</MainContainer>
      <BottomMenu />
    </OuterBodyContainer>
  );
};

export default DefaultLayout;
