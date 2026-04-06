import PhoneFrame from "../components/PhoneFrame";
import StatusBar from "../components/StatusBar";
import BottomNav from "../components/BottomNav";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <PhoneFrame>
      <StatusBar />
      <Hero eyebrow="Class Project" title="Allergy Ward">
        <p className="hero-copy">
          This is an allergy management app designed to help users track and manage their allergies.
        </p>
      </Hero>

      <section className="content">
        <article className="card card-highlight">
          <p className="card-label">Active Allergies</p>
          <h2>Replace this with list of allergies</h2>
          <button className="primary-button">View</button>
        </article>

        <article className="card">
          <p className="card-label">Screen Sections</p>
          <ul className="feature-list">
            <li>Header / branding area</li>
            <li>Main content card</li>
            <li>Action button</li>
            <li>Bottom navigation</li>
          </ul>
        </article>
      </section>
      <article className="card stats-card">
            <a className="stat" href="#scan">
              <span className="primary-button" type="button">Scan</span>
            </a>
            <a className="search" href="#search">
              <span className="primary-button" type="button">Search</span>
            </a>
          </article>
      <BottomNav />
    </PhoneFrame>
  );
}
