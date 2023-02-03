import DefaultLayout from "@/components/layouts/top";
import Link from "next/link";

const MainTop = () => {
  return (
    <DefaultLayout>
      <Link href="/main/signup">会員登録する</Link>
    </DefaultLayout>
  );
};

export default MainTop;
