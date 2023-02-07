import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const onClickIndo = ()=>{
    window.location.href = "https://drive.google.com/file/d/1Z7oeUJqglNacLHwrmceUqO-CBsNeT8kw/view?usp=share_link"
  }

  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="We are still upgrading our company profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/sangsakawira/image/upload/v1672973762/Screen_Shot_2023-01-06_at_09.49.43_ldwffg.png" />
      </Head>
      <main >
        
        <h5 className={inter.className} style={{fontSize:"50px", color:"black",textAlign:"center"}}>We are still upgrading our website</h5>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto",marginTop:"30px" }}>
          <img
            src="https://res.cloudinary.com/sangsakawira/image/upload/v1672973250/Screen_Shot_2023-01-06_at_09.47.15_tnqi2f.png"
            alt="Gawegawe Logo"
            style={{ maxWidth: "60%", height: "auto" }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto",marginTop:"60px" }}>
          <button style={{ padding: "20px",marginBottom: "60px"}} onClick={onClickIndo}>Download Company Profile</button>
        </div>
      </main>
    </>
  )
}
