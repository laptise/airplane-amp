import DefaultLayout from "@/components/layouts/top";
import { FlexCol } from "@/components/sc/common";
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";

const MainTop = () => {
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
