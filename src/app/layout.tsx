import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar, OpenAiInputKey } from "@/app/(sections)";
import { GlobalContextProvider } from "@/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // incentiveai is a project that has tools uses openai api like youtube video summarizer, bitcoin price prediction, and more
  title: {
    template: "%s | IncentiveAi",
    default: "IncentiveAi",
  },
  description:
    "IncentiveAi is a project that has tools uses openai api like youtube video summarizer, bitcoin price prediction, meal planner, image generator, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <Navbar />
          <OpenAiInputKey />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
