import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { FaCloud, FaNetworkWired, FaCode, FaCogs } from 'react-icons/fa';

const Hero = () => {
  const theme = useTheme();
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
        pt: { xs: 12, md: 8 },
        pb: { xs: 8, md: 0 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(to right, #4285F4, #EA4335, #FBBC05, #34A853)'
        }
      }}
    >
      <Container>
        <Grid container spacing={6} alignItems="center" justifyContent="space-between">
          <Grid xs={12} lg={8}>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.2 }}
            >
              <motion.div variants={textVariants}>
                <Typography 
                  variant="h1" 
                  color="primary"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    mb: 2,
                    fontWeight: 400,
                    background: 'linear-gradient(45deg, #4285F4, #EA4335, #FBBC05, #34A853)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Sairaj Y V
                </Typography>
              </motion.div>
              
              <motion.div variants={textVariants}>
                <Typography 
                  variant="h4" 
                  color="text.secondary"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    mb: 3,
                    fontWeight: 300
                  }}
                >
                  TSG at Google | 4X GCP Certified Professional Engineer
                </Typography>
              </motion.div>

              <motion.div variants={textVariants}>
                <Typography 
                  variant="h6" 
                  color="text.secondary"
                  sx={{
                    mb: 4,
                    maxWidth: '600px',
                    lineHeight: 1.6,
                    fontSize: '1.125rem'
                  }}
                >
                  Experienced Technical Solutions Engineer specializing in cloud infrastructure,
                  network engineering, and system automation
                </Typography>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid xs={12} lg={4}>
            <Grid container spacing={2}>
              {[
                { Icon: FaCloud, title: 'Cloud Infrastructure', delay: 0.3 },
                { Icon: FaNetworkWired, title: 'Network Engineering', delay: 0.4 },
                { Icon: FaCode, title: 'Automation', delay: 0.5 },
                { Icon: FaCogs, title: 'System Design', delay: 0.6 }
              ].map(({ Icon, title, delay }, index) => (
                <Grid xs={6} key={title}>
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay, duration: 0.5 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        background: '#FFFFFF',
                        borderRadius: 2,
                        border: '1px solid #DADCE0',
                        transition: 'all 280ms cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
                          borderColor: '#4285F4'
                        }
                      }}
                    >
                      <Icon size={40} style={{ marginBottom: '12px', color: index === 0 ? '#4285F4' : index === 1 ? '#EA4335' : index === 2 ? '#FBBC05' : '#34A853' }} />
                      <Typography variant="body2" color="text.secondary">
                        {title}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;