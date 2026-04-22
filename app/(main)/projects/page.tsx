"use client"

import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { mockProjects } from "@/lib/mock-data"

export default function ExploreProjectsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Explore Projects</h1>
        <p className="text-muted-foreground">Discover high-yield data infrastructure opportunities.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockProjects.map(project => (
          <Card key={project.id} className="overflow-hidden border-border/50 hover:border-primary/30 transition-colors group">
            <div className="h-56 w-full bg-muted relative overflow-hidden">
              <img src={project.image_url} alt={project.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Badge variant="secondary" className="bg-background/90 backdrop-blur-md hover:bg-background/90 text-foreground font-semibold shadow-sm">
                  {project.expected_return_min}% - {project.expected_return_max}% IRR
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.location}</p>
                </div>
                {project.risk_level === 'Low' && <Badge variant="outline" className="text-green-500 border-green-500/30">Low Risk</Badge>}
                {project.risk_level === 'Medium' && <Badge variant="outline" className="text-yellow-500 border-yellow-500/30">Medium Risk</Badge>}
                {project.risk_level === 'High' && <Badge variant="outline" className="text-red-500 border-red-500/30">High Risk</Badge>}
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">₹{(project.raised_amount).toLocaleString('en-IN')}</span>
                    <span className="text-muted-foreground">Target: ₹{(project.target_amount).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="w-full bg-secondary h-2.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-full transition-all duration-1000" 
                      style={{ width: `${Math.min(100, (project.raised_amount / project.target_amount) * 100)}%` }}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/50">
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Duration</p>
                    <p className="font-semibold">{project.duration_months} Months</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">AI Risk Score</p>
                    <p className="font-semibold">{project.risk_score}/10</p>
                  </div>
                </div>
                
                <Link href={`/projects/${project.id}`} className="block mt-2">
                  <Button className="w-full">Invest</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
