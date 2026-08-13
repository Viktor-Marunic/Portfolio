import mainPicture from "../assets/Main_picture.jpg";
import vector from "../assets/vector1.svg"

export default function Hero() {
  return (
    <section className="hero-bleed">
      <img src={vector} alt="" className="hero-corner-vector"/>
      <div className="hero-inner hero-inner-full">
        <div className="hero-layout">
          <div className="hero-copy-wrap">
            <h2 className="hero-title">
              Coding with <span className="accent-text">Passion</span>
            </h2>
            <p className="hero-copy">
              while making modern <span className="baccent-text">solutions</span> and learning in process
            </p>

            <div className="cta-row hero-cta-row">
              <a href="#projects" className="btn btn-primary">
                See projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact
              </a>
            </div>
          </div>

          <div className="hero-photo-slot" aria-label="Photo placeholder">
            <img src={mainPicture} alt="Portrait" className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}
