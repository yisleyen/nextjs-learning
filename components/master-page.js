import Navigation from "../components/navigation";
import Head from "next/head"

function MasterPage({ children }) {
  return (
    <div>
      <head>
        <title>Nextjs Learning</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <Navigation />
      <main>{children}</main>
      <footer>2020</footer>
    </div>
  );
}

export default MasterPage;
