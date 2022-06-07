import { styled } from '@mui/system';
import {Grid} from "@mui/material";

export const BodyBackgroundWrapper = styled(Grid)({
    backgroundColor: "rgb(40, 40, 40)",
});

export const BodyWrapper = styled(Grid)({
    display: "flex",
    height: "84vh",
    width: "80%",
    margin: "0 auto",
    backgroundColor: "lightgray",
})

export const LeftBodyWrapper = styled(Grid)({
    width: "50%",
    backgroundColor: "lightsalmon",
});

export const RightBodyWrapper = styled(Grid)({
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
});

export const CommonBodyWrapper = styled('div')({
    height: "33.3%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})