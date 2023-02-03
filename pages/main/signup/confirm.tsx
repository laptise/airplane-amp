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
  const { query, push } = useRouter();
  const rawEmail = query["email"] as string;
  const email = decodeURIComponent(rawEmail);
  const { codeConfirm } = useAuth();
  const onSubmit: FormikFormSubmitHandler<Payload> = async ({
    values: { code },
  }) => {
    await codeConfirm(email, code);
    push("/signup/success");
  };
  return (
    <DefaultLayout>
      <FormikForm<Payload>
        value={{ code: "" }}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        {({ fieldProps, formik: { submitForm, isValid, errors } }) => (
          <Stack gap={2}>
            <FlexCol>会員登録</FlexCol>
            <TextField
              label="コード"
              size="medium"
              error={!!errors.code}
              {...fieldProps("code")}
            />
            <Button
              disabled={!isValid}
              variant="contained"
              onClick={submitForm}
            >
              ログイン
            </Button>
          </Stack>
        )}
      </FormikForm>
    </DefaultLayout>
  );
};

export default MainTop;
