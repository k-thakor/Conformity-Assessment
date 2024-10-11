import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';

// Define the interface for the compliance metrics
interface ComplianceMetrics {
  complianceScore: number;
  totalViolations: number;
  averageResolutionTime: number;
}

// Define the props interface for TopCards
interface TopCardsProps {
  data: ComplianceMetrics; // Props include the compliance metrics
}

// Function to create metric names
const createMetricName = (index: number): string => {
  const metricNames = ['Compliance Score', 'Total Violations', 'Avg. Resolution Time (days)'];
  return metricNames[index];
};

// Functional component for TopCards
const TopCards: React.FC<TopCardsProps> = ({ data }) => {
  // Array of metric values
  const metricValues = [
    data ? data.complianceScore : 'Loading...',
    data ? data.totalViolations : 'Loading...',
    data ? data.averageResolutionTime : 'Loading...',
  ];

  return (
    <Grid container spacing={3} style={{ marginTop: '10px' }}>
      {metricValues.map((value, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5">{createMetricName(index)}</Typography>
              <Typography variant="h2" color="textPrimary">
                {value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopCards;
