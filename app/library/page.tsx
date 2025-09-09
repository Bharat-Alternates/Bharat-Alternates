"use client"

import Link from "next/link"
import styles from "./library.module.css"

const videos = [
 
  { id: "pX-dyPoL7HA", title: "Why Smart Money Loves July — Nifty’s 90% Hit Rate Explained" },
  { id: "AOWZMaqJcuQ", title: "Is ICICI PMS Beating the Market in 2025? Full Review" },
  { id: "dhFHPY66wHQ", title: "5 Reasons We’re in a Bull Market NOW 🚀📈 (Don’t Miss This!)" },
  { id: "3l6Q2QQ9lQ4", title: "ValueQuest PMS Review May 2025: Mr. Ravi Dharamshi’s Alpha—Still Intact?" },
  { id: "lk-QmEdrpy0", title: "Motilal Oswal PMS May 2025 Returns | Outperformance or Disappointment? " },
  { id: "XwR0HpZVmYo", title: "Unifi PMS May 2025 Returns Out! | Good or bad for investors? " },
  { id: "DqeQOfmcO0Q", title: "Sunil Singhania’s Abakkus Delivers +8% in May 2025! 🔥" },
  { id: "EtdOcVMfnN4", title: "Why Smart Investors Prefer Large AUM Funds 💰📈" },
  { id: "8hkV6MWh2lw", title: "40% Discount on HDB Financials IPO? | The truth No One's telling you! " },
  { id: "GipRIMzX0Y8", title: "Marcellus PMS Update May 2025? |Investors must watch! " },
  { id: "ofrsqgf1HpY", title: "Adani Ports in Trouble? CFO Breaks Silence!" },
  { id: "JYzS6mFT7VA", title: "Big Moves by Fund Managers in May 2025! " },
  { id: "9yd6HHooqgA", title: "Made in India Phones Are Taking Over the World? " },
  { id: "tdHv-J30Wgw", title: "Top 5 Biggest PMS in India by AUM 💰 As on May 2025 | " },
  { id: "MnguLVgvxXg", title: "Lenskart Hits $6.1 BILLION Valuation! 💸🔥" },
  { id: "EzwyEqEbod8", title: "Shocking! PSU Banks Beat Private Banks in Loan Growth 📈💥" },
  { id: "Ffqgqw6sOBc", title: "This Company Makes Money Every Time you buy shares!" },
  { id: "5J6fV201t3Y", title: "Top 5 Performing PMS in May 2025 | Best performing PMS in May 2025" },
  { id: "TMkPR7Q3NE8", title: "The Truth Behind NSE IPO Delay | SEBI, Scams & More!" },
  { id: "gYg6xBoYFAA", title: "TOP 5 Features of Alternative Investment (AIF) Fund every HNI must know " },
  { id: "Iz1QJFDl0E0", title: "Why LIC Is NOT in Nifty 50? Shocking Truth!" },
  { id: "Wo3HFhJpg6Y", title: "Tata Sons Invests ₹30,000 Cr to Boost India’s Digital, Defence & Aviation Sectors" },
  { id: "_hSfmPQ444M", title: "India's Q4 GDP Shocks the World! 🌍📈 " },
  { id: "vfzmEmvCtgI", title: "Sunil Singhania’s Big Move! 🔥 Abakkus to Launch Mutual Fund?" },
  { id: "bW46p9rc6Lk", title: "Policybazaar's Profit Soars 185% in Q4! | ₹171 Cr Net Profit | FY25 Highlights" },
  { id: "Ji_-huvK58I", title: "Unlisted Shares in India: Hidden Gems or Risky Bets? " },
  { id: "qGkuwgfKF14", title: "Why Gold Rises When Stocks Crash 💥📉" },
  { id: "n6P-_l72SWU", title: "Vodafone Idea May Shut Down? ₹30,000 Cr at Stake?" },
  { id: "2YBhdTd3J-E", title: "NRIs & HNIs: GIFT City AIFs vs Domestic AIFs – Where Should You Invest in 2025?" },
  { id: "87w8UzUp9_I", title: "The #1 Metric Smart Investors Use to Choose the Right PMS" },
  { id: "7CNxfF5ehg0", title: "Choosing a PMS? Don’t Just Look at Sharpe Ratio" },
  { id: "6KNMdjs64tc", title: "Why GIFT City AIFs Are a Game-Changer for NRIs 🌐" },
  { id: "qlqf6XrU9xA", title: "Portfolio Management Explained! Take Control of Your Investments" },
  { id: "PFdAFE8Zv10", title: "What is Scuttlebutt Investing? | Smart Investing" },
  { id: "veOTOHAUwZA", title: "PMS vs Mutual Fund – Want to grow your wealth faster" },
  { id: "sdkeM63wnTI", title: "High-Income NRIs: Pay Zero Tax on Mutual Funds (Legally!)" },
  { id: "P_SF9CuO70s", title: "SEBI's New ₹10 Lakh Investment Scheme | SIF Explained" },
  { id: "wMH08nSgv-I", title: "Vodafone Idea's ₹2.16 Lakh Cr Debt: A Deep Dive" },
  { id: "gxU96FmAO20", title: "Mutual Fund vs PMS: Which Investment Style Suits You Best?" },
  { id: "X6gbJDoWge8", title: "Taxation in 2025: Don't Miss These Key Changes!" },
  { id: "u5d4OV7cuoQ", title: "PMS Fees Explained Simply | Hurdle Rate & High Water Mark Made" },
  { id: "UlA39A6bvTM", title: "What Are Alternative Investment Funds (AIFs)? A Simple Guide for HNIs" },
  { id: "od0veNAto1E", title: "Diversification Is Killing Your Investment Portfolio — Here's Why" },
  { id: "w79FkSfNIpw", title: "3 Key Mistakes you Must Avoid While Selecting PMS" },
  { id: "dW7Vmp_HuuE", title: "How NRIs Can Invest in PMS (Step-by-Step)" },
  { id: "Dg2kRFYbeqM", title: "What really happened at IndusInd Bank? A ₹2,100 crore derivatives loss" },
  { id: "_RNrINmBuNY", title: "India vs USA Bond Market 2025: Where Should You Invest?" },
  { id: "6a-1aeQZ9P8", title: "Mark Mobius Moves 95% to Cash | Why India May Emerge Stronger" },
  { id: "t6usdblgWvA", title: "What the Top 1% NRIs Are Doing With ₹50 Lakhs in 2025" },
  { id: "4NgRHtqGa8c", title: "Mutual Funds vs PMS: Why Most Investors Choose the Simpler Path!" }
];

export default function LibraryPage() {
  return (
    <div className="relative min-h-screen">
      <div className={styles.background}></div>
      <div className={styles.backgroundTexture}></div>

      <div className="relative z-10">
        <h1 className={styles.categoriesTitle}>Investment Insights</h1>

        <section className={styles.carousel}>
          <div className={styles.carouselContainer}>
            {videos.map((video) => (
              <div key={video.id} className={styles.carouselItem}>
                <Link href={`https://www.youtube.com/shorts/${video.id}`} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                    className={styles.carouselItemImg}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/app/library/fallback-thumbnail.png"; }}
                  />
                  <div className={styles.carouselItemDetails}>
                    <div className={styles.controls}>
                      <span>▶</span>
                    </div>
                    <h5 className={styles.detailsTitle}>{video.title}</h5>
                    <h6 className={styles.detailsSubtitle}>Bharat Alternates</h6>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
