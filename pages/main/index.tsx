import DefaultLayout from "@/components/layouts/top";
import { FlexCol } from "@/components/sc/common";
import { useAuth } from "@/hooks/use-auth";
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const MainTop = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  return (
    <DefaultLayout>
      <Stack gap={2}>
        <FlexCol>ss</FlexCol>
        <TextField size="medium" onChange={(e) => setEmail(e.target.value)} />
        <TextField
          size="medium"
          type={"password"}
          onChange={(e) => setPw(e.target.value)}
        />
        <Button variant="contained" onClick={() => signUp(email, pw)}>
          aa
        </Button>
      </Stack>
    </DefaultLayout>
  );
};

export default MainTop;
