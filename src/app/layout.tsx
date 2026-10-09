import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Mehedi Aziz | Senior Software Engineer",description:"Mehedi Aziz — Java, Spring Boot, microservices, AWS and AI engineering portfolio."};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
