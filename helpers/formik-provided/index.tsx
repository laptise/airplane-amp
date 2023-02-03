import {
  FormikContextType,
  FormikProvider,
  FormikValues,
  useFormik,
} from "formik";
import { ChangeEventHandler, useEffect } from "react";
import { HTMLAttributes, MouseEventHandler, ReactNode } from "react";

/**formikと紐付いたPropsを生成 */
namespace GenerateProps {
  /**formikと紐づくフィールドのpropsを生成 */
  export const field = <T, P extends object = {}>(
    { values, setFieldValue }: FormikContextType<T>,
    toPass = {} as P
  ) => {
    return (keyName: StringKeys<T>): GeneratedFieldProps<T> => {
      const value = values[keyName] || "";
      const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
        setFieldValue(keyName, e.target.value);
      return { value, onChange, ...toPass };
    };
  };

  /**formikと紐づくsubmit buttonのpropsを生成 */
  export const submitButton = <T,>(
    formik: FormikContextType<T>
  ): GeneratedSubmitButtonProps => {
    return {
      type: "submit",
      onClick: () => formik.submitForm(),
    };
  };
}

/**Formikが含まれてform */
export const ProvidedFormik = <T,>(props: ProvidedFormikProps<T>) => {
  const { formik, children, ...rest } = props;
  const { handleSubmit } = formik;
  const fieldProps = GenerateProps.field(formik);
  const submitButtonProps = GenerateProps.submitButton(formik);

  return (
    <FormikProvider value={formik}>
      <form {...rest} onSubmit={handleSubmit}>
        {children?.({ fieldProps, submitButtonProps })}
      </form>
    </FormikProvider>
  );
};

/**Formikが含まれたform + 中でformikContextを生成*/
export const FormikForm = <T extends FormikValues = FormikValues>(
  props: FormikFormProps<T>
) => {
  const {
    children,
    onSubmit: propsOnSubmit,
    readOnly = false,
    value,
    validationSchema,
    ...formProps
  } = props;
  const formik: FormikContextType<T> = useFormik<T>({
    initialValues: value,
    onSubmit: () => propsOnSubmit?.(formik),
    validationSchema,
  });

  useEffect(() => {
    formik.setValues(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const fieldProps = GenerateProps.field(formik, { readOnly });
  const submitButtonProps = GenerateProps.submitButton(formik);

  return (
    <FormikProvider value={formik}>
      <form {...formProps} onSubmit={formik.handleSubmit}>
        {children?.({
          fieldProps,
          submitButtonProps,
          formik,
        })}
      </form>
    </FormikProvider>
  );
};

export type GeneratedFieldProps<T> = {
  value: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
  readOnly?: boolean;
};

export type GeneratedSubmitButtonProps = {
  type: "submit";
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export type StringKeys<T> = Extract<keyof T, string>;

export type Provided<T> = {
  /**field input用event handler, valueを追加 */
  fieldProps: (keyName: StringKeys<T>) => GeneratedFieldProps<T>;
  /**submit button用 props追加 */
  submitButtonProps: GeneratedSubmitButtonProps;
};

export type ProvidedFormikProps<T> = {
  formik: FormikContextType<T>;
  children(provided: Provided<T>): ReactNode;
};

export type FormProvided<T> = Provided<T> & {
  formik: FormikContextType<T>;
};

export type FormikFormSubmitHandler<T> = (formik: FormikContextType<T>) => void;

export type FormikFormProps<T> = {
  value: T;
  onSubmit?: FormikFormSubmitHandler<T>;
  children(provided: FormProvided<T>): ReactNode;
  readOnly?: boolean;
  validationSchema?: any;
} & Omit<HTMLAttributes<HTMLFormElement>, "children" | "onSubmit">;
