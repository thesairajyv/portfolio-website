import React from 'react';
import { Box, Container, Typography, Grid, Paper, Link, Chip, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { FaAward, FaCloud, FaCode, FaGraduationCap, FaLink } from 'react-icons/fa';

const Certifications = () => {
  const theme = useTheme();
  const certifications = [
    {
      title: 'Professional Cloud Architect',
      issuer: 'Google',
      date: 'July 2024',
      expiry: 'July 2026',
      credentialLink: 'https://www.credly.com/badges/963d80c4-31a8-42f3-9019-4e51b0b07045/linked_in_profile',
      skills: ['Workload Migration', 'Scalability', 'Networking', 'IAM', 'GCP', 'GKE', 'Databases', 'Cloud Storage', 'Cloud Security', 'Cloud Computing', 'Cloud Architecture'],
      icon: <FaCloud />
    },
    {
      title: 'Professional Cloud Security Engineer',
      issuer: 'Google',
      date: 'February 2025',
      expiry: 'February 2027',
      credentialLink: 'https://www.credly.com/badges/825a8d07-0919-4bbb-91c5-fed38ec93029/linked_in_profile',
      skills: ['Security Engineering', 'Security Controls', 'Network Security', 'IAM', 'GCP', 'Data Security', 'Data Governance', 'Cybersecurity', 'Cloud Security'],
      icon: <FaCloud />
    },
    {
      title: 'Open Source Software Development, Linux and Git',
      issuer: 'Coursera',
      date: 'January 2025',
      credentialLink: 'https://www.credly.com/badges/431fa662-b3ac-40e2-9e2b-6ae367dbee59/linked_in_profile',
      skills: ['Git', 'Linux'],
      icon: <FaCode />
    },
    {
      title: 'Professional Cloud Network Engineer',
      issuer: 'Google',
      date: 'August 2023',
      expiry: 'August 2025',
      credentialId: 'TRHh8G',
      credentialLink: 'https://google.accredible.com/68e595f9-4151-4f13-8b40-4144fc1f0a4c',
      skills: ['TCP/IP', 'Routing Protocols', 'Network Troubleshooting', 'Network Security', 'Network Performance', 'Network Monitoring', 'Network Engineering', 'Network Design', 'Network Architecture', 'GCP', 'Firewalls'],
      icon: <FaCloud />
    },
    {
      title: 'Associate Cloud Engineer',
      issuer: 'Google Cloud Education',
      date: 'October 2022',
      expiry: 'October 2025',
      credentialId: '44tRda',
      credentialLink: 'https://www.credential.net/7f7b2358-975f-4077-a419-5c5b34521ed9',
      skills: ['PL/SQL', 'Pub/Sub', 'Networking', 'IaC', 'IAM', 'GCP', 'GKE', 'Cloud Storage', 'Cloud Security', 'Cloud Computing', 'Cloud Architecture'],
      icon: <FaCloud />
    },
    {
      title: 'Networking in Google Cloud: Defining and Implementing Networks',
      issuer: 'Coursera',
      date: 'November 2023',
      credentialId: '9DA3TZ6DJ8UA',
      credentialLink: 'https://www.coursera.org/account/accomplishments/certificate/9DA3TZ6DJ8UA',
      skills: ['Networking', 'GCP'],
      icon: <FaCloud />
    },
    {
      title: 'Networking in Google Cloud: Hybrid Connectivity',
      issuer: 'Coursera',
      date: 'November 2023',
      credentialId: 'V4NECLJECPCW',
      credentialLink: 'https://coursera.org/share/80b8eaf695f243da78e03f988abab752',
      skills: ['Hybrid Connectivity', 'Network Management', 'GCP'],
      icon: <FaCloud />
    },
    {
      title: 'Hybrid Cloud Modernizing Applications with Anthos',
      issuer: 'Coursera',
      date: 'June 2023',
      credentialId: 'T7LLJG53BXXB',
      credentialLink: 'https://www.coursera.org/account/accomplishments/certificate/T7LLJG53BXXB',
      skills: ['Hybrid Cloud', 'Anthos', 'Application Modernization'],
      icon: <FaCloud />
    },
    {
      title: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Udemy',
      date: 'May 2023',
      credentialId: 'UC-b97637a4-076e-4d04-9b99-6598c119bcae',
      credentialLink: 'https://www.udemy.com/certificate/UC-b97637a4-076e-4d04-9b99-6598c119bcae/',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps'],
      icon: <FaCloud />
    },
    {
      title: 'Multi-Cluster, Multi-Cloud with Anthos',
      issuer: 'Coursera',
      date: 'March 2023',
      credentialId: 'ETZK2LMN46XR',
      credentialLink: 'https://coursera.org/verify/ETZK2LMN46XR',
      skills: ['Multi-Cloud', 'Anthos', 'Cluster Management'],
      icon: <FaCloud />
    },
    {
      title: 'Anthos on Bare Metal',
      issuer: 'Coursera',
      date: 'March 2023',
      credentialId: 'P9EJL8GQH53Y',
      credentialLink: 'https://www.coursera.org/account/accomplishments/certificate/P9EJL8GQH53Y',
      skills: ['Anthos', 'Bare Metal', 'Infrastructure'],
      icon: <FaCloud />
    },
    {
      title: 'Cloud Operations and Service Mesh with Anthos',
      issuer: 'Coursera',
      date: 'February 2023',
      credentialId: 'MHJE2SBAYRWX',
      credentialLink: 'https://www.coursera.org/account/accomplishments/certificate/MHJE2SBAYRWX',
      skills: ['Cloud Operations', 'Service Mesh', 'Anthos'],
      icon: <FaCloud />
    },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <Box
      id="certifications"
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
            Certifications
          </Typography>

          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {certifications.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={itemVariants} style={{ height: '100%' }}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 2,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)',
                        borderColor: 'primary.main'
                      }
                    }}
                  >
                    <Box sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2,
                          gap: 2
                        }}
                      >
                        <Box
                          sx={{
                            color: 'primary.main',
                            fontSize: '2rem',
                            display: 'flex',
                            p: 1,
                            borderRadius: '50%',
                            background: 'rgba(24, 119, 242, 0.1)'
                          }}
                        >
                          {cert.icon}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h6" sx={{ mb: 0.5, lineHeight: 1.2 }}>
                            {cert.title}
                          </Typography>
                          <Typography variant="subtitle2" color="text.secondary">
                            {cert.issuer}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Date: {cert.date}
                      </Typography>

                      {cert.credentialId && (
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          ID: {cert.credentialId}
                        </Typography>
                      )}

                      {cert.expiry && (
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Expires: {cert.expiry}
                        </Typography>
                      )}

                      <Box sx={{ mt: 3 }}>
                        <Stack
                          direction="row"
                          spacing={1}
                          useFlexGap
                          flexWrap="wrap"
                          sx={{ gap: '8px !important' }}
                        >
                          {cert.skills.map((skill, skillIndex) => (
                            <Chip
                              key={skillIndex}
                              label={skill}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(32, 201, 151, 0.1)',
                                color: '#20c997',
                                fontSize: '0.75rem'
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>

                      {cert.credentialLink && (
                        <Box sx={{ mt: 3, textAlign: 'center' }}>
                          <Link
                            href={cert.credentialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: 1,
                              color: 'primary.main',
                              textDecoration: 'none',
                              '&:hover': { textDecoration: 'underline' }
                            }}
                          >
                            View Credential <FaLink />
                          </Link>
                        </Box>
                      )}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Certifications;