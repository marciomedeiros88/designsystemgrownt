import "./index.scss";
import { Copy } from "lucide-react"; // Ícone de copiar (lucide-react)
import React, { useState } from "react";

function Conteudocores() {
  const laranjagrownt = "#F15F38";
  const azulgrownt = "#1A2437";
  const azulclarogrownt = "#B8C9D3";
  const azulmediogrownt = "#99C5C8";
  const begegrownt = "#DFDECB";
  const cinzagrownt = "#697480";

  const root = `:root {
    --laranja: #f15f38;
    --laranja-escuro: #ee3000;
    --azul-claro: #b8c9d3;
    --azul-escuro: #1a2437;
    --bege: #dfdecb;
    --azul-medio: #99c5c8;
    --cinza: #697480;
    --cinza-claro: #f0f2f4;
    --vermelho: #f03e3e;
    --vermelho-escuro: #9b1e1e;
    --verde-light: #E8F6EA;
    --verde: #3c9c16;
    --amarelo-light: #FFE3BA;
    --amarelo: #e6931a;
    --vermelho-light: #FFE7E7;
    --vermelho: #f03e3e;
    --azul-light:#CEE3FF;
    --azul: #217EFD;
    --lilas-light: #C8A9FF;
    --lilas: #8749F3;
  }`;

  const [copied, setCopied] = useState(false);

  const handleCopy = async (cor) => {
    const cores = [
      laranjagrownt,
      azulgrownt,
      azulclarogrownt,
      azulmediogrownt,
      begegrownt,
      cinzagrownt,
    ];

    try {
      await navigator.clipboard.writeText(cor);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Resetar após 2 segundos
    } catch (err) {
      console.error("Erro ao copiar!", err);
    }
  };

  const handleCopyRoot = async (root) => {
    try {
      await navigator.clipboard.writeText(root);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Resetar após 2 segundos
    } catch (err) {
      console.error("Erro ao copiar!", err);
    }
  };

  return (
    <>
      <section className="Sectioncores">
        <main className="Conteudocores">
          <div className="cardcores">
            <div className="titulocardcores">
              <p className="titulocores">Laranja primário</p>
            </div>
            <div className="titulocor">
              <h1>Laranja Gröwnt</h1>
            </div>
            <div className="blococor laranjagrownt fontebranca">
              <p>CMYK: C0/ M78 / Y85 / K0</p>
              <p>RGB: R241 / G95 / B56</p>
              <p>
                WEB: {laranjagrownt}
                <Copy
                  onClick={() => handleCopy(laranjagrownt)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocardcores">
              <p className="titulocores">Azul primário</p>
            </div>
            <div className="titulocor">
              <h1>Azul Gröwnt</h1>
            </div>
            <div className="blococor azulgrownt fontebranca">
              <p>CMYK: C88 / M77 / Y49 / K59</p>
              <p>RGB: R26 / G36 / B55</p>
              <p>
                WEB: {azulgrownt}
                <Copy
                  onClick={() => handleCopy(azulgrownt)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
        </main>
        <main className="Conteudocores">
          <div className="cardcores">
            <div className="titulocardcores">
              <p className="titulocores">Azul secundário</p>
            </div>
            <div className="titulocor">
              <h2>Azul Claro Gröwnt</h2>
            </div>
            <div className="blococorsecundaria azulclarogrownt fonteazulescuro">
              <p>CMYK: C11 / M0 / Y0 / K20</p>
              <p>RGB: R184 / G201 / B211</p>
              <p>
                WEB: {azulclarogrownt}
                <Copy
                  onClick={() => handleCopy(azulclarogrownt)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocardcores">
              <p className="titulocores">Azul terciário</p>
            </div>
            <div className="titulocor">
              <h2>Azul Médio Gröwnt</h2>
            </div>
            <div className="blococorsecundaria azulmediogrownt fonteazulescuro">
              <p>CMYK: C40 / M9 / Y20 / K0</p>
              <p>RGB: R153 / G197 / B200</p>
              <p>
                WEB: {azulmediogrownt}
                <Copy
                  onClick={() => handleCopy(azulmediogrownt)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocardcores">
              <p className="titulocores">Bege terciário</p>
            </div>
            <div className="titulocor">
              <h2>Bege Gröwnt</h2>
            </div>
            <div className="blococorsecundaria begegrownt fonteazulescuro">
              <p>CMYK: C12 / M8 / Y20 / K0</p>
              <p>RGB: R223/ G222 / B203</p>
              <p>
                WEB: {begegrownt}
                <Copy
                  onClick={() => handleCopy(begegrownt)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocardcores">
              <p className="titulocores">Cinza terciário</p>
            </div>
            <div className="titulocor">
              <h2>Cinza Gröwnt</h2>
            </div>
            <div className="blococorsecundaria cinzagrownt fontebranca">
              <p>CMYK: C17 / M5 / Y0 / K60</p>
              <p>RGB: R105 / G116 / B128</p>
              <p>
                WEB: {cinzagrownt}
                <Copy
                  onClick={() => handleCopy(cinzagrownt)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
        </main>
        <main className="Conteudocores">
          <div className="cardcores">
            <div class="titulocor">
              <h2>Variáveis</h2>
            </div>
            <div className="blocoroot cinzaclarogrownt fonteazulescuro">
              <p>
                {" "}
                --laranja: #f15f38;
                <br />
                --laranja-escuro: #ee3000;
                <br />
                --azul-light: #CEE3FF;
                <br />
                --azul: #217EFD;
                <br />
                --azul-claro: #b8c9d3;
                <br />
                --azul-escuro: #1a2437;
                <br />
                --azul-medio: #99c5c8;
                <br />
                --bege: #dfdecb;
                <br />
                --cinza: #697480;
                <br />
                --cinza-claro: #f0f2f4;
                <br />
                --vermelho: #f03e3e;
                <br />
                --vermelho-escuro: #9b1e1e;
                <br />
                --verde-light: #E8F6EA;
                <br />
                --verde: #3c9c16;
                <br />
                --amarelo-light: #FFE3BA;
                <br />
                --amarelo: #e6931a;
                <br />
                --vermelho-light: #FFE7E7;
                <br />
                --vermelho: #f03e3e;
                <br />
                --lilas-light: #C8A9FF;
                <br />
                --lilas: #8749F3;
              </p>
              <p>
                <Copy
                  onClick={() => handleCopyRoot(root)}
                  className="iconCopyRoot"
                  title="Copiar variáveis"
                />
              </p>
            </div>
          </div>
        </main>
        {copied && <span className="spancopiado">Copiado!</span>}
      </section>
    </>
  );
}

export default Conteudocores;
