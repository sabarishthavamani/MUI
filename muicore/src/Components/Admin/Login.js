import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';



import { URL } from '../URL';

const theme = createTheme();

export default function AdminSignUp() {
  const [Loginopen, setLoginopen] = useState(false)
  const [open, setOpen] = useState(false);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [check, setCheck] = useState(false);

  const nav = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendata = async () => {
    try {
      await axios.post(URL, {Email, Password, check });
      alert('Signup successful! You can now login.');
      handleClose();
      nav('/Login');
    } catch (err) {
      console.error('Error during signup:', err);
      alert('Email is Already Exist. Please Try Again');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Login
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ textAlign: 'center' }}>
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main'}}>
            <LockOutlinedIcon sx={{ textAlign: 'center' }}/>
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Login
          </Typography>         
          </DialogTitle>
          <br></br>
          <DialogContent>
            <DialogContentText>
              <Grid container spacing={2}>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <FormControlLabel
                control={<Checkbox checked={check} color="primary" />}
                onChange={() => setCheck(!check)}
                label="Remember Me"
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={sendata} color="primary" variant="contained">
              Login
            </Button>
          </DialogActions>
          {/* <DialogActions>
          <Grid container justifyContent="flex-end">
            <Grid item>
            <Link component={RouterLink} to="/AdminSignUp" variant="body2">
                Already have an account? Sign in
            </Link>
            </Grid>
            </Grid>
          </DialogActions> */}
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
