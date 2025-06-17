import "./index.scss";
import { Download } from "lucide-react"; // Ícone de copiar (lucide-react)
import React, { useState } from "react";

//imagens
import thumb001 from "../../imagens/gro/001.jpg";
import imagemagro from "../../imagens/img_agro.jpg";
import imagemtic from "../../imagens/img_tic.jpg";
import imagemtransf from "../../imagens/img_transf.jpg";
import imagemfinan from "../../imagens/img_finan.jpg";
import imagemldb from "../../imagens/img_ldb.jpg";
import imagemdife from "../../imagens/img_dife.jpg";
import imagemeco from "../../imagens/img_eco.jpg";
import imageminsti from "../../imagens/img_insti.jpg";
import imagemopor from "../../imagens/img_opor.jpg";
import imagempospitchfd from "../../imagens/img_pospitchfd.jpg";
import imagempospitchmea from "../../imagens/img_pospitchmea.jpg";
import imagempospitchldb from "../../imagens/img_pospitchldb.jpg";
import imagempospitchldi from "../../imagens/img_pospitchldi.jpg";
import imagempospitchfinan from "../../imagens/img_pospitchfinan.jpg";
import imagemcasebelembioenergia from "../../imagens/img_casebioenergia.jpg";
import imagemcasefuncionalmikron from "../../imagens/img_casefuncionalmikron.jpg";
import imagemcaseibmp from "../../imagens/img_caseibmp.jpg";
import imagemcaseloccus from "../../imagens/img_caseloccus.jpg";
import imagemcasemelhoramentos from "../../imagens/img_casemelhoramentos.jpg";
import imagemcasesabesp from "../../imagens/img_casesabesp.jpg";

