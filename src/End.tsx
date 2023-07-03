import { Box, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const End = () => {
  const { state } = useLocation();
  useEffect(() => {
    console.log(state, "Response Object");
  }, [state]);

  return (
    <Box sx={{ textAlign: "center", mt: 30 }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{ textAlign: "center", fontSize: { xs: 40 } }}
      >
        Thank You!
      </Typography>
      <Typography variant="h5">Survey completed.</Typography>
      <Button
        variant="contained"
        sx={{ mt: 3, fontWeight: 700 }}
        color="primary"
        size="large"
        onClick={() => (window.location.href = "/")}
      >
        Restart
      </Button>
    </Box>
  );
};

export default End;
