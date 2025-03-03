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
  ArrowDropUp, ArrowDropDown, Opacity, ShoppingCart, Add, Search
} from "@mui/icons-material";

// Dummy Data
const priceData = [
  { date: 'Jan', price: 120, demand: 85 },
  { date: 'Feb', price: 135, demand: 92 },
  { date: 'Mar', price: 115, demand: 78 },
  { date: 'Apr', price: 145, demand: 88 },
  { date: 'May', price: 160, demand: 95 },
  { date: 'Jun', price: 155, demand: 89 },
  { date: 'Jul', price: 170, demand: 98 },
  { date: 'Aug', price: 165, demand: 93 },
  { date: 'Sep', price: 150, demand: 87 },
  { date: 'Oct', price: 140, demand: 85 },
  { date: 'Nov', price: 130, demand: 82 },
  { date: 'Dec', price: 125, demand: 80 },
];

const cropHealthData = [
  { name: 'Healthy', value: 82 },
  { name: 'Diseased', value: 12 },
  { name: 'Needs Attention', value: 6 },
];

const COLORS = ['#00C49F', '#FF8042', '#FFBB28'];

const loanData = [
  { id: 1, bank: 'AgriBank', interestRate: '4.5%', maxAmount: '$75,000', eligibility: 'High', logo: '🌾' },
  { id: 2, bank: 'GreenFarm Loans', interestRate: '5.2%', maxAmount: '$50,000', eligibility: 'Medium', logo: '🌱' },
  { id: 3, bank: 'Rural Credit Co-op', interestRate: '3.9%', maxAmount: '$100,000', eligibility: 'High', logo: '🚜' },
  { id: 4, bank: 'Global Agri Finance', interestRate: '6.1%', maxAmount: '$150,000', eligibility: 'Low', logo: '🌍' },
];

const marketplaceData = [
  { id: 1, crop: 'Organic Wheat', quantity: '1500kg', price: '$250', seller: 'Farmer John', rating: 4.8 },
  { id: 2, crop: 'Basmati Rice', quantity: '800kg', price: '$180', seller: 'Farmer Jane', rating: 4.5 },
  { id: 3, crop: 'Non-GMO Corn', quantity: '2000kg', price: '$220', seller: 'Farmer Joe', rating: 4.9 },
  { id: 4, crop: 'Quinoa', quantity: '500kg', price: '$300', seller: 'Farmer Alice', rating: 4.7 },
];

const logisticsData = [
  { id: 1, location: 'Warehouse Alpha', capacity: 85, crops: 'Wheat, Rice', temperature: '18-22°C', humidity: '65%' },
  { id: 2, location: 'Cold Storage Beta', capacity: 65, crops: 'Vegetables, Fruits', temperature: '2-5°C', humidity: '85%' },
  { id: 3, location: 'Silo Complex Gamma', capacity: 92, crops: 'Corn, Soybean', temperature: '15-20°C', humidity: '70%' },
];

const weatherData = [
  { id: 1, day: 'Monday', temp: '28°C', rainfall: '15mm', humidity: '75%', wind: '12 km/h', risk: 'Medium' },
  { id: 2, day: 'Tuesday', temp: '26°C', rainfall: '8mm', humidity: '68%', wind: '8 km/h', risk: 'Low' },
  { id: 3, day: 'Wednesday', temp: '24°C', rainfall: '22mm', humidity: '82%', wind: '18 km/h', risk: 'High' },
  { id: 4, day: 'Thursday', temp: '27°C', rainfall: '5mm', humidity: '65%', wind: '10 km/h', risk: 'Medium' },
];

