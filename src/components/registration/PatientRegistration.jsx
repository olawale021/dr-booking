import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Radio } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import axios from 'axios';
import Link from '@mui/material/Link';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function PatientRegistration() {
    const [selectedGender, setSelectedGender] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            phoneNumber: event.target.phoneNumber.value,
            password: event.target.password.value,
            gender: selectedGender,
            address: {
                street: event.target['address.street'].value,
                city: event.target['address.city'].value,
                state: event.target['address.state'].value,
                postcode: event.target['address.postcode'].value
            }
        };
        try {
            console.log(formData);
            const response = await axios.post('api/patient/register', formData);
            
            console.log(response.data); // Log the response from the backend
            // Display success message with SweetAlert
        Swal.fire({
            icon: 'success',
            title: 'Registration Successful!',
            text: 'Navigating to login page...',
            timer: 2500, // Time in milliseconds
            timerProgressBar: true,
            showConfirmButton: false
        }).then(() => {
            // Navigate to the login page after 5 seconds
            window.location.href = '/patient_login';
        });
            
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };
  return (
                        <Box
                            sx={{
                                my: 5,
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
  )
}

export default PatientRegistration
