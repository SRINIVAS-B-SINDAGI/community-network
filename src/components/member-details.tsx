import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";

const MembersDetails = (props: any) => {
  const hardcodedImageUrls = [
    "https://st.depositphotos.com/1224365/2498/i/950/depositphotos_24980299-stock-photo-portrait-of-a-normal-man.jpg",
    "https://us.123rf.com/450wm/sevendeman/sevendeman1909/sevendeman190900066/131062574-normal-straight-face-portrait-of-asian-man-in-blue-t-shirt-on-grey-background-.jpg?ver=6",
    "https://m.economictimes.com/thumb/msid-76321229,width-1200,height-900,resizemode-4,imgsize-128605/untitled-5.jpg",
  ];

  const handleClose = () => {
    props.handleDialogAction(false);
  };

  return (
    <div>
      <Dialog
        open={props.modelProps.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <b>
            <span>Community Name : </span>
            {props.modelProps.selectedMemeber.name}
          </b>
        </DialogTitle>
        <DialogContent>
          <span> Profile Photos</span>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {Object.keys(props.modelProps.selectedMemeber).length > 0 &&
              props.modelProps.selectedMemeber.photos.map(
                (imageUrl: string, index: number) => (
                  <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                    <img
                      height="140px"
                      width="140px"
                      src={
                        imageUrl.includes("htt")
                          ? imageUrl
                          : hardcodedImageUrls[index]
                      }
                      alt={`person-${index}`}
                    />
                  </Grid>
                )
              )}
          </Grid>
          <p>Name : {props.modelProps.selectedMemeber.name}</p>
          <p>Age : {props.modelProps.selectedMemeber.age}</p>
          <p>Gender : {props.modelProps.selectedMemeber.gender}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MembersDetails;
