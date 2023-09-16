import { Box, Grid, Link, Typography } from "@mui/material";
import CopyRight from "./CopyRight/CopyRight";

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "primary.main", p: 6 }} component="footer">
      <Grid container spacing={32}>
        {footers.map((footer) => (
          <Grid item xs key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            {footer.description.map((item) => (
              <Typography key={item} variant="subtitle1" color="textSecondary">
                {item}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <CopyRight />
    </Box>
  );
};

export default Footer;
