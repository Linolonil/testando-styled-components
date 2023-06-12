import MinhaImagem1 from "../assets/Celtic-Knot-Mandala-8.png";
import MinhaImagem2 from "../assets/16-1.png";
import MinhaImagem3 from "../assets/dedo.jpg";

function Header() {
  return (
    <>
      <header>
        <img className="img-redonda1" width={459} src={MinhaImagem1} alt="ok" />
        <img className="img-redonda2" width={259} src={MinhaImagem2} alt="ok" />
        <img className="img-redonda3" width={159} src={MinhaImagem3} alt="ok" />
      </header>
    </>
  );
}

export default Header;
