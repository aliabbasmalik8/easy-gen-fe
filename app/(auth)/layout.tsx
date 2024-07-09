import Auth from "@/components/Auth"

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col justify-center h-screen items-center bg-auth-bg overflow-auto">
      <Auth auth={true}>
        {children}
      </Auth>
    </div>
  )
}