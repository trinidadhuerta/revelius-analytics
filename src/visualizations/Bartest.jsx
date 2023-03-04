import { Box } from "@mui/material";
import Header from "../components/Header";
import BarTest from "../components/BarTest";

const Bartest = () => {
  return (
    <Box m="20px">
      <Header title="Bar TEST" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarTest/>
      </Box>
    </Box>
  );
};

export default Bartest;