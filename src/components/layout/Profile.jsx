import React from 'react';
import {
  Typography,
  Grid,
  CardContent,
  Card,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Profile = () => (
  <Card elevation={3}>
    <CardContent>
      <Typography variant="h3"> Dongwoo Kim </Typography>
      <Grid container>
        <Grid item>
          <a href="https://www.github.com/krkimdongwoo" style={{ color: 'black' }}>
            <GitHubIcon />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.facebook.com/mandongwoo" style={{ color: '#4267b2' }}>
            <FacebookIcon />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.instagram.com/marcus.dwk/" style={{ color: 'red' }}>
            <InstagramIcon />
          </a>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
          <EmailIcon />
        </Grid>
        <Grid item>
          <Typography variant="body1"> dhsodhao52@snu.ac.kr </Typography>
        </Grid>
      </Grid>
      <Typography variant="h6">
        Undergraduate in dept. of Computer science & engineering,
        Seoul National University
      </Typography>
    </CardContent>
  </Card>
);

export default Profile;
