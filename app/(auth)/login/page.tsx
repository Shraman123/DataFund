"use client"
import Link from 'next/link'
import { Server } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md border-border/50 shadow-xl">
        <CardHeader className="space-y-2 text-center pb-6">
           <Link href="/" className="w-12 h-12 rounded-md bg-primary flex items-center justify-center mx-auto mb-2 hover:opacity-90">
              <Server className="w-7 h-7 text-accent" />
           </Link>
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          <CardDescription>Enter your email to sign in to your mock account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="mock@example.com" defaultValue="mock@example.com" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" defaultValue="password" />
            </div>
            <Link href="/dashboard" className="block pt-2">
              <Button className="w-full text-lg h-11">Sign In</Button>
            </Link>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account? <Link href="/signup" className="text-primary hover:underline font-medium">Sign up</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
