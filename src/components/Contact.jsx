import React from 'react';
import { Box, Container, Typography, Grid, Paper, Link, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const theme = useTheme();
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'sairaiyv4u4all@gmail.com',
      link: 'mailto:sairaiyv4u4all@gmail.com'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sairaj-y-v-a4b105174',
      link: 'https://www.linkedin.com/in/sairaj-y-v-a4b105174'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/thesairajyv',
      link: 'https://github.com/thesairajyv'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        background: theme.palette.background.default
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
            color="primary"
            gutterBottom
            sx={{ textAlign: 'center', mb: 6 }}
          >
            Contact
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {contactInfo.map((info, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 3,
                      height: '100%',
                      textAlign: 'center',
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(5px)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        color: 'primary.main',
                        fontSize: '2.5rem',
                        mb: 2,
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {info.label}
                    </Typography>
                    {info.link ? (
                      <Link
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        sx={{
                          textDecoration: 'none',
                          '&:hover': { color: 'primary.main' }
                        }}
                      >
                        <Typography variant="body1">{info.value}</Typography>
                      </Link>
                    ) : (
                      <Typography variant="body1">{info.value}</Typography>
                    )}
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Let's connect and discuss how we can work together!
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;