import { Box, Button, Typography } from "@mui/material";

const Welcome = () => {
  return (
    <Box
      sx={{
        // display: "flex",
        // flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        mt: { xs: 10, sm: 40, md: 40, lg: 40 },
      }}
    >
      <Typography
        // variant="h3"
        //component="h1"
        sx={{ fontSize: { xs: 35 }, fontWeight: 500 }}
      >
        Welcome to the Survey App
      </Typography>
      <Typography variant="body1">
        This is the introduction and consent text.
      </Typography>
      <Typography variant="body1" sx={{ margin: { xs: ".3rem" } }}>
        You are invited to participate in a study titled "Generative AI and
        Tangible Products: Human-AI Design of 3D-printed lamps".
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 3 }}
        color="success"
        size="large"
        onClick={() => (window.location.href = "/form")}
      >
        Agree and Begin
      </Button>
    </Box>
  );
};

export default Welcome;
