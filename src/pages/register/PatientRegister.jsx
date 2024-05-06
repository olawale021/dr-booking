import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/footer';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Radio } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image01 from './image01.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const defaultTheme = createTheme();

function PatientRegister() {
    const [selectedGender, setSelectedGender] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            
            phoneNumber: event.target.phoneNumber.value,
            password: event.target.password.value,
            
            address: {
                street: event.target['address.street'].value,
                city: event.target['address.city'].value,
                state: event.target['address.state'].value,
                postcode: event.target['address.postcode'].value
            }
        };
        try {
            console.log(formData);
            const response = await axios.post('/patient/patient_register', formData);
            console.log(response.data); // Log the response from the backend
            
        } catch (error) {
            console.error('Error:', error);
            setAlertMsg(error.response.data.msg);
            setShowAlert(true);
        }
    };

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    return (
        <>
            <Header />
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: '80vh', paddingRight: '10vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={2}
                        md={6}
                        sx={{
                            backgroundImage: `url(${Image01})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: '40%',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5}>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: '#0F82FD' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            autoComplete="given-name"
                                            name="firstName"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label="First Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="lastName"
                                            label="Last Name"
                                            name="lastName"
                                            autoComplete="family-name"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="phoneNumber"
                                            label="Phone Number"
                                            name="phoneNumber"
                                            autoComplete="phoneNumber"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DemoContainer components={['DatePicker']}>
                                                <DatePicker label="Date of Birth" />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    checked={selectedGender === 'male'}
                                                    onChange={handleGenderChange}
                                                    value="male"
                    
                                                    inputProps={{ 'aria-label': 'male' }}
                                                />
                                            }
                                            label="Male"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Radio
                                                    checked={selectedGender === 'female'}
                                                    onChange={handleGenderChange}
                                                    value="female"
                                                    
                                                    inputProps={{ 'aria-label': 'female' }}
                                                />
                                            }
                                            label="Female"
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
                                            autoComplete="new-password"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="address.street"
                                            label="Address"
                                            name="address.street"
                                            autoComplete="address.street"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="address.city"
                                            label="City"
                                            name="address.city"
                                            autoComplete="address.city"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="address.state"
                                            label="State"
                                            name="address.state"
                                            autoComplete="address.state"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="address.postcode"
                                            label="Postcode"
                                            name="address.postcode"
                                            autoComplete="address.postcode"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Up
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
            <Footer />
        </>
    );
}

export default PatientRegister;
