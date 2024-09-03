import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import {curl} from '../Donarurl'
import { MenuItem ,InputLabel,FormControl,Select,} from '@mui/material';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function Form() {

  const [Name, setName] = useState('')
  const [Phone, setPhone] = useState('')
  const [BloodGroup, setBloodGroup] = useState('')
  const [Address, setAddress] = useState('')

  const nav=useNavigate();

  const sendata = async()=>{
    await axios.post(curl,{Name,Phone,BloodGroup,Address})
    nav('/Details')
  }

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Donar Form
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  value={Name}
                  onChange={e=>setName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="Phone"
                  label="Phone"
                  name="lastName"
                  value={Phone}
                  onChange={e=>setPhone(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel id="BloodGroupLabel">Blood Group</InputLabel>
        <Select
          labelId="BloodGroupLabel"
          id="BloodGroup"
          value={BloodGroup}
          label="Blood Group"
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <MenuItem value="A+">A+</MenuItem>
          <MenuItem value="A-">A-</MenuItem>
          <MenuItem value="B+">B+</MenuItem>
          <MenuItem value="B-">B-</MenuItem>
          {/* Add more options as needed */}
        </Select>
      </FormControl>
    </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Address"
                  label="Address"
                  name="Address"
                  value={Address}
                  onChange={e=>setAddress(e.target.value)}
                  autoComplete="Address"
                />
              </Grid>

              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={sendata}
            >
              Done
            </Button>
            {/* <Grid container justifyContent="flex-end">
            <Grid item>
            <Link component={RouterLink} to="/login" variant="body2">
                Already have an account? Sign in
            </Link>
            </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
