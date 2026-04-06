import { NavLink } from "react-router-dom";

function Title({t, back}) {
  if(back != undefined) {
    return  <h1><NavLink to={back}>← </NavLink>{t}</h1>
  }
  return  <h1>{t}</h1>
}

export default function Hero({ eyebrow, title, children, back }) {
  return (
    <section className="hero">
      <p className="eyebrow">{eyebrow}</p>
      <Title t={title} back={back}></Title>
      {children}
    </section>
  );
}
