import React from 'react';
import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';

const Experience = () => {
  const theme = useTheme();
  const experiences = [
    {
      title: 'TSG-II at Google',
      duration: 'October 2024 - Present',
      location: 'Bengaluru, Karnataka, India',
      achievements: [
        'Lead technical troubleshooting for complex customer issues across GCP services, achieving 95% first-contact resolution rate',
        'Developed Python scripts automating routine diagnostic procedures, reducing average resolution time',
        'Collaborated with SRE teams during major incidents for triage and post-mortem analysis',
        'Created internal documentation for networking-related issues',
        'Implemented monitoring dashboards using Stackdriver to proactively identify potential service disruptions'
      ]
    },
    {
      title: 'TSG at Google',
      duration: 'August 2022 - Present',
      location: 'Bengaluru, Karnataka, India',
      achievements: [
        'Resolved 200+ technical cases for Google Cloud customers, specializing in networking, compute, and Kubernetes',
        'Built automation tools using Python and Bash to streamline common troubleshooting workflows',
        'Contributed to knowledge base articles for recurring issues',
        'Participated in on-call rotations providing 24/7 support for critical customer issues',
        'Maintained 95% customer satisfaction rating while handling complex technical issues'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Box
      id="experience"
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
            Experience
          </Typography>

          <Timeline position="alternate">
            {experiences.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  {index !== experiences.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div variants={itemVariants}>
                    <Paper
                      elevation={4}
                      sx={{
                        p: 3,
                        background: theme.palette.background.paper,
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)'
                        }
                      }}
                    >
                      <Typography variant="h6" color="primary" gutterBottom>
                        {exp.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {exp.duration}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        {exp.location}
                      </Typography>
                      <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                        {exp.achievements.map((achievement, i) => (
                          <Typography
                            component="li"
                            variant="body2"
                            key={i}
                            sx={{ mb: 1 }}
                          >
                            {achievement}
                          </Typography>
                        ))}
                      </Box>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Experience;