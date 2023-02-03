import DefaultLayout from "@/components/layouts/top";
import { GetServerSideProps } from "next";

export default function Index() {
  return <DefaultLayout>OIOI</DefaultLayout>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return { redirect: { destination: "/main", permanent: false } };
};
