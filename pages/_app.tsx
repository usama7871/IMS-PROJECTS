// pages/_app.tsx

import { AppProps } from "next/app";
import Head from "next/head";
import Link from 'next/link';
import "../styles/globals.css"; // Ensure this file includes global resets and utility classes

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Responsive and polished Next.js App" />
        <meta name="author" content="Usama Abdullah" />
        <meta charSet="UTF-8" />
        <title>My IMS Projects</title>
      </Head>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          overflowX: "hidden",
          background: "linear-gradient(135deg, #005b96, #00bfff)", // Responsive gradient background
          color: "#fff", // Ensure text is readable
        }}
      >
        {/* Header */}
        <header style={{ padding: "20px", backgroundColor: "rgba(0, 91, 150, 0.9)" }}>
          <div className="header-content">
            <h1 className="site-title" style={{ margin: 0 }}>My IMS Projects</h1>
            <nav>
              <Link href="/" className="nav-link" style={{ marginRight: "15px" }}>
                Home
              </Link>
              <Link href="/about" className="nav-link" style={{ marginRight: "15px" }}>
                About Me
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main
          style={{
            flex: "1 0 auto",
            width: "100%",
            maxWidth: "1200px",
            margin: "20px auto",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Component {...pageProps} />
        </main>

        {/* Footer */}
        <footer
          style={{
            flexShrink: 0,
            width: "100%",
            padding: "10px 20px",
            textAlign: "center",
            backgroundColor: "rgba(0, 91, 150, 0.8)",
            color: "#fff",
            fontSize: "0.9rem",
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Usama Abdullah. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default MyApp;
