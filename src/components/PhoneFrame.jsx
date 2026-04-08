import BottomNav from "../components/BottomNav";

export default function PhoneFrame({ children }) {
  return (
    <main className="page-shell">
      <section className="phone-frame">
        <div className="phone-screen">
          <div className="screen-scroll">{children}</div>
          <BottomNav/>
        </div>
      </section>
    </main>
  );
}
