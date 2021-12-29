import { Avatar, Button, ButtonGroup, Tab } from "@mui/material";
import Image from "next/image";
import React, { Component } from "react";
import { ProfileContainer, ProfileContentCard } from "./style";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { MoreVert } from "@mui/icons-material";

class Profile extends Component {
  state = { tab: "1" };

  handleTabChange = (event: any, newValue: string) => {
    this.setState({ tab: newValue });
  };

  render() {
    return (
      <TabContext value={this.state.tab}>
        <ProfileContainer>
          <div className="cover">
            <Image src="/img3.png" layout="responsive" width={60} height={20} />
            <Avatar
              className="avatar"
              sx={{
                width: 150,
                height: 150,
              }}
            />
            <ButtonGroup color="secondary" size="small" variant="contained" className="btns">
              <Button>Follow</Button>
              <Button>
                <MoreVert />
              </Button>
            </ButtonGroup>
          </div>
          <TabList
            onChange={this.handleTabChange}
            className="tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Posts" value="1" />
            <Tab label="Videos" value="2" />
            <Tab label="Groups" value="3" />
          </TabList>
        </ProfileContainer>
      </TabContext>
    );
  }
}

export default Profile;
