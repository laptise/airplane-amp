import DefaultLayout from "@/components/layouts/top";
import { FlexCol } from "@/components/sc/common";
import { useAuth } from "@/hooks/use-auth";
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";

const MainTop = () => {
  const { signUp } = useAuth();
  return (
    <DefaultLayout>
      <Stack gap={2}>
        <FlexCol>ss</FlexCol>
        <TextField size="medium" />
        <Button variant="contained">aa</Button>
      </Stack>
    </DefaultLayout>
  );
};

export default MainTop;
