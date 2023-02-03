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
  passwordConfirm: string;
};
const validation = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string()
    .required()
    .equals([Yup.ref("password")]),
});

const MainTop = () => {
  const { signUp } = useAuth();
  const onSubmit: FormikFormSubmitHandler<Payload> = ({
    values: { email, password },
  }) => {
    signUp(email, password);
  };
  return (
    <DefaultLayout>
      <FormikForm<Payload>
        value={{ email: "", password: "", passwordConfirm: "" }}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        {({ fieldProps, formik: { values, submitForm, isValid, errors } }) => (
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
            <TextField
              label="パスワード確認"
              size="medium"
              type={"password"}
              error={!!errors.passwordConfirm}
              {...fieldProps("passwordConfirm")}
            />
            <Button
              disabled={!isValid}
              variant="contained"
              onClick={submitForm}
            >
              登録
            </Button>
          </Stack>
        )}
      </FormikForm>
    </DefaultLayout>
  );
};

export default MainTop;
