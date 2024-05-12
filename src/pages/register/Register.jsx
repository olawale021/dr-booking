import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/footer';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image01 from './image01.png';
import PatientRegistration from '../../components/registration/PatientRegistration';
import DoctorRegForm from '../../components/registration/DoctorRegForm'; // Import the DoctorRegForm component

const defaultTheme = createTheme({
  palette: {
    primary: {
        main: '#0F82FD', 
      },
      secondary: {
        main: '#1E88E5', 
      },
    background: {
        default: '#f1f7fe', // Set the default background color
      },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

function PatientRegister() {
  const [isDoctor, setIsDoctor] = useState(false); // State to track if the user is a doctor

  const handleToggleForm = () => {
    setIsDoctor(!isDoctor); // Toggle between doctor and patient
  };

  return (
    <>
      <Header />
      <ThemeProvider theme={defaultTheme}>
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f1f7fe',
          }}
        >
          <Grid container component="main" sx={{ maxWidth: '1200px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
            <Grid
              item
              xs={false}
              sm={6}
              md={6}
              sx={{
                backgroundImage: `url(${Image01})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px 0 0 10px',
              }}
            />
            <Grid item xs={12} sm={6} md={6}>
              <Box
                sx={{
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <Typography variant="h4" gutterBottom>
                  {isDoctor ? 'Doctor Registration' : 'Patient Registration'}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  {isDoctor ? 'Please fill out the form below to register as a doctor.' : 'Please fill out the form below to register as a patient.'}
                </Typography>
                {isDoctor ? <DoctorRegForm /> : <PatientRegistration />} {/* Display the appropriate form */}
                <Box mt={2}>
                  <Typography variant="body2">
                    {isDoctor ? 'Are you a patient? ' : 'Are you a doctor? '}
                    <Typography
                      component="a"
                      href="#"
                      variant="body2"
                      color="primary"
                      sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                      onClick={handleToggleForm} // Toggle the form when clicked
                    >
                      Click here
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
      <Footer />
    </>
  );
}

export default PatientRegister;