function Conteudodownloads() {

  return (
    <>
      <section className="Sectiondownloads">
        <main className="Conteudodownloads">
          <div className="carddownloads">
            <div className="titulodownloads">
              <h1>
                Template PPT
              </h1>
            </div>
            <div className="botao">
              <button>
                <a
                  href="https://gtconsultoriacombr.sharepoint.com/:p:/r/sites/gt/Basedeconhecimento/Brasil/13%20-%20Modelo%20PPT/Template%20treinamentos%202025_2.pptx?d=w1eca4a11432d40efbf76b78452c4956b&csf=1&web=1&e=rSZnQX"
                  target="_blank"
                >
                  Download
                  <Download
                  className="iconCopyRoot"
                  title="Baixar"
                />
                </a>
              </button>
            </div>
          </div>
          <hr style={{ border: '1px solid var(--cinza-claro)', width: '100%' }} />
          <div className="carddownloads">
            <div className="titulodownloads">
              <h1>
                Material de nutrição
              </h1>

            </div>
            <div className="linhacards">
                <div className="subtitulodownloads">
                  <h2>
                    Institucional
                  </h2>
                </div>
            </div>
            <div className="linhacards">
              <div className="card">
                <div className="thumb">
                <img src={imagemldb} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Autoaplicação LDB</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/06%20-%20Material%20de%20Nutri%C3%A7%C3%A3o%20PDF/01-%20Institucional/01%20-%20autoaplicacao%20LDB%20grownt_20250212.pdf?csf=1&web=1&e=eYsdzs"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagemeco} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Ecossistema de Inovação</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/06%20-%20Material%20de%20Nutri%C3%A7%C3%A3o%20PDF/01-%20Institucional/02%20-%20ecossistema%20de%20inovacao%20grownt_20250212.pdf?csf=1&web=1&e=xhWQdl"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagemdife} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Diferenciais Gröwnt</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/06%20-%20Material%20de%20Nutri%C3%A7%C3%A3o%20PDF/01-%20Institucional/03%20-%20institucional%20diferenciais%20grownt_20250212.pdf?csf=1&web=1&e=FVLsxp"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imageminsti} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Institucional geral Gröwnt</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/06%20-%20Material%20de%20Nutri%C3%A7%C3%A3o%20PDF/01-%20Institucional/04%20-%20institucional%20geral%20grownt_20250213.pdf?csf=1&web=1&e=h46ZVe"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagemopor} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Oportunidades Gröwnt</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/06%20-%20Material%20de%20Nutri%C3%A7%C3%A3o%20PDF/01-%20Institucional/05%20-%20oportunidade%20grownt_20250213.pdf?csf=1&web=1&e=ewwE5U"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>


            </div>
            <div className="linhacards">
                <div className="subtitulodownloads">
                  <h2>
                    Produtos
                  </h2>
                </div>
            </div>
            <div className="linhacards">
            <div className="card">
                <div className="thumb">
                <img src={imagempospitchfd} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Pós-pitch FD</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/06%20-%20Material%20de%20Nutri%C3%A7%C3%A3o%20PDF/02-%20Produtos/P%C3%B3s%20pitch%20FD%20grownt_20250411.pdf?csf=1&web=1&e=cxuFWE"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagempospitchfinan} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Pós-pitch Financiamento</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/06%20-%20Material%20de%20Nutri%C3%A7%C3%A3o%20PDF/02-%20Produtos/P%C3%B3s%20pitch%20FINANCIAMENTO%20grownt_20241230.pdf?csf=1&web=1&e=hEgjqA"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagempospitchldb} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Pós-pitch LDB</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/06%20-%20Material%20de%20Nutri%C3%A7%C3%A3o%20PDF/02-%20Produtos/P%C3%B3s%20pitch%20LDB%20grownt_20241230.pdf?csf=1&web=1&e=zWynR8"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagempospitchldi} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Pós-pitch LDI</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/06%20-%20Material%20de%20Nutri%C3%A7%C3%A3o%20PDF/02-%20Produtos/P%C3%B3s%20pitch%20LDI%20grownt_20241230.pdf?csf=1&web=1&e=GS4k3p"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagempospitchmea} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Pós-pitch M&A</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/06%20-%20Material%20de%20Nutri%C3%A7%C3%A3o%20PDF/02-%20Produtos/P%C3%B3s%20pitch%20M%26A%20grownt_20250513.pdf?csf=1&web=1&e=MSU560"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

            </div>
            <div className="linhacards">
                <div className="subtitulodownloads">
                  <h2>
                    Segmentos
                  </h2>
                </div>
            </div>
            <div className="linhacards">

            <div className="card">
                <div className="thumb">
                <img src={imagemagro} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Agronegócio</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/06%20-%20Material%20de%20Nutri%C3%A7%C3%A3o%20PDF/03-%20Segmentos/Prospecto%20Agroneg%C3%B3cio_20241230.pdf?csf=1&web=1&e=tvNc0c"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagemfinan} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Financeiro</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/06%20-%20Material%20de%20Nutri%C3%A7%C3%A3o%20PDF/03-%20Segmentos/Prospecto%20Financeiro_20241230.pdf?csf=1&web=1&e=xiai4T"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagemtransf} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Indústria da Transformação</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/06%20-%20Material%20de%20Nutri%C3%A7%C3%A3o%20PDF/03-%20Segmentos/Prospecto%20Ind%C3%BAstria%20da%20Transforma%C3%A7%C3%A3o_20241230.pdf?csf=1&web=1&e=odh4rs"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagemtic} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Tecnologia da Informação</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/06%20-%20Material%20de%20Nutri%C3%A7%C3%A3o%20PDF/03-%20Segmentos/Prospecto%20TIC_20241230.pdf?csf=1&web=1&e=mS1bs0"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

            </div>
            <div className="linhacards">
              <div className="subtitulodownloads">
                <h2>Cases de sucesso</h2>
              </div>
            </div>
            <div className="linhacards">

            <div className="card">
                <div className="thumb">
                <img src={imagemcasebelembioenergia} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Belém Energia</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/15%20-%20Cases%20de%20sucesso/Lei%20do%20Bem%20-%20Bel%C3%A9m%20Bioenergia_20250506.pdf?csf=1&web=1&e=OuFvCo"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagemcasefuncionalmikron} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Funcional Mikron</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/15%20-%20Cases%20de%20sucesso/Lei%20do%20Bem%20-%20Funcional%20Mikron_20250506.pdf?csf=1&web=1&e=A2G1L1"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagemcaseibmp} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>IBMP</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/15%20-%20Cases%20de%20sucesso/Lei%20do%20Bem%20-%20IBMP_20250507.pdf?csf=1&web=1&e=W6MGve"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagemcaseloccus} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Loccus</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/15%20-%20Cases%20de%20sucesso/Lei%20do%20Bem%20-%20Loccus_20250509.pdf?csf=1&web=1&e=YMXCGf"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagemcasemelhoramentos} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Melhoramentos</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/15%20-%20Cases%20de%20sucesso/Lei%20do%20Bem%20-%20Melhoramentos_20250508.pdf?csf=1&web=1&e=eWee58"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                <img src={imagemcasesabesp} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Sabesp</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/15%20-%20Cases%20de%20sucesso/Lei%20do%20Bem%20-%20Sabesp_20250509.pdf?csf=1&web=1&e=70nUyR"
                      target="_blank"
                    >
                      Download
                      <Download
                      className="iconCopyRoot"
                      title="Baixar"
                    />
                    </a>
                  </button>
                </div>
              </div>

            </div>
          </div>
          

        </main>
        <main className="Conteudotipografia">
          <div className="carddownloads">
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
        
      </section>
    </>
  );
}

export default Conteudodownloads;
