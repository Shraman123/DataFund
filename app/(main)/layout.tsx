import Link from 'next/link'
import { Server, LayoutDashboard, FolderKanban, Wallet, Settings } from 'lucide-react'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <aside className="w-64 border-r bg-card hidden md:block">
        <div className="p-6 flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <Server className="w-5 h-5 text-accent" />
            </div>
            <span className="font-bold text-xl tracking-tight">DataFund</span>
          </Link>
        </div>
        <nav className="px-4 py-2 space-y-2 mt-4">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/10 hover:text-accent text-foreground text-sm font-medium transition-colors">
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Link>
          <Link href="/projects" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/10 hover:text-accent text-foreground text-sm font-medium transition-colors">
            <FolderKanban className="w-4 h-4" /> Explore Projects
          </Link>
          <Link href="/portfolio" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/10 hover:text-accent text-foreground text-sm font-medium transition-colors">
            <Wallet className="w-4 h-4" /> Portfolio
          </Link>
          
          <div className="pt-8 mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">System</div>
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent/10 hover:text-accent text-muted-foreground text-sm font-medium transition-colors">
            <Settings className="w-4 h-4" /> Admin Panel
          </Link>
        </nav>
      </aside>
      <main className="flex-1 flex flex-col h-screen overflow-auto">
        <header className="h-16 border-b bg-card flex items-center justify-between px-6 md:hidden">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <Server className="w-5 h-5 text-accent" />
            </div>
            <span className="font-bold tracking-tight">DataFund</span>
          </Link>
        </header>
        <div className="flex-1 p-6 lg:p-10">
          {children}
        </div>
      </main>
    </div>
  )
}
