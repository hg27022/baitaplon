import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Popup(props) {

    const { openPopup, title, children, setOpenPopup } = props;

    return (
        <Dialog
            open={openPopup}
            TransitionComponent={Transition}
            keepMounted
            maxWidth="sm"
            onClose={() => setOpenPopup(false)}
        >
            <DialogTitle>
                <div>
                    <Typography variant="h4" component="div">
                        {title}
                    </Typography>
                </div>
            </DialogTitle>
            <DialogContent dividers={true} space="true">
                {children()}
            </DialogContent>
            <DialogActions>
                {/* <Button onClick={() => setOpenPopup(false)}>Disagree</Button> */}
                {/* <Button onClick={() => setOpenPopup(false)}>Agree</Button> */}
            </DialogActions>
        </Dialog>
    )
}

export default Popup;

