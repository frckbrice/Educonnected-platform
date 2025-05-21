import type { Metadata } from "next";
import { Poppins, Josefin_Sans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner"
// import { ThemeProvider } from "@/context/theme-provider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-Poppins",
  subsets: ["latin"],
  display: 'swap',
});

const josefin = Josefin_Sans({
  variable: "--font-Josefin",
  weight: ["400", "500", "600", "700",],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "EduconnectEd",
  description: "The application to easy teaching digitization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${josefin.variable} 
        !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black
          duration-300
        `}
      >
        <ThemeProvider attribute={"class"} defaultTheme="system" enableColorScheme>
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`${poppins.variable} ${josefin.variable} 
//           transition-colors duration-300 ease-in-out
//           bg-gradient-to-b from-white to-gray-50
//           dark:bg-gradient-to-b dark:from-gray-900 dark:to-black
//          min-h-screen `}
//       >
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
