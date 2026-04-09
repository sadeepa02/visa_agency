import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
export default async function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    // const cookieStore = await cookies()
    // const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
    return (

          <SidebarProvider>
            <AppSidebar />
            <main className="relative w-screen min-h-screen overflow-hidden bg-blue-50 dark:bg-blue-950">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 opacity-90 dark:from-slate-900 dark:via-blue-950 dark:to-slate-950" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_15%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.3),_transparent_20%)]" />
              <div className="absolute inset-0 backdrop-blur-2xl" />
              <div className="relative z-10">
                <SidebarTrigger />
                {children}
              </div>
            </main>
          </SidebarProvider>

    );
  }

  