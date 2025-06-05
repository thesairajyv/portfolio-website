import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { FaMicrochip, FaCode, FaCar, FaDatabase, FaNetworkWired } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Packet Analyzer',
      duration: 'Python Tool',
      icon: <FaNetworkWired />,
      description: 'Python tool for analyzing PCAP files to identify network issues and traffic patterns. Designed for network administrators and developers to streamline network troubleshooting.',
      technologies: [
        'Python 3.8+',
        'pyshark',
        'scapy',
        'Google Gemini LLM',
        'Wireshark/tshark'
      ],
      highlights: [
        'Multi-Protocol Support - Analyzes TCP, UDP, ICMP, DNS, and HTTP streams',
        'Error Detection - Identifies retransmissions, connection issues, and protocol-specific problems',
        'AI Integration - Uses Google Gemini LLM for intelligent traffic analysis and insights',
        'Stream Organization - Groups packets by flow with detailed statistics and timing',
        'Built with Python 3.8+ using pyshark for packet parsing, scapy for network analysis, and Google Generative AI for intelligent insights',
        'Integrates with Wireshark/tshark for comprehensive PCAP processing and supports automated format detection with configurable timeouts',
        'Time Savings - Automates hours of manual packet inspection into minutes of automated analysis',
        'Improved Accuracy - AI-powered insights reduce human error in network diagnostics',
        'Cost Reduction - Faster troubleshooting means less network downtime and reduced operational costs',
        'Scalability - Handles large PCAP files efficiently, supporting enterprise-level network analysis'
      ],
      githubLink: 'https://github.com/thesairajyv/Smart-Network-packet-analyser.git'
    },
    {
      title: 'Wireless Electrical Vehicle Charging System',
      duration: 'Final Year Project',
      icon: <FaCar />,
      description: 'Designed and implemented a wireless charging system for electric vehicles using inductive resonance coupling technology. Led a team to develop a prototype achieving 96.7% power transfer efficiency.',
      certificateLink: 'https://drive.google.com/file/d/1coTt-zP1LDVJOEUJb9v8EmbxO-kUDO-F/view?usp=sharing',
      technologies: ['Power Electronics', 'Inductive Coupling', 'System Design'],
      highlights: [
        'Design of magnetic coupling systems and compensation networks',
        'Implementation of power electronics converters',
        'Analysis of power transfer efficiency',
        'Published research paper recognized as best project'
      ]
    },
    {
      title: 'Automated Washing Machine Simulation',
      duration: 'Sep 2021 - Nov 2021',
      icon: <FaMicrochip />,
      description: 'Developed an end-to-end embedded systems application simulating an automated washing machine using PIC16F877A microcontroller during an 8-week internship.',
      technologies: ['Embedded C', 'PIC Microcontroller', 'MPLAB X IDE'],
      highlights: [
        'Implemented multiple washing programs and safety features',
        'Designed peripheral interfaces for LCD and keypads',
        'Utilized industry-standard development tools',
        'Real-time control implementation'
      ]
    },
    {
      title: 'Business Web Application',
      duration: '2021',
      icon: <FaCode />,
      description: 'Developed a full-stack web application with responsive design and dynamic user interface using modern JavaScript frameworks.',
      technologies: ['React.js', 'Bootstrap', 'MySQL', 'Node.js'],
      highlights: [
        'Created responsive and dynamic UI',
        'Implemented robust back-end system',
        'Integrated chatbot for customer support',
        'Enhanced user experience with modern design'
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        background: '#F8F9FA'
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
            Projects
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 4,
                      height: '100%',
                      background: '#FFFFFF',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 4px 8px rgba(60,64,67,0.3)'
                      }
                    }}
                  >
                    <Box sx={{ color: '#4285F4', fontSize: '2.5rem', mb: 3 }}>
                      {project.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      {project.duration}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: '#E8F0FE',
                            color: '#1967D2',
                            borderRadius: '16px',
                            '&:hover': { backgroundColor: '#D2E3FC' }
                          }}
                        />
                      ))}
                    </Box>
                    {project.certificateLink && (
                      <Link
                        href={project.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'inline-block',
                          color: 'secondary.main',
                          textDecoration: 'none',
                          mb: 2,
                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        View Project Certificate
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'inline-block',
                          color: 'secondary.main',
                          textDecoration: 'none',
                          mb: 2,
                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        View on GitHub
                      </Link>
                    )}
                    <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                      {project.highlights.map((highlight, i) => (
                        <Typography
                          component="li"
                          variant="body2"
                          key={i}
                          sx={{ mb: 1 }}
                        >
                          {highlight}
                        </Typography>
                      ))}
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

export default Projects;
