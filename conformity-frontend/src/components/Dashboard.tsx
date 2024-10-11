// Dashboard.tsx
import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  Grid,
  Container,
} from '@mui/material';
import TopCards from './TopCards';
import BarChartCard from './BarChartCard';

// Define an interface for the compliance metrics
interface ComplianceMetrics {
  complianceScore: number;
  totalViolations: number;
  averageResolutionTime: number;
}

const Dashboard: React.FC = () => {
  // State to store the fetched data
  const [data, setData] = useState<ComplianceMetrics | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to fetch data from the API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/compliance-metrics');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="xl">
    <Grid container p={3} m={1} style={{ backgroundColor:"black" }}>
      <Grid item xs={12}>
      <Typography variant="h4" color='white' gutterBottom>
        Compliance Dashboard
      </Typography>
      <Button variant="contained" color="primary" onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Refresh Data'}
      </Button>
      </Grid>

      {data && (
          <>
            <Grid item xs={12}>
              <TopCards data={data} />
            </Grid>
            <Grid item xs={12} mt={2}>
              <BarChartCard data={data} />
            </Grid>
          </>
        )}
    </Grid>
    </Container>
  );
};

export default Dashboard;