const Dashboard = () => {
  const [crop, setCrop] = useState("");
  const [weatherLocation, setWeatherLocation] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [newListing, setNewListing] = useState({ crop: '', quantity: '', price: '' });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCreateListing = () => {
    // Add logic to handle new listing submission
    console.log('New listing:', newListing);
    setNewListing({ crop: '', quantity: '', price: '' });
  };

  const renderRiskBadge = (risk) => {
    const colorMap = {
      Low: 'success',
      Medium: 'warning',
      High: 'error'
    };
    return (
      <Button 
        variant="contained" 
        color={colorMap[risk]} 
        size="small"
        sx={{ borderRadius: 20, textTransform: 'none' }}
      >
        {risk} Risk
      </Button>
    );
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ 
        fontWeight: 800, 
        color: '#1a5632',
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <Spa fontSize="large" /> AgriOne Dashboard
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange} variant="scrollable" scrollButtons="auto"
        sx={{ 
          '& .MuiTabs-indicator': { backgroundColor: '#1a5632' },
          '& .Mui-selected': { color: '#1a5632 !important' }
        }}
      >
        <Tab icon={<AttachMoney />} label="Market Intel" />
        <Tab icon={<Spa />} label="Crop Advisory" />
        <Tab icon={<DashboardIcon />} label="Finance" />
        <Tab icon={<LocalShipping />} label="Logistics" />
        <Tab icon={<Cloud />} label="Weather" />
        <Tab icon={<ShoppingCart />} label="Marketplace" />
      </Tabs>

      <Box sx={{ mt: 4 }}>
        {/* Market Intelligence Tab */}
        {tabValue === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardHeader 
                  title="Market Trends Analysis" 
                  subheader="Real-time commodity pricing and demand forecast"
                  titleTypographyProps={{ variant: 'h6', fontWeight: 600 }}
                  sx={{ bgcolor: '#f0fdf4' }}
                />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                        Price Trends 📈
                      </Typography>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={priceData}>
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Line 
                            type="monotone" 
                            dataKey="price" 
                            stroke="#1a5632" 
                            strokeWidth={2}
                            dot={{ fill: '#1a5632' }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                        Demand Forecast 📊
                      </Typography>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={priceData}>
                          <XAxis dataKey="date" />
                          <YAxis />
                          <Tooltip />
                          <Bar 
                            dataKey="demand" 
                            fill="#82ca9d" 
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardHeader
                  title="Quick Actions"
                  titleTypographyProps={{ variant: 'h6', fontWeight: 600 }}
                  sx={{ bgcolor: '#f0fdf4' }}
                />
                <CardContent>
                  <Grid container spacing={2}>
                    {marketplaceData.map((item) => (
                      <Grid item xs={12} key={item.id}>
                        <Card variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                          <Box display="flex" alignItems="center" justifyContent="space-between">
                            <Box>
                              <Typography variant="subtitle1" fontWeight={600}>
                                {item.crop}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {item.seller}
                              </Typography>
                            </Box>
                            <Box textAlign="right">
                              <Typography variant="body1" fontWeight={600}>
                                {item.price}
                              </Typography>
                              <Box display="flex" alignItems="center" gap={0.5}>
                                <Typography variant="caption" color="text.secondary">
                                  {item.rating}/5
                                </Typography>
                                <Box color="#ffc107">★</Box>
                              </Box>
                            </Box>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {/* Crop Advisory Tab */}
        {tabValue === 1 && (
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ borderRadius: 3, boxShadow: 3, height: '100%' }}>
                <CardHeader
                  title="Crop Health Overview"
                  titleTypographyProps={{ variant: 'h6', fontWeight: 600 }}
                  sx={{ bgcolor: '#f0fdf4' }}
                />
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={cropHealthData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {cropHealthData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Percentage']}
                        contentStyle={{ borderRadius: 8 }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <Box mt={2}>
                    {cropHealthData.map((item, index) => (
                      <Box key={index} display="flex" alignItems="center" mb={1}>
                        <Box 
                          width={12} 
                          height={12} 
                          bgcolor={COLORS[index]} 
                          borderRadius="50%" 
                          mr={1} 
                        />
                        <Typography variant="body2">{item.name}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={8}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardHeader
                  title="Crop Advisory System"
                  titleTypographyProps={{ variant: 'h6', fontWeight: 600 }}
                  sx={{ bgcolor: '#f0fdf4' }}
                />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Enter Crop Name"
                        variant="outlined"
                        value={crop}
                        onChange={(e) => setCrop(e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <Button 
                              variant="contained" 
                              color="primary"
                              sx={{ borderRadius: 2 }}
                            >
                              Analyze
                            </Button>
                          )
                        }}
                      />
                    </Grid>
                    {crop && (
                      <Grid item xs={12}>
                        <Card variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
                          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                            Recommendations for {crop}
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={6} md={3}>
                              <Box textAlign="center">
                                <Avatar sx={{ bgcolor: '#1a5632', mb: 1 }}>
                                  <ArrowDropUp />
                                </Avatar>
                                <Typography variant="body2">Planting Window</Typography>
                                <Typography variant="body1" fontWeight={600}>
                                  Feb 15 - Mar 10
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={6} md={3}>
                              <Box textAlign="center">
                                <Avatar sx={{ bgcolor: '#1a5632', mb: 1 }}>
                                  💧
                                </Avatar>
                                <Typography variant="body2">Water Needs</Typography>
                                <Typography variant="body1" fontWeight={600}>
                                  500-700mm
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={6} md={3}>
                              <Box textAlign="center">
                                <Avatar sx={{ bgcolor: '#1a5632', mb: 1 }}>
                                  🌡️
                                </Avatar>
                                <Typography variant="body2">Temperature</Typography>
                                <Typography variant="body1" fontWeight={600}>
                                  20-30°C
                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={6} md={3}>
                              <Box textAlign="center">
                                <Avatar sx={{ bgcolor: '#1a5632', mb: 1 }}>
                                  ⏳
                                </Avatar>
                                <Typography variant="body2">Growth Period</Typography>
                                <Typography variant="body1" fontWeight={600}>
                                  90-120 Days
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Card>
                      </Grid>
                    )}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {/* Financial Assistance Tab */}
        {tabValue === 2 && (
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardHeader
              title="Financial Solutions"
              subheader="Explore loan options and subsidy programs"
              titleTypographyProps={{ variant: 'h6', fontWeight: 600 }}
              sx={{ bgcolor: '#f0fdf4' }}
            />
            <CardContent>
              <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
                <Table>
                  <TableHead sx={{ bgcolor: '#f0fdf4' }}>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Bank</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Interest Rate</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Max Amount</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Eligibility</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {loanData.map((loan) => (
                      <TableRow key={loan.id} hover>
                        <TableCell>
                          <Box display="flex" alignItems="center" gap={2}>
                            <Avatar sx={{ bgcolor: '#e9f5eb' }}>{loan.logo}</Avatar>
                            {loan.bank}
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography color={parseFloat(loan.interestRate) < 5 ? 'success.main' : 'warning.main'}>
                            {loan.interestRate}
                          </Typography>
                        </TableCell>
                        <TableCell>{loan.maxAmount}</TableCell>
                        <TableCell>
                          <Chip 
                            label={loan.eligibility} 
                            color={
                              loan.eligibility === 'High' ? 'success' : 
                              loan.eligibility === 'Medium' ? 'warning' : 'error'
                            }
                            size="small"
                          />
                        </TableCell>
                        <TableCell>
                          <Button variant="outlined" color="primary" size="small">
                            Apply Now
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

        {/* Logistics Tab */}
        {tabValue === 3 && (
          <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
            <CardHeader
              title="Storage Logistics"
              subheader="Real-time storage monitoring and management"
              titleTypographyProps={{ variant: 'h6', fontWeight: 600 }}
              sx={{ bgcolor: '#f0fdf4' }}
            />
            <CardContent>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 600 }}>Location</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Capacity</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Crops Stored</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Temperature</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Humidity</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {logisticsData.map((logistic) => (
                      <TableRow key={logistic.id} hover>
                        <TableCell>{logistic.location}</TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center" gap={2}>
                            <LinearProgress
                              variant="determinate"
                              value={logistic.capacity}
                              sx={{ width: '60%', height: 8, borderRadius: 4 }}
                            />
                            <Typography>{logistic.capacity}%</Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{logistic.crops}</TableCell>
                        <TableCell>{logistic.temperature}</TableCell>
                        <TableCell>{logistic.humidity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        )}

        {/* Weather Tab */}
        {tabValue === 4 && (
          <Grid container spacing={3}>
            {weatherData.map((day) => (
              <Grid item xs={12} sm={6} md={3} key={day.id}>
                <Card sx={{ borderRadius: 3, boxShadow: 3, height: '100%' }}>
                  <CardHeader
                    title={day.day}
                    subheader="Weather Forecast"
                    sx={{ bgcolor: '#f0fdf4' }}
                  />
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography variant="h3" align="center">
                          {day.temp}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        {renderRiskBadge(day.risk)}
                      </Grid>
                      <Grid item xs={12}>
                        <Divider />
                      </Grid>
                      <Grid item xs={6}>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Opacity />
                          <Typography>{day.humidity}</Typography>
                        </Box>
                        <Typography variant="caption">Humidity</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Cloud />
                          <Typography>{day.rainfall}</Typography>
                        </Box>
                        <Typography variant="caption">Rainfall</Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Marketplace Tab */}
        {tabValue === 5 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardHeader
                  title="Agricultural Marketplace"
                  subheader="Buy and sell crops directly with farmers"
                  titleTypographyProps={{ variant: 'h6', fontWeight: 600 }}
                  sx={{ bgcolor: '#f0fdf4' }}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                    <TextField
                      fullWidth
                      label="Search crops..."
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <IconButton size="small">
                            <Search />
                          </IconButton>
                        ),
                      }}
                    />
                    <Button 
                      variant="contained" 
                      color="primary"
                      startIcon={<Add />}
                      sx={{ minWidth: 180 }}
                    >
                      Sell Your Crop
                    </Button>
                  </Box>

                  <Grid container spacing={3}>
                    {marketplaceData.map((item) => (
                      <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card sx={{ p: 2, borderRadius: 2, height: '100%' }}>
                          <Box display="flex" flexDirection="column" height="100%">
                            <Box flexGrow={1}>
                              <Typography variant="h6" gutterBottom>
                                {item.crop}
                              </Typography>
                              <Chip 
                                label={`${item.quantity} available`} 
                                color="info"
                                size="small"
                                sx={{ mb: 1 }}
                              />
                              <Box display="flex" alignItems="center" gap={1} mb={1}>
                                <Avatar sx={{ width: 24, height: 24 }}>👨🌾</Avatar>
                                <Typography variant="body2">{item.seller}</Typography>
                              </Box>
                              <Box display="flex" alignItems="center" gap={0.5} mb={2}>
                                <Typography variant="h5" color="primary">
                                  {item.price}
                                </Typography>
                                <Typography variant="caption">/ton</Typography>
                              </Box>
                            </Box>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                              <Button 
                                variant="contained" 
                                color="primary"
                                size="small"
                              >
                                Buy Now
                              </Button>
                              <Box display="flex" alignItems="center">
                                <Typography variant="body2" sx={{ mr: 0.5 }}>
                                  {item.rating}
                                </Typography>
                                <Box color="#ffc107">★</Box>
                              </Box>
                            </Box>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>

                  <Box mt={4} p={3} bgcolor="#f8fafc" borderRadius={2}>
                    <Typography variant="h6" gutterBottom>
                      Create New Listing
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          label="Crop Type"
                          value={newListing.crop}
                          onChange={(e) => setNewListing({ ...newListing, crop: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          label="Quantity"
                          value={newListing.quantity}
                          onChange={(e) => setNewListing({ ...newListing, quantity: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField
                          fullWidth
                          label="Price per Unit"
                          value={newListing.price}
                          onChange={(e) => setNewListing({ ...newListing, price: e.target.value })}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleCreateListing}
                          sx={{ mt: 1 }}
                        >
                          List Your Crop
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;