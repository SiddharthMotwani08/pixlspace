import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Login from "./Components/Login";
import SessionWrapper from "./Components/SessionWrapper"
import { getServerSession } from "next-auth";
import RightSidebar from "./Components/RightSidebar";
import Feed from "./Components/Feed";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children, context }) {

  const session = await getServerSession(context);
  

  if (!session) { 
    return ( 
    <html lang="en" suppressHydrationWarning={true}>
    <Login />
    <body className={inter.className}>
      {children}
      </body>
    </html>
 )}
  
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <SessionWrapper session={session}>
      <body className={inter.className}>
      {children}
      <Navbar />
      <main className='flex p-8 gap-20'>
      <Sidebar />
      <Feed />
      <RightSidebar />
      </main>
      </body>
      </SessionWrapper>
    </html>
  );

}

