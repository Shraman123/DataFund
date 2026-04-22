"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockInvestments, mockProjects } from "@/lib/mock-data"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function PortfolioPage() {
  const investmentsWithDetails = mockInvestments.map(inv => {
    const proj = mockProjects.find(p => p.id === inv.project_id)
    return {
      ...inv,
      projectName: proj?.name || 'Unknown',
      riskScore: proj?.risk_score || 0,
      duration: proj?.duration_months || 0,
      targetReturn: `${proj?.expected_return_min}% - ${proj?.expected_return_max}%`
    }
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">My Portfolio</h1>
        <p className="text-muted-foreground">Track your ongoing data infrastructure investments.</p>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Active Investments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Target IRR</TableHead>
                <TableHead>Est. Duration</TableHead>
                <TableHead>Risk</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {investmentsWithDetails.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell className="font-medium text-primary">{inv.projectName}</TableCell>
                  <TableCell>₹{inv.amount.toLocaleString('en-IN')}</TableCell>
                  <TableCell>{inv.targetReturn}</TableCell>
                  <TableCell>{inv.duration} Months</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                       <span className="text-xs font-semibold">{inv.riskScore}/10</span>
                       <div className="w-16 h-1.5 bg-secondary rounded-full overflow-hidden">
                         <div className="h-full bg-accent" style={{ width: `${(inv.riskScore/10)*100}%` }}></div>
                       </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">Active</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
