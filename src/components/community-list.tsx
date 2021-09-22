import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { Badge, Grid, TextField } from "@mui/material";
import MembersList from "../components/member-list";
import { CommunityListProps } from "../types";

export default function CommunityList(props: CommunityListProps) {
  const handleSearch = (searchValue: string, communityName: string) => {
    props.handleSearch(searchValue, communityName);
  };

  return (
    <div style={{ marginTop: 16 }}>
      <Accordion
        expanded={props.expanded === `panel${props.communityName}`}
        onChange={props.accordianHandleChange(`panel${props.communityName}`)}
        square={true}
        sx={{
          backgroundColor: props.theme === "light" ? "floralwhite" : "white",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${props.communityName}-content`}
          id={`panel${props.communityName}-header`}
        >
          <Grid container>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <span>Community Name : </span> <b>{props.communityName}</b>
              <Badge
                badgeContent={props.communityData.length}
                color="info"
                style={{ marginLeft: 12 }}
                max={1000000000}
              >
                <PeopleOutlineIcon color="action" />
              </Badge>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            onChange={(event) =>
              handleSearch(event.target.value, props.communityName)
            }
            fullWidth
            id={`filled-basic${props.communityName}`}
            label="Search for people"
            variant="outlined"
          />
          <MembersList membersList={props.communityData} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
