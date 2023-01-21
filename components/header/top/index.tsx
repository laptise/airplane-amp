import Head from "next/head";
import Link from "next/link";
import { TopHeaderDiv } from "./sc";

const TopHeader = () => {
  return (
    <>
      <Head>
        <title>
          エアプレーン - ファンとつながる！ソーシャルプラットフォーム
        </title>
      </Head>
      <TopHeaderDiv>
        <Link href={"/"}>Airplane</Link>
      </TopHeaderDiv>
    </>
  );
};

export default TopHeader;
