import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { BottomMenuNav } from "./sc";

const BottomMenu: FC<PropsWithChildren> = () => {
  return (
    <BottomMenuNav>
      <Link href={"/"}>aa</Link>
    </BottomMenuNav>
  );
};

export default BottomMenu;
