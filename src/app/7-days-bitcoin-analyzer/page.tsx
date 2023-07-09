import { SevenDaysBitcoinAnalyzerView } from "@/app/7-days-bitcoin-analyzer/(sections)";
import React from "react";

export const metadata = {
  title: "7 Days Bitcoin Analyzer",
  description:
    "Gain valuable insights into the price trends of Bitcoin over the past 7 days with the 7 Days Bitcoin Analyzer. Track and analyze the historical price data of Bitcoin to stay informed about its performance in the cryptocurrency market. Whether you're a trader, investor, or simply curious about Bitcoin's price movements, this powerful tool provides you with a comprehensive analysis of its fluctuations, trends, and key indicators. Stay ahead of the curve and make informed decisions with the 7 Days Bitcoin Analyzer today.",
};

function SevenDaysBitcoinAnalyzer() {
  return <SevenDaysBitcoinAnalyzerView />;
}

export default SevenDaysBitcoinAnalyzer;
