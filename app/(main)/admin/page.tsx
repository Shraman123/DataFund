"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockProjects, mockInvestments } from "@/lib/mock-data"
import { ShieldCheck, Users, Activity } from "lucide-react"

export default function AdminPage() {
  const totalSystemInvestments = mockInvestments.reduce((acc, inv) => acc + inv.amount, 0)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Admin Control Panel</h1>
        <p className="text-muted-foreground">Manage platform settings, projects, and users.</p>
        <Badge variant="destructive" className="mt-2">Simulated Admin Environment</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-border/50 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Activity className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-bold text-xl">₹{totalSystemInvestments.toLocaleString('en-IN')}</h3>
          <p className="text-sm text-muted-foreground">Total Flow on Platform</p>
        </Card>
        <Card className="border-border/50 flex flex-col items-center justify-center p-6 text-center">
           <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-bold text-xl">1,240</h3>
          <p className="text-sm text-muted-foreground">Active Simulated Users</p>
        </Card>
        <Card className="border-border/50 flex flex-col items-center justify-center p-6 text-center">
           <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-bold text-xl">System Healthy</h3>
          <p className="text-sm text-muted-foreground">All servers operational</p>
        </Card>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Project Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockProjects.map(project => (
              <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg bg-card hover:bg-muted/50 transition-colors">
                <div>
                  <h4 className="font-bold">{project.name}</h4>
                  <p className="text-sm text-muted-foreground">Risk: {project.risk_score}/10 | Target: ₹{project.target_amount.toLocaleString('en-IN')}</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">Edit Demo</Badge>
                  <Badge variant="secondary">Freeze</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
