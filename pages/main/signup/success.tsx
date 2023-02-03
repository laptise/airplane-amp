import DefaultLayout from "@/components/layouts/top";
import { FlexCol } from "@/components/sc/common";
import { FormikFormSubmitHandler } from "@/helpers/formik-provided";
import { FormikForm } from "@/helpers/formik-provided";
import { useAuth } from "@/hooks/use-auth";
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import * as Yup from "yup";

type Payload = {
  code: string;
};

const validation = Yup.object().shape({
  code: Yup.string().required(),
});

const MainTop = () => {
  const { query } = useRouter();
  const rawEmail = query["email"] as string;
  const email = decodeURIComponent(rawEmail);
  const { codeConfirm } = useAuth();
  const onSubmit: FormikFormSubmitHandler<Payload> = async ({
    values: { code },
  }) => {
    codeConfirm(email, code);
  };
  return <DefaultLayout>成功しました</DefaultLayout>;
};

export default MainTop;
