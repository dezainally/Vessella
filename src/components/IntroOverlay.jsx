import { useEffect, useState } from "react";
import "../styles/IntroOverlay.css";
import logo from "../assets/images/logo/logo.png";

export default function IntroOverlay({ onFinish }) {
  const [sweep, setSweep] = useState(false);
  const [clear, setClear] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setSweep(true), 600);   // start sweep
    const t2 = setTimeout(() => setClear(true), 1200);  // clear logo
    const t3 = setTimeout(() => {
      setHide(true);
      onFinish?.(); // ✅ notify App that intro is done
    }, 3500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onFinish]);

  if (hide) return null;

  return (
    <div className="intro-wrapper">
      <div className="background-layer" />

      <div className={`intro-content ${clear ? "clear" : ""}`}>
        <img src={logo} alt="Logo" />
      </div>

      <div className={`sweep-layer ${sweep ? "run" : ""}`} />
    </div>
  );
}
