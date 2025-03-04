import React, { useState } from 'react';
import { 
  Wallet, 
  Calculator, 
  TrendingUp, 
  BarChart2, 
  FileText, 
  DollarSign,
  Calendar,
  CreditCard,
  Percent
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FinancialTools: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [loanTerm, setLoanTerm] = useState<number>(36);
  const [interestRate, setInterestRate] = useState<number>(7);
  
  // Calculate EMI
  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const numberOfPayments = loanTerm;
    
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / 
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return isNaN(emi) ? "0.00" : emi.toFixed(2);
  };
  
  // Sample data for profit/loss chart
  const profitLossData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Income',
        data: [45000, 52000, 49000, 60000, 55000, 65000],
        borderColor: '#2E7D32',
        backgroundColor: 'rgba(46, 125, 50, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Expenses',
        data: [30000, 35000, 32000, 38000, 36000, 40000],
        borderColor: '#D32F2F',
        backgroundColor: 'rgba(211, 47, 47, 0.1)',
        tension: 0.4,
      },
    ],
  };
  
  // Sample subsidies data
  const subsidies = [
    {
      name: 'PM-KISAN',
      description: 'Direct income support of ₹6,000 per year to eligible farmer families',
      deadline: 'Sep 30, 2025',
      status: 'Open'
    },
    {
      name: 'Interest Subvention Scheme',
      description: '2% interest subsidy on crop loans up to ₹3 lakh',
      deadline: 'Ongoing',
      status: 'Open'
    },
    {
      name: 'Farm Machinery Subsidy',
      description: '50% subsidy on purchase of select agricultural machinery',
      deadline: 'Oct 15, 2025',
      status: 'Open'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Financial Tools</h1>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <button className="btn-outline">
            <FileText size={18} className="mr-2 inline" />
            Financial Reports
          </button>
          <button className="btn-primary">
            <Wallet size={18} className="mr-2 inline" />
            Apply for Loan
          </button>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card flex items-center">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <TrendingUp className="h-6 w-6 text-green-700" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Current Season Income</p>
            <p className="text-xl font-bold">₹2,85,000</p>
            <p className="text-sm text-green-600">↑ 12% from last season</p>
          </div>
        </div>

        <div className="card flex items-center">
          <div className="rounded-full bg-red-100 p-3 mr-4">
            <BarChart2 className="h-6 w-6 text-red-700" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Expenses</p>
            <p className="text-xl font-bold">₹1,65,000</p>
            <p className="text-sm text-red-600">↑ 5% from last season</p>
          </div>
        </div>

        <div className="card flex items-center">
          <div className="rounded-full bg-blue-100 p-3 mr-4">
            <DollarSign className="h-6 w-6 text-blue-700" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Net Profit</p>
            <p className="text-xl font-bold">₹1,20,000</p>
            <p className="text-sm text-blue-600">↑ 18% from last season</p>
          </div>
        </div>
      </div>

      {/* Loan Calculator */}
      <div className="card">
        <div className="flex items-center mb-4">
          <Calculator className="h-5 w-5 text-green-700 mr-2" />
          <h2 className="text-lg font-semibold text-gray-800">Agricultural Loan Calculator</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 mb-1">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                id="loan-amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="input-field"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700 mb-1">
                Loan Term (months)
              </label>
              <input
                type="number"
                id="loan-term"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="input-field"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700 mb-1">
                Interest Rate (% per annum)
              </label>
              <input
                type="number"
                id="interest-rate"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="input-field"
              />
            </div>
            
            <button className="btn-primary w-full">Calculate</button>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-3">Loan Summary</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Loan Amount:</span>
                <span className="font-medium">₹{loanAmount.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Loan Term:</span>
                <span className="font-medium">{loanTerm} months</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Interest Rate:</span>
                <span className="font-medium">{interestRate}% per annum</span>
              </div>
              
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly EMI:</span>
                  <span className="font-bold text-green-700">₹{calculateEMI()}</span>
                </div>
                
                <div className="flex justify-between mt-2">
                  <span className="text-gray-600">Total Interest:</span>
                  <span className="font-medium">₹{(Number(calculateEMI()) * loanTerm - loanAmount).toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between mt-2">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="font-medium">₹{(Number(calculateEMI()) * loanTerm).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <button className="btn-outline w-full text-sm">View Repayment Schedule</button>
            </div>
          </div>
        </div>
      </div>

      {/* Profit/Loss Analysis */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-green-700 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">Profit & Loss Analysis</h2>
          </div>
          <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
            <option>Last 6 Months</option>
            <option>Last Year</option>
            <option>Last 2 Years</option>
          </select>
        </div>
        
        <div className="h-64">
          <Line 
            data={profitLossData} 
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'bottom',
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }} 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm font-medium text-gray-600">Total Income</p>
            <p className="text-xl font-bold text-gray-800">₹3,26,000</p>
            <p className="text-xs text-green-600 mt-1">↑ 15% from previous period</p>
          </div>
          
          <div className="bg-red-50 p-3 rounded-lg">
            <p className="text-sm font-medium text-gray-600">Total Expenses</p>
            <p className="text-xl font-bold text-gray-800">₹2,11,000</p>
            <p className="text-xs text-red-600 mt-1">↑ 8% from previous period</p>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm font-medium text-gray-600">Net Profit</p>
            <p className="text-xl font-bold text-gray-800">₹1,15,000</p>
            <p className="text-xs text-blue-600 mt-1">↑ 22% from previous period</p>
          </div>
        </div>
      </div>

      {/* Available Subsidies */}
      <div className="card">
        <div className="flex items-center mb-4">
          <Percent className="h-5 w-5 text-green-700 mr-2" />
          <h2 className="text-lg font-semibold text-gray-800">Available Subsidies & Schemes</h2>
        </div>
        
        <div className="space-y-4">
          {subsidies.map((subsidy, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex justify-between items-center bg-gray-50 px-4 py-3">
                <h3 className="font-medium text-gray-800">{subsidy.name}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {subsidy.status}
                </span>
              </div>
              <div className="p-4">
                <p className="text-gray-600 mb-2">{subsidy.description}</p>
                <div className="flex items-center text-sm">
                  <Calendar size={16} className="text-gray-400 mr-1" />
                  <span className="text-gray-500">Deadline: {subsidy.deadline}</span>
                </div>
                <div className="mt-3 flex space-x-2">
                  <button className="btn-primary text-sm py-1.5">Apply Now</button>
                  <button className="btn-outline text-sm py-1.5">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center mb-4">
            <CreditCard className="h-5 w-5 text-green-700 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">Kisan Credit Card</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Access revolving credit for agricultural needs with subsidized interest rates and flexible repayment options.
          </p>
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Credit Limit</span>
              <span className="font-bold">₹3,00,000</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-700 font-medium">Interest Rate</span>
              <span className="font-bold">4% p.a.</span>
            </div>
          </div>
          <button className="btn-primary w-full">Apply for KCC</button>
        </div>
        
        <div className="card">
          <div className="flex items-center mb-4">
            <Wallet className="h-5 w-5 text-green-700 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">Crop Insurance</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Protect your crops against natural calamities, pests & diseases with government-subsidized premium rates.
          </p>
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Premium Rate</span>
              <span className="font-bold">1.5% - 5%</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-700 font-medium">Coverage</span>
              <span className="font-bold">Up to ₹50,000 per acre</span>
            </div>
          </div>
          <button className="btn-primary w-full">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default FinancialTools;