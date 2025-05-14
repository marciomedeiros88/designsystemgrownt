import "./index.scss";
import { Copy } from "lucide-react"; // Ícone de copiar (lucide-react)
import React, { useState } from "react";

function Conteudotipografia() {
  const root = `:root {
    --fonte-titulos: "Bricolage Grotesque", sans-serif;
    --fonte-paragrafos: "DM Sans", sans-serif;
  }`;

  const [copied, setCopied] = useState(false);

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
      <section className="Sectiontipografia">
        <main className="Conteudotipografia">
          <div className="cardtipografia">
            <div className="titulocardtipografia">
              <p className="titulotipografia">Fonte títulos</p>
            </div>
            <div className="titulospecimen">
              <h1>
                Bricolage
                <br />
                Grotesque
              </h1>
            </div>
            <div className="paragrafospecimen">
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890</p>
              <p>!@#$%¨&*()`^[]~</p>
            </div>
            <div className="botao">
              <button>
                <a
                  href="https://fonts.google.com/specimen/DM+Sans"
                  target="_blank"
                >
                  Download
                </a>
              </button>
            </div>
          </div>
          <div className="cardtipografia">
            <div className="titulocardtipografia">
              <p className="titulotipografia">Fonte subtítulos</p>
            </div>
            <div className="subtitulospecimen">
              <h1>
                DM
                <br />
                Sans
              </h1>
            </div>
            <div className="subparagrafospecimen">
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890</p>
              <p>!@#$%¨&*()`^[]~</p>
            </div>
            <div className="botao">
              <button>
                <a
                  href="https://fonts.google.com/specimen/Bricolage+Grotesque"
                  target="_blank"
                >
                  Download
                </a>
              </button>
            </div>
          </div>
          <div className="cardtipografia">
            <div className="titulocardtipografia">
              <p className="titulotipografia">Variáveis</p>
            </div>
            <div className="blocoroottipo cinzaclarogrownt">
              <p>
                {" "}
                --fonte-titulos: "Bricolage Grotesque", sans-serif;
                <br />
                --fonte-paragrafos: "DM Sans", sans-serif;
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
        <main className="Conteudotipografia">
          <div className="cardtipografia">
            <div className="titulocardtipografia">
              <p className="titulotipografia">
                Exemplo de diagramação de texto
              </p>
            </div>
            <div className="pills">
              <div className="pillspecimen">
                <p>Títulos 38pt</p>
              </div>
              <div className="pillspecimen">
                <p>Paráfrafos 14pt</p>
              </div>
              <div className="pillspecimen">
                <p>Citação 12pt Italic</p>
              </div>
            </div>

            <div className="titulospecimen">
              <h1>Lorem ipsum dolor sit amen consec</h1>
            </div>
            <div className="paragrafo">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tincidunt rhoncus nibh vitae consequat. Donec finibus
                enim non nulla dapibus viverra. Phasellus nibh libero, pulvinar
                vitae turpis ac, tristique tincidunt magna. Vivamus aliquam ut
                felis vitae ultricies. Integer dignissim vulputate mattis.
                Maecenas ut turpis efficitur, imperdiet lorem ac, imperdiet
                justo. Nulla luctus, metus eu pharetra pulvinar, odio diam
                semper ex, vitae pharetra ipsum sem nec dolor. Aenean nisi arcu,
                ultrices sed sapien finibus, aliquam vehicula orci.
              </p>
            </div>

            <div className="paragrafocitacao">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tincidunt rhoncus nibh vitae consequat. Donec finibus
                enim non nulla dapibus viverra. Phasellus nibh libero, pulvinar
                vitae turpis ac, tristique tincidunt magna. Vivamus aliquam ut
                felis vitae ultricies. Integer dignissim vulputate mattis.
                Maecenas ut turpis efficitur, imperdiet lorem ac, imperdiet
                justo. Nulla luctus, me."
              </p>
            </div>

            <div className="paragrafo">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tincidunt rhoncus nibh vitae consequat. Donec finibus
                enim non nulla dapibus viverra. Phasellus nibh libero, pulvinar
                vitae turpis ac, tristique tincidunt magna. Vivamus aliquam ut
                felis vitae ultricies. Integer dignissim vulputate mattis.
                Maecenas ut turpis efficitur, imperdiet lorem ac, imperdiet
                justo. Nulla luctus, metus eu pharetra pulvinar, odio diam
                semper ex, vitae pharetra ipsum sem nec dolor. Aenean nisi arcu,
                ultrices sed sapien finibus, aliquam vehicula orci.
              </p>
            </div>
          </div>
        </main>
        {copied && <span className="spancopiado">Copiado!</span>}
      </section>
    </>
  );
}

export default Conteudotipografia;
