 // TopCard.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
} from '@mui/material';

interface ComplianceMetrics {
  complianceScore: number;
  totalViolations: number;
  averageResolutionTime: number;
}

// Define the props interface for TopCards
interface TopCardsProps {
  data: ComplianceMetrics; // Props include the compliance metrics
}

const BarChartCard: React.FC<TopCardsProps> = ({ data }) => {
  return(
    
    <Card>
    <CardContent>
    <h2 style={{ marginTop: '40px' }}>Compliance Metrics Overview</h2>
    <ResponsiveContainer width="80%" height={200}>
      <BarChart
        data={[
          { name: 'Compliance Score', value: data ? data.complianceScore : 0 },
          { name: 'Total Violations', value: data ? data.totalViolations : 0 },
          { name: 'Avg. Resolution Time', value: data ? data.averageResolutionTime : 0 },
        ]}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
    </CardContent>
    </Card>
  )
}
export default BarChartCard;
