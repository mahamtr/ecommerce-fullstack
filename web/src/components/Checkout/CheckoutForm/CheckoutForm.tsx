import React, { FC, useContext, useRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import "./CheckoutForm.css";
import CheckoutAddress from "../CheckoutAddress/CheckoutAddress";
import CheckoutReview from "../CheckoutReview/CheckoutReview";
import CopyRight from "../../CopyRight/CopyRight";
import axios from "axios";

interface CheckoutFormProps {}
export interface DataForm {
  firstName: "";
  lastName: "";
  address1: "";
  address2: "";
  city: "";
  state: "";
  zip: "";
  country: "";
}

const StartSession = async () => {
  await axios
    .post("http://localhost:3000/Stripe/StartSession", {})
    .then((res) => (window.location = res.data.url));
};

function CheckoutForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [dataForm, setDataForm] = React.useState<DataForm>({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const steps = ["Shipping address", "Review your order", "Payment details"];

  const handleNext = () => {
    if (activeStep > 0) {
      alert(JSON.stringify(dataForm));
      // TODO save order
      StartSession();
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <CheckoutAddress dataForm={dataForm} setDataForm={setDataForm} />
        );
      case 1:
        return <CheckoutReview dataForm={dataForm} setDataForm={setDataForm} />;

      default:
        throw new Error("Unknown step");
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <CopyRight />
      </Container>
    </React.Fragment>
  );
}

export default CheckoutForm;
