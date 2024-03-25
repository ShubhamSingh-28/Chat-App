
import { Grid, Skeleton, Stack } from "@mui/material";

export const LayoutLoader = () => {
  return (
    <Grid container sx={{ height: "calc(100vh - 4rem)" }}>
      <Grid
        item
        xs={12}
        sm={4}
        md={3}
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <Skeleton variant="rectangular" height="100%" />
      </Grid>

      <Grid item xs={12} sm={8} md={5} lg={6}>
        <Stack spacing={1} sx={{ height: "100%" }}>
          {Array.from({ length: 7 }).map((_, index) => (
            <Skeleton key={index} variant="rectangular" height="5rem" />
          ))}
        </Stack>
      </Grid>

      <Grid
        item
        xs={12}
        md={4}
        lg={3}
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Skeleton variant="rectangular" height="100%" />
      </Grid>
    </Grid>
  );
};
