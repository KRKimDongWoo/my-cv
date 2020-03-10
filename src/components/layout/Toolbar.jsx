import React from 'react';
import {
  AppBar,
  Toolbar as MToolbar,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Toolbar() {
  return (
    <div className="header">
      <AppBar position="static">
        <MToolbar>
          <Link to="/profile" style={{ textDecoration: 'none', color: '#fff' }}>
            <Typography variant="h6">
              Portfolio
            </Typography>
          </Link>
        </MToolbar>
      </AppBar>
    </div>
  );
}
