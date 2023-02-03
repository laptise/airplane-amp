import DefaultLayout from "@/components/layouts/top";
import { FlexCol } from "@/components/sc/common";
import { FormikFormSubmitHandler } from "@/helpers/formik-provided";
import { FormikForm } from "@/helpers/formik-provided";
import { useAuth } from "@/hooks/use-auth";
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import * as Yup from "yup";
type Payload = {
  email: string;
  password: string;
};
const validation = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const MainTop = () => {
  const { singIn } = useAuth();
  const onSubmit: FormikFormSubmitHandler<Payload> = async ({
    values: { email, password },
  }) => {
    const session = await singIn(email, password);
    console.log(session);
  };
  return (
    <DefaultLayout>
      <FormikForm<Payload>
        value={{ email: "", password: "" }}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        {({ fieldProps, formik: { submitForm, isValid, errors } }) => (
          <Stack gap={2}>
            <FlexCol>会員登録</FlexCol>
            <TextField
              label="Eメールアドレス"
              size="medium"
              error={!!errors.email}
              {...fieldProps("email")}
            />
            <TextField
              label="パスワード"
              size="medium"
              type={"password"}
              error={!!errors.password}
              {...fieldProps("password")}
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
