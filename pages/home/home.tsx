import * as React from "react";
import { Box } from "@mui/material";
import HeaderBar from "@/components/home/header/index";

interface IappBarProps {
  name: string;
}

const user = { name: "romeus clarens" };

const appBar: React.FunctionComponent<IappBarProps> = (props) => {
  return (
    <>
      <div>
        <Box>
          <HeaderBar {...user} />
        </Box>
      </div>
    </>
  );
};

export default appBar;
