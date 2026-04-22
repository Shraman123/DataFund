import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, ShieldCheck, TrendingUp, Server, PlayCircle } from 'lucide-react'
import { mockProjects } from '@/lib/mock-data'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-accent/30">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <Server className="w-5 h-5 text-accent" />
            </div>
            <span className="font-bold text-xl tracking-tight">DataFund</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#how-it-works" className="hover:text-primary transition-colors">How it works</Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard (Demo)</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-primary hover:bg-primary/90 text-white">Start Investing</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 sm:py-32 lg:pb-32 lg:pt-40">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-primary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
          </div>
          
          <div className="container mx-auto px-4 text-center">
            <h1 className="max-w-4xl mx-auto text-5xl font-bold tracking-tight text-foreground sm:text-7xl mb-6">
              Own the <span className="text-primary">Internet.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground mb-10">
              Invest in high-yield data infrastructure projects and edge data centers across the globe. Start building your portfolio with as little as ₹5,000.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/projects">
                <Button size="lg" className="h-12 px-8 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg flex items-center gap-2">
                  Start Investing <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg flex items-center gap-2 border-primary/20 hover:bg-primary/5">
                  <PlayCircle className="w-5 h-5" /> How it works
                </Button>
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-border/50 max-w-3xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" /> Bank-level security
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" /> Target 12-18% IRR
              </div>
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-accent" /> Real physical assets
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
              <p className="mt-4 text-lg text-muted-foreground">Back the infrastructure powering the next generation of AI and cloud.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockProjects.map(project => (
                <Card key={project.id} className="overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 group">
                  <div className="h-48 w-full bg-muted relative overflow-hidden">
                    <img src={project.image_url} alt={project.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      Target: {project.expected_return_min}-{project.expected_return_max}%
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-1">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.location}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium text-primary">₹{(project.raised_amount).toLocaleString('en-IN')} raised</span>
                          <span className="text-muted-foreground">₹{(project.target_amount).toLocaleString('en-IN')}</span>
                        </div>
                        <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-accent h-full shadow-[0_0_10px_rgba(0,212,255,0.5)]" 
                            style={{ width: `${Math.min(100, (project.raised_amount / project.target_amount) * 100)}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div className="text-sm">
                          <p className="text-muted-foreground text-xs">Duration</p>
                          <p className="font-semibold">{project.duration_months} Months</p>
                        </div>
                        <div className="text-sm text-right">
                          <p className="text-muted-foreground text-xs">Risk Profile</p>
                          <p className="font-semibold text-primary">{project.risk_level}</p>
                        </div>
                      </div>
                      
                      <Link href={`/projects/${project.id}`} className="block mt-4">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-md">View Details</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 border-t border-border/50 bg-background text-center px-4">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            <strong>Simulation Disclaimer:</strong> DataFund is a simulated investment platform designed for demonstration purposes only. All projects, investments, user data, and financial returns shown are fictional. Do not enter real payment information. This platform does not offer real financial products or securities.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <Server className="w-3 h-3 text-accent" />
            </div>
            <span className="font-semibold">DataFund MVP</span>
          </div>
          <p className="text-sm text-muted-foreground">&copy; 2026 DataFund Simulator. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
