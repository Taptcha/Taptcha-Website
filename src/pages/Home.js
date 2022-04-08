import '../css/Home.module.css';
import Header from "../components/Header";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Header />

      <div className="content" style={{
        width: "62.5rem",
        margin: "3.125rem auto"
      }}>
        <Hero />
      </div>
    </>
  );
}

export default Home;