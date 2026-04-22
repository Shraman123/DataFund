"use client"
import Link from 'next/link'
import { Server } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md border-border/50 shadow-xl">
        <CardHeader className="space-y-2 text-center pb-6">
           <Link href="/" className="w-12 h-12 rounded-md bg-primary flex items-center justify-center mx-auto mb-2 hover:opacity-90">
              <Server className="w-7 h-7 text-accent" />
           </Link>
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Start investing in data infrastructure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="new@example.com" />
            </div>
            <div className="space-y-2">
              <Label>Password</Label>
              <Input type="password" />
            </div>
            <div className="space-y-2">
              <Label>Confirm Password</Label>
              <Input type="password" />
            </div>
            <Link href="/dashboard" className="block pt-2">
              <Button className="w-full text-lg h-11">Create Account</Button>
            </Link>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account? <Link href="/login" className="text-primary hover:underline font-medium">Log in</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
