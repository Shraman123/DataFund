"use client"

import { use, useState } from "react"
import { mockProjects, generateChartData } from "@/lib/mock-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ArrowLeft, ShieldAlert, Target, Clock, MapPin, CheckCircle2, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const project = mockProjects.find(p => p.id === resolvedParams.id)
  
  const [amount, setAmount] = useState<string>("10000")
  const [simulating, setSimulating] = useState(false)
  const [success, setSuccess] = useState(false)

  if (!project) return <div className="text-center py-20">Project not found</div>

  const chartData = generateChartData(project.duration_months, 100000, project.risk_score)

  const handleInvest = () => {
    setSimulating(true)
    setTimeout(() => {
      setSimulating(false)
      setSuccess(true)
    }, 1500)
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      <Link href="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Details */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <div className="flex items-center justify-between mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                Data Infrastructure
              </Badge>
              {project.risk_level === 'Low' && <Badge variant="outline" className="text-green-500 border-green-500/30">Low Risk</Badge>}
              {project.risk_level === 'Medium' && <Badge variant="outline" className="text-yellow-500 border-yellow-500/30">Medium Risk</Badge>}
              {project.risk_level === 'High' && <Badge variant="outline" className="text-red-500 border-red-500/30">High Risk</Badge>}
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">{project.name}</h1>
            <p className="text-muted-foreground flex items-center gap-2 text-lg">
              <MapPin className="w-5 h-5" /> {project.location}
            </p>
          </div>

          <div className="w-full h-80 rounded-xl overflow-hidden relative">
            <img src={project.image_url} alt={project.name} className="w-full h-full object-cover" />
          </div>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" /> Financial Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Target Amount</p>
                  <p className="text-xl font-bold">₹{project.target_amount.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Target IRR</p>
                  <p className="text-xl font-bold text-accent">{project.expected_return_min}% - {project.expected_return_max}%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Duration</p>
                  <p className="text-xl font-bold">{project.duration_months} Months</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Risk Score</p>
                  <p className="text-xl font-bold">{project.risk_score}/10</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Funding Progress</span>
                  <span className="text-muted-foreground">{Math.round((project.raised_amount / project.target_amount) * 100)}%</span>
                </div>
                <div className="w-full bg-secondary h-3 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-full transition-all duration-1000" 
                    style={{ width: `${Math.min(100, (project.raised_amount / project.target_amount) * 100)}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  ₹{project.raised_amount.toLocaleString('en-IN')} raised of ₹{project.target_amount.toLocaleString('en-IN')} goal
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" /> Expected Return Trajectory
              </CardTitle>
              <p className="text-sm text-muted-foreground">Illustration based on a base investment of ₹1,00,000</p>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" vertical={false} />
                    <XAxis dataKey="month" className="text-xs" tick={{fill: '#64748b'}} tickLine={false} axisLine={false} />
                    <YAxis className="text-xs" tick={{fill: '#64748b'}} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value/1000}k`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', borderRadius: '8px' }}
                      itemStyle={{ color: '#00D4FF' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#0A2540" 
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6, fill: '#00D4FF', stroke: '#00D4FF' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Invest Modal */}
        <div>
          <Card className="border-primary/20 shadow-xl sticky top-24">
            <CardHeader className="bg-primary/5 rounded-t-xl pb-6">
              <CardTitle>Invest Now</CardTitle>
              <p className="text-sm text-muted-foreground">Join 1,000+ others in funding this infrastructure.</p>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-secondary/50 p-4 rounded-lg">
                  <span className="font-medium">Min Investment</span>
                  <span className="font-bold">₹5,000</span>
                </div>
                
                <div className="space-y-2">
                  <Label>Investment Amount (₹)</Label>
                  <Input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-lg bg-background"
                  />
                </div>

                <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg flex gap-3">
                  <ShieldAlert className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">AI Risk Score: {project.risk_score}/10.</strong> 
                    {project.risk_score > 6 
                      ? " This is a volatile asset. Returns might fluctuate heavily compared to the base target." 
                      : " This is a relatively stable asset. Returns are expected to be consistent."}
                  </div>
                </div>
              </div>

              <Dialog>
                {/* @ts-expect-error Radix asChild type mismatch */}
                <DialogTrigger asChild>
                  <Button className="w-full text-lg h-12">Simulate Investment</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  {!success ? (
                    <>
                      <DialogHeader>
                        <DialogTitle>Confirm Investment</DialogTitle>
                        <DialogDescription>
                          You are about to invest ₹{parseInt(amount).toLocaleString('en-IN')} in {project.name}.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Amount</span>
                          <span className="font-bold">₹{parseInt(amount).toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Est. Maturity</span>
                          <span className="font-bold">{project.duration_months} Months</span>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button className="w-full" onClick={handleInvest} disabled={simulating}>
                          {simulating ? "Processing..." : "Confirm & Pay (Mock)"}
                        </Button>
                      </DialogFooter>
                    </>
                  ) : (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <DialogTitle className="text-2xl">Investment Successful!</DialogTitle>
                      <DialogDescription>
                        You have successfully invested ₹{parseInt(amount).toLocaleString('en-IN')} in {project.name}.
                        This will now appear in your portfolio.
                      </DialogDescription>
                      <Link href="/portfolio">
                        <Button className="mt-4" variant="outline">Go to Portfolio</Button>
                      </Link>
                    </div>
                  )}
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
