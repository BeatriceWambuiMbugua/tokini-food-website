import './globals.css'
import { Didact_Gothic } from 'next/font/google'
import { Poppins } from 'next/font/google'




const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ['latin']})
const didact = Didact_Gothic({
  weight: ['400'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Tokini - Food Website',
  description: 'Discover from the Kitchen',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${didact.className}`}>
     
      {children}</body>
    </html>
  )
}
