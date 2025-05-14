import "./index.scss";
import { Copy } from "lucide-react"; // Ícone de copiar (lucide-react)
import React, { useState } from "react";

function Conteudocoressistema() {
  const laranja50 = "#db4e2f";
  const laranja100 = "#dc7a5f";
  const laranja200 = "#f15f28";
  const laranja300 = "#e94e33";
  const laranja400 = "#f54116";
  const laranja500 = "#f55820";
  const laranja600 = "#f5641c";
  const laranja700 = "#f5791d";
  const laranja800 = "#f58d20";
  const laranja900 = "#f58e3e";
  const laranja950 = "#ffb600";

  const azul50 = "#122d44";
  const azul100 = "#1e3a59";
  const azul200 = "#084b77";
  const azul300 = "#436184";
  const azul400 = "#7590ae";
  const azul500 = "#b6c6d9";
  const azul600 = "#cae3ff";
  const azul700 = "#a0ccff";
  const azul800 = "#34a9e6";
  const azul900 = "#2b7adc";
  const azul950 = "#1e4a94";

  const verde50 = "#1e4f0b";
  const verde100 = "#2e7811";
  const verde200 = "#3c9c16";
  const verde300 = "#37930c";
  const verde400 = "#4dc91c";
  const verde500 = "#8ee068";

  const vermelho50 = "#740d0d";
  const vermelho100 = "#961111";
  const vermelho200 = "#b81414";
  const vermelho300 = "#d31c1c";
  const vermelho400 = "#e41a1a";
  const vermelho500 = "#ff3e3e";

  const amarelo50 = "#f47a00";
  const amarelo100 = "#ff9810";
  const amarelo200 = "#e6931a";
  const amarelo300 = "#f4a337";
  const amarelo400 = "#ffbe7d";
  const amarelo500 = "#fcdfbe";

  const lilas50 = "#5f36ce";
  const lilas100 = "#713de2";
  const lilas200 = "#8749F3";
  const lilas300 = "#9062f4";
  const lilas400 = "#9b7af4";
  const lilas500 = "#b09bf9";

  const [copied, setCopied] = useState(false);

  const handleCopy = async (cor) => {
    const cores = [
      laranja50,
      laranja100,
      laranja200,
      laranja300,
      laranja400,
      laranja500,
      laranja600,
      laranja700,
      laranja800,
      laranja900,
      laranja950,
      azul50,
      azul100,
      azul200,
      azul300,
      azul400,
      azul500,
      azul600,
      azul700,
      azul800,
      azul900,
      azul950,
      vermelho50,
      vermelho100,
      vermelho200,
      vermelho300,
      vermelho400,
      vermelho500,
      verde50,
      verde100,
      verde200,
      verde300,
      verde400,
      verde500,
      amarelo50,
      amarelo100,
      amarelo200,
      amarelo300,
      amarelo400,
      amarelo500,
      lilas50,
      lilas100,
      lilas200,
      lilas300,
      lilas400,
      lilas500,
    ];

    try {
      await navigator.clipboard.writeText(cor);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000); // Resetar após 2 segundos
    } catch (err) {
      console.error("Erro ao copiar!", err);
    }
  };

  return (
    <>
      <section className="Sectioncoressistema">
        {/* LARANJA */}
        <main className="Conteudocoressistema">
          <div>
            <div className="titulocardcores">
              <h2 className="titulocores">Cores de layout</h2>
            </div>
          </div>
          <div className="blococores">
            <div className="cardcores">
              <div className="titulocor">
                <p>Laranja 50</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: laranja50 }}
              >
                <p>
                  {laranja50}
                  <Copy
                    onClick={() => handleCopy(laranja50)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Laranja 100</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: laranja100 }}
              >
                <p>
                  {laranja100}
                  <Copy
                    onClick={() => handleCopy(laranja100)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Laranja 200</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: laranja200 }}
              >
                <p>
                  {laranja200}
                  <Copy
                    onClick={() => handleCopy(laranja200)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Laranja 300</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: laranja300 }}
              >
                <p>
                  {laranja300}
                  <Copy
                    onClick={() => handleCopy(laranja300)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Laranja 400</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: laranja400 }}
              >
                <p>
                  {laranja400}
                  <Copy
                    onClick={() => handleCopy(laranja400)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Laranja 500</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: laranja500 }}
              >
                <p>
                  {laranja500}
                  <Copy
                    onClick={() => handleCopy(laranja500)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Laranja 600</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: laranja600 }}
              >
                <p>
                  {laranja600}
                  <Copy
                    onClick={() => handleCopy(laranja600)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Laranja 700</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: laranja700 }}
              >
                <p>
                  {laranja700}
                  <Copy
                    onClick={() => handleCopy(laranja700)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Laranja 800</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: laranja800 }}
              >
                <p>
                  {laranja800}
                  <Copy
                    onClick={() => handleCopy(laranja800)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Laranja 900</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: laranja900 }}
              >
                <p>
                  {laranja900}
                  <Copy
                    onClick={() => handleCopy(laranja900)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Laranja 950</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: laranja950 }}
              >
                <p>
                  {laranja950}
                  <Copy
                    onClick={() => handleCopy(laranja950)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* AZUL */}

        <main className="Conteudocoressistema">
          <div className="cardcores">
            <div className="titulocor">
              <p>Azul 50</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: azul50 }}
            >
              <p>
                {azul50}
                <Copy
                  onClick={() => handleCopy(laranja50)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Azul 100</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: azul100 }}
            >
              <p>
                {azul100}
                <Copy
                  onClick={() => handleCopy(azul100)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Azul 200</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: azul200 }}
            >
              <p>
                {azul200}
                <Copy
                  onClick={() => handleCopy(azul200)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Azul 300</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: azul300 }}
            >
              <p>
                {azul300}
                <Copy
                  onClick={() => handleCopy(azul300)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Azul 400</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: azul400 }}
            >
              <p>
                {azul400}
                <Copy
                  onClick={() => handleCopy(azul400)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Azul 500</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: azul500 }}
            >
              <p>
                {azul500}
                <Copy
                  onClick={() => handleCopy(azul500)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Azul 600</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: azul600 }}
            >
              <p>
                {azul600}
                <Copy
                  onClick={() => handleCopy(azul600)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Azul 700</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: azul700 }}
            >
              <p>
                {azul700}
                <Copy
                  onClick={() => handleCopy(azul700)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Azul 800</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: azul800 }}
            >
              <p>
                {azul800}
                <Copy
                  onClick={() => handleCopy(azul800)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Azul 900</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: azul900 }}
            >
              <p>
                {azul900}
                <Copy
                  onClick={() => handleCopy(azul900)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Azul 950</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: azul950 }}
            >
              <p>
                {azul950}
                <Copy
                  onClick={() => handleCopy(azul950)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
        </main>

        {/* VERDE */}
        <main className="Conteudocoressistema">
          <div>
            <div className="titulocardcoressistema">
              <h2 className="titulocores">Cores de resposta</h2>
            </div>
          </div>

          <div className="blococores">
            <div className="cardcores">
              <div className="titulocor">
                <p>Verde 50</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: verde50 }}
              >
                <p>
                  {verde50}
                  <Copy
                    onClick={() => handleCopy(verde50)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Verde 100</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: verde100 }}
              >
                <p>
                  {verde100}
                  <Copy
                    onClick={() => handleCopy(verde100)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Verde 200</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: verde200 }}
              >
                <p>
                  {verde200}
                  <Copy
                    onClick={() => handleCopy(verde200)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Verde 300</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: verde300 }}
              >
                <p>
                  {verde300}
                  <Copy
                    onClick={() => handleCopy(verde300)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Verde 400</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: verde400 }}
              >
                <p>
                  {verde400}
                  <Copy
                    onClick={() => handleCopy(verde400)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
            <div className="cardcores">
              <div className="titulocor">
                <p>Verde 500</p>
              </div>
              <div
                className="blococorsistema fontebranca"
                style={{ backgroundColor: verde500 }}
              >
                <p>
                  {verde500}
                  <Copy
                    onClick={() => handleCopy(verde500)}
                    className="iconCopy"
                    title="Copiar código hexadecimal"
                  />
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* VERMELHO */}
        <main className="Conteudocoressistema">
          <div className="cardcores">
            <div className="titulocor">
              <p>Vermelho 50</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: vermelho50 }}
            >
              <p>
                {vermelho50}
                <Copy
                  onClick={() => handleCopy(vermelho50)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Vermelho 100</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: vermelho100 }}
            >
              <p>
                {vermelho100}
                <Copy
                  onClick={() => handleCopy(vermelho100)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Vermelho 200</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: vermelho200 }}
            >
              <p>
                {vermelho200}
                <Copy
                  onClick={() => handleCopy(vermelho200)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Vermelho 300</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: vermelho300 }}
            >
              <p>
                {vermelho300}
                <Copy
                  onClick={() => handleCopy(vermelho300)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Vermelho 400</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: vermelho400 }}
            >
              <p>
                {vermelho400}
                <Copy
                  onClick={() => handleCopy(vermelho400)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Vermelho 500</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: vermelho500 }}
            >
              <p>
                {vermelho500}
                <Copy
                  onClick={() => handleCopy(vermelho500)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
        </main>

        {/* AMARELO */}
        <main className="Conteudocoressistema">
          <div className="cardcores">
            <div className="titulocor">
              <p>Amarelo 50</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: amarelo50 }}
            >
              <p>
                {amarelo50}
                <Copy
                  onClick={() => handleCopy(amarelo50)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Amarelo 100</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: amarelo100 }}
            >
              <p>
                {amarelo100}
                <Copy
                  onClick={() => handleCopy(amarelo100)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Amarelo 200</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: amarelo200 }}
            >
              <p>
                {amarelo200}
                <Copy
                  onClick={() => handleCopy(amarelo200)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Amarelo 300</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: amarelo300 }}
            >
              <p>
                {amarelo300}
                <Copy
                  onClick={() => handleCopy(amarelo300)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Amarelo 400</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: amarelo400 }}
            >
              <p>
                {amarelo400}
                <Copy
                  onClick={() => handleCopy(amarelo400)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Amarelo 500</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: amarelo500 }}
            >
              <p>
                {amarelo500}
                <Copy
                  onClick={() => handleCopy(amarelo500)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
        </main>

        {/* LILÁS */}
        <main className="Conteudocoressistema">
          <div className="cardcores">
            <div className="titulocor">
              <p>Lilás 50</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: lilas50 }}
            >
              <p>
                {lilas50}
                <Copy
                  onClick={() => handleCopy(lilas50)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Lilás 100</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: lilas100 }}
            >
              <p>
                {lilas100}
                <Copy
                  onClick={() => handleCopy(lilas100)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Lilás 200</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: lilas200 }}
            >
              <p>
                {lilas200}
                <Copy
                  onClick={() => handleCopy(lilas200)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Lilás 300</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: lilas300 }}
            >
              <p>
                {lilas300}
                <Copy
                  onClick={() => handleCopy(lilas300)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Lilás 400</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: lilas400 }}
            >
              <p>
                {lilas400}
                <Copy
                  onClick={() => handleCopy(lilas400)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
                />
              </p>
            </div>
          </div>
          <div className="cardcores">
            <div className="titulocor">
              <p>Lilás 500</p>
            </div>
            <div
              className="blococorsistema fontebranca"
              style={{ backgroundColor: lilas500 }}
            >
              <p>
                {lilas500}
                <Copy
                  onClick={() => handleCopy(lilas500)}
                  className="iconCopy"
                  title="Copiar código hexadecimal"
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

export default Conteudocoressistema;
