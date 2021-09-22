import { Box, AppBar, Toolbar, Typography } from "@mui/material";

export default function TopAppBar(props: any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: props.themeMode === "light" ? "#2E3B55" : "#000" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Community Network
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
