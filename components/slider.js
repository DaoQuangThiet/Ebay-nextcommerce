import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Banner_1 from '../assets/img/banner1.png';
import Banner_2 from '../assets/img/banner2.png';
import Banner_3 from '../assets/img/banner3.png';


// makestyle
import { makeStyles } from "@material-ui/core";

const useStyle_sliderHome = makeStyles({
  slider_images: {
    width: '100%',
    '@media(min-width:992px)': {
      minHeight: '650px',
    },
    '@media(max-width:991px)': {
      minHeight: '550px',
      objectFit: 'cover',
    },
    '@media(max-width:575px)': {
      minHeight: '400px',
      objectFit: 'cover',
    },
  },
  dotSlider: {
    padding: '0px',
    justifyContent: 'center',
    marginTop: '-30px',
    zIndex: 10,
    position: 'relative',
    background: 'transparent',
  }
});


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: Banner_1.src
  },
  {

    imgPath: Banner_2.src
  },
  {

    imgPath: Banner_3.src

  }
];

function SwipeableTextMobileStepper() {
  const classes = useStyle_sliderHome();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box classes={classes.sliderBox}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box className={classes.slider_images}
                component="img"
                src={step.imgPath}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper className={classes.dotSlider}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
