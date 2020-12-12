import Navigation from "../components/navigation";

function MasterPage({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <footer>2020</footer>
    </div>
  );
}

export default MasterPage;
