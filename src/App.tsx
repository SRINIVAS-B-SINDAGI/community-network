import React, { useEffect, useState } from "react";
import "./App.css";
import TopAppBar from "../src/components/app-bar";
import CommunityList from "../src/components/community-list";
import { Container, Switch } from "@mui/material";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../src/theme";
import { mockResponseData } from "../src/mock-data";
const StyledApp = styled.div``;
function App() {
  const [checked, setChecked] = React.useState(false);
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const [communityListResponse, setCommunityListResponse] = useState<any>({});
  const [filteredCommunityResponse, setFilteredCommunityResponse] =
    useState<any>({});

  useEffect(() => {
    fetch("https://demo.bigbeartech.in/sample-api")
      .then((response) => response.json())
      .then((data) => {
        setFilteredCommunityResponse(data);
        setCommunityListResponse(data);
      })
      .catch((err) => {
        console.log(err);
        // Purposefully Harded coded the value, was facing some issue with provided API service
        setFilteredCommunityResponse(mockResponseData);
        setCommunityListResponse(mockResponseData);
      });
  }, []);

  const handleMemberSearch = (searchValue: string, communityName: string) => {
    let filteredData = [];
    let tempCommunityData = { ...communityListResponse };
    filteredData = communityListResponse[communityName].filter((item: any) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    tempCommunityData[communityName] = filteredData;
    setFilteredCommunityResponse(tempCommunityData);
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    themeToggler();
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <TopAppBar themeMode={theme}></TopAppBar>
        <Container>
          <div
            style={{
              marginTop: 20,
              color: theme === "light" ? "#000" : "#fff",
            }}
          >
            Theme Mode : {checked ? "Dark" : "Light"}
            <Switch
              checked={checked}
              onChange={handleSwitchChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </div>
          {Object.keys(communityListResponse).map((communityData, index) => (
            <CommunityList
              theme={theme}
              expanded={expanded}
              accordianHandleChange={handleChange}
              handleSearch={handleMemberSearch}
              key={index}
              communityName={communityData}
              communityData={filteredCommunityResponse[communityData]}
            />
          ))}
        </Container>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
