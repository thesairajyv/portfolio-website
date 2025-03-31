import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGoogle, FaServer, FaTools, FaChartLine } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const strengths = [
    {
      icon: <FaGoogle />,
      title: 'Google Cloud Platform',
      description: 'Expert in GCP infrastructure, troubleshooting, and cloud solutions'
    },
    {
      icon: <FaServer />,
      title: 'Network Engineering',
      description: 'Specialized in complex network architectures and troubleshooting'
    },
    {
      icon: <FaTools />,
      title: 'Automation',
      description: 'Proficient in developing automation scripts and tools for efficiency'
    },
    {
      icon: <FaChartLine />,
      title: 'Problem Solving',
      description: '95% first-contact resolution rate in complex technical cases'
    }
  ];

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        background: '#FFFFFF',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(to right, #4285F4, #EA4335, #FBBC05, #34A853)'
        }
      }}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              textAlign: 'center',
              mb: 6,
              background: 'linear-gradient(45deg, #4285F4, #EA4335, #FBBC05, #34A853)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            About Me
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography variant="body1" paragraph>
                  As a Technical Solutions Engineer at Google, I specialize in cloud infrastructure
                  and network engineering. With multiple Google Cloud certifications and extensive
                  hands-on experience, I excel in resolving complex technical challenges and
                  implementing efficient solutions.
                </Typography>
                <Typography variant="body1" paragraph>
                  My expertise spans across cloud technologies, troubleshooting complex systems,
                  and infrastructure management. I've successfully maintained a 95% first-contact
                  resolution rate while handling intricate technical cases and contributed to
                  improving system efficiency through automation.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {strengths.map((strength, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <motion.div variants={itemVariants}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          height: '100%',
                          background: '#FFFFFF',
                          border: '1px solid #DADCE0',
                          transition: 'all 280ms cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
                            borderColor: theme => theme.palette.google.blue
                          }
                        }}
                      >
                        <Box sx={{ 
                          color: index === 0 ? '#4285F4' : index === 1 ? '#EA4335' : index === 2 ? '#FBBC05' : '#34A853',
                          fontSize: '2.5rem',
                          mb: 2,
                          transition: 'transform 280ms cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            transform: 'scale(1.1)'
                          }
                        }}>
                          {strength.icon}
                        </Box>
                        <Typography variant="h6" gutterBottom>
                          {strength.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {strength.description}
                        </Typography>
                      </Paper>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;