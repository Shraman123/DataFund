"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockInvestments, mockProjects, generatePortfolioData } from "@/lib/mock-data"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Wallet, TrendingUp, Building } from 'lucide-react'

export default function DashboardPage() {
  const chartData = generatePortfolioData();
  const totalInvested = mockInvestments.reduce((acc, inv) => acc + inv.amount, 0);
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome back.</h1>
        <p className="text-muted-foreground">Here is an overview of your simulated investments.</p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Invested</CardTitle>
            <Wallet className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₹{totalInvested.toLocaleString('en-IN')}</div>
            <p className="text-xs text-muted-foreground mt-1">Across 2 projects</p>
          </CardContent>
        </Card>
        
        <Card className="border-border/50 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
            <CardTitle className="text-sm font-medium text-muted-foreground">Expected Target Returns</CardTitle>
            <TrendingUp className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent className="relative">
            <div className="text-2xl font-bold text-foreground">12.5% - 15.8%</div>
            <p className="text-xs text-accent mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +1.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/50 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Assets</CardTitle>
            <Building className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">5</div>
            <p className="text-xs text-muted-foreground mt-1">Data centers and nodes</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart Section */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Portfolio Performance</CardTitle>
          <p className="text-sm text-muted-foreground">Simulated growth over time based on project risk factors</p>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                <XAxis dataKey="name" className="text-xs" tick={{fill: '#64748b'}} tickLine={false} axisLine={false} />
                <YAxis className="text-xs" tick={{fill: '#64748b'}} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', borderRadius: '8px' }}
                  itemStyle={{ color: '#00D4FF' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#00D4FF" 
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#0A2540', stroke: '#00D4FF', strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: '#00D4FF' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
