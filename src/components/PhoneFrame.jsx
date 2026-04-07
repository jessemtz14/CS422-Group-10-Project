export default function PhoneFrame({ children }) {
  return (
    <main className="page-shell">
      <section className="phone-frame">
        <div className="phone-screen">{children}</div>
      </section>
    </main>
  );
}
