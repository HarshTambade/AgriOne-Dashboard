import React, { useState } from 'react';
import {
  Card, CardContent, CardHeader, Typography, Button, TextField, Tabs, Tab, Box,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid,
  Avatar, LinearProgress, Chip, IconButton, Badge, Divider
} from "@mui/material";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, PieChart, Pie, Cell,
  ResponsiveContainer
} from "recharts";
import {
  AttachMoney, LocalShipping, Cloud, Spa, Dashboard as DashboardIcon,
  ArrowDropUp, ArrowDropDown, Opacity, Chat, Storage, InsertChart
} from "@mui/icons-material";

// Dummy Data
const marketData = [
  { month: 'Jan', price: 120, demand: 85, supply: 78 },
  { month: 'Feb', price: 135, demand: 92, supply: 85 },
  { month: 'Mar', price: 115, demand: 78, supply: 95 },
  // ...12 months data
];

const weatherForecast = [
  { day: 'Mon', temp: '28°C', rain: '15mm', risk: 'Low' },
  { day: 'Tue', temp: '26°C', rain: '8mm', risk: 'Medium' },
  // ...7 days data
];

const cropHealth = [
  { crop: 'Wheat', health: 85, diseaseRisk: 'Low' },
  { crop: 'Rice', health: 72, diseaseRisk: 'Medium' },
  // ...crops
];

const financialProducts = [
  { bank: 'AgriBank', type: 'Loan', rate: '4.5%', amount: '$50k' },
  { bank: 'GreenFin', type: 'Subsidy', rate: '0%', amount: '$10k' },
  // ...financial options
];

const marketplaceListings = [
  { crop: 'Organic Wheat', quantity: '1.5T', price: '$250', rating: 4.8 },
  { crop: 'Basmati Rice', quantity: '800kg', price: '$180', rating: 4.5 },
  // ...listings
];

const storageFacilities = [
  { location: 'Warehouse A', capacity: 85, crops: 'Wheat, Rice' },
  { location: 'Cold Storage B', capacity: 65, crops: 'Vegetables' },
  // ...storage units
];

const AgriOneDashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [cropQuery, setCropQuery] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ p: 3, bgcolor: '#f8fafc', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Spa fontSize="large" sx={{ color: '#2e7d32' }} />
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#1b5e20' }}>
          AgriOne Platform
        </Typography>
      </Box>

      {/* Main Tabs */}
      <Tabs value={tabValue} onChange={handleTabChange} variant="scrollable">
        <Tab icon={<InsertChart />} label="Market Intel" />
        <Tab icon={<Cloud />} label="Weather Advisory" />
        <Tab icon={<Spa />} label="Crop Management" />
        <Tab icon={<AttachMoney />} label="Financial Hub" />
        <Tab icon={<Storage />} label="Storage Logistics" />
        <Tab icon={<LocalShipping />} label="Marketplace" />
      </Tabs>

      {/* Tab Content */}
      <Box sx={{ mt: 3 }}>
        {/* Market Intelligence Tab */}
        {tabValue === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 2 }}>
                <CardHeader title="Price Trends & Forecast" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={marketData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="price" stroke="#2e7d32" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 2 }}>
                <CardHeader title="Supply-Demand Analysis" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={marketData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="demand" fill="#81c784" />
                      <Bar dataKey="supply" fill="#4caf50" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {/* Weather Advisory Tab */}
        {tabValue === 1 && (
          <Grid container spacing={3}>
            {weatherForecast.map((day) => (
              <Grid item xs={6} md={2} key={day.day}>
                <Card sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h6">{day.day}</Typography>
                  <Typography variant="h4" sx={{ my: 1 }}>{day.temp}</Typography>
                  <Chip 
                    label={day.risk} 
                    color={
                      day.risk === 'Low' ? 'success' : 
                      day.risk === 'Medium' ? 'warning' : 'error'
                    }
                  />
                  <Typography variant="body2" sx={{ mt: 1 }}>{day.rain} rainfall</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Crop Management Tab */}
        {tabValue === 2 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 2 }}>
                <CardHeader title="Crop Health Monitor" />
                <CardContent>
                  <PieChart width={300} height={200}>
                    <Pie
                      data={cropHealth}
                      dataKey="health"
                      nameKey="crop"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                    >
                      {cropHealth.map((entry, index) => (
                        <Cell key={index} fill={['#81c784', '#ffb74d', '#ef5350'][index]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={8}>
              <Card sx={{ p: 2 }}>
                <CardHeader title="AI Farming Assistant" />
                <CardContent>
                  <TextField
                    fullWidth
                    label="Ask about crop management..."
                    value={cropQuery}
                    onChange={(e) => setCropQuery(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <Button variant="contained" color="primary">
                          <Chat />
                        </Button>
                      )
                    }}
                  />
                  <Box sx={{ mt: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                    <Typography variant="body2" color="text.secondary">
      Try: "Best fertilizer for wheat in current weather?" or "How to prevent rice blight?"
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {/* Financial Hub Tab */}
        {tabValue === 3 && (
          <Card>
            <CardHeader title="Financial Solutions" />
            <CardContent>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Provider</TableCell>
                      <TableCell>Product</TableCell>
                      <TableCell>Rate</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {financialProducts.map((product) => (
                      <TableRow key={product.bank}>
                        <TableCell>{product.bank}</TableCell>
                        <TableCell>{product.type}</TableCell>
                        <TableCell>{product.rate}</TableCell>
                        <TableCell>{product.amount}</TableCell>
                        <TableCell>
                          <Button variant="outlined" size="small">
                            Apply
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        )}

        {/* Marketplace Tab */}
        {tabValue === 5 && (
          <Grid container spacing={3}>
            {marketplaceListings.map((listing) => (
              <Grid item xs={12} md={4} key={listing.crop}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6">{listing.crop}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {listing.quantity} available
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Typography variant="h5">{listing.price}</Typography>
                    <Chip label={`★ ${listing.rating}`} color="primary" />
                  </Box>
                  <Button fullWidth variant="contained" sx={{ mt: 2 }}>
                    Place Bid
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* AI Assistant Fab */}
      <Box sx={{ position: 'fixed', bottom: 24, right: 24 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Chat />}
          sx={{ borderRadius: 50, boxShadow: 3 }}
        >
          AI Assistant
        </Button>
      </Box>
    </Box>
  );
};

export default AgriOneDashboard;