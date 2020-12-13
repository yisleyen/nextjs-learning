import MasterPage from "../components/master-page"
import Head from "next/head"

function HomePage() {
  return <MasterPage>
    <head>
      <title>Homepage - Nextjs Learning</title>
    </head>
    <h1>Welcome to Next.js!</h1>
  </MasterPage>
}

export default HomePage