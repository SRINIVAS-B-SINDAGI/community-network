import { Card, CardHeader, Avatar, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import MembersDetails from "./member-details";

const MembersList = (props: any) => {
  const [modelProps, setModelProps] = React.useState({
    open: false,
    selectedMemeber: {},
  });

  const handleCardClick = (memberItem: any) => {
    setModelProps({
      ...modelProps,
      open: true,
      selectedMemeber: memberItem,
    });
  };

  const handleDialogAction = (booleanValue: boolean) => {
    setModelProps({
      ...modelProps,
      open: false,
      selectedMemeber: {},
    });
  };

  return (
    <React.Fragment>
      <h4 style={{ paddingLeft: 4 }}>Memebers List</h4>
      <Grid container spacing={2}>
        {props.membersList &&
          props.membersList.map((memberItem: any, index: number) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={`index-${index}`}>
              <Card
                onClick={() => handleCardClick(memberItem)}
                sx={{ cursor: "pointer" }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                      {memberItem.name.split("")[0]}
                    </Avatar>
                  }
                  title={`Name: ${memberItem.name}`}
                  // subheader={`Gender : ${memberItem.name} | Age : ${memberItem.age}`}
                />
              </Card>
            </Grid>
          ))}
      </Grid>
      {props.membersList && props.membersList.length === 0 && (
        <p style={{ textAlign: "center" }}>Memeber Doesn't Exist in the List</p>
      )}
      <React.Fragment>
        <MembersDetails
          modelProps={modelProps}
          handleDialogAction={handleDialogAction}
        />
      </React.Fragment>
    </React.Fragment>
  );
};

export default MembersList;
