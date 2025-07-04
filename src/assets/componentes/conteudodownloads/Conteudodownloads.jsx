import "./index.scss";
import { Download } from "lucide-react"; // Ícone de copiar (lucide-react)
import React, { useState } from "react";

//imagens

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
import imagemartigoagro from "../../imagens/img_artigoagro.jpg";
import imagemartigobeneficios from "../../imagens/img_artigobeneficios.jpg";
import imagemartigocapitalhumano from "../../imagens/img_artigocapitalhumano.jpg";
import imagemartigocomoaumentar from "../../imagens/img_artigocomoaumentar.jpg";
import imagemartigocomomaximizar from "../../imagens/img_artigocomomaximizar.jpg";
import imagemartigoincentivos from "../../imagens/img_artigoincentivos.jpg";
import imagemartigoldb1 from "../../imagens/img_artigoldb1.jpg";
import imagemartigoldi1 from "../../imagens/img_artigoldi1.jpg";
import imagemartigoldi2 from "../../imagens/img_artigoldi2.jpg";
import imagemartigoldi3 from "../../imagens/img_artigoldi3.jpg";
import imagemartigomea1 from "../../imagens/img_artigomea1.jpg";
import imagemartigomover from "../../imagens/img_artigomover.jpg";
import imagemartigorestituicao from "../../imagens/img_artigorestituicao.jpg";
import imagempitchldb from "../../imagens/img_pitchldb.jpg";
import imagempitchldi from "../../imagens/img_pitchldi.jpg";
import imagempitchfinanciamento from "../../imagens/img_pitchfinanciamento.jpg";
import imagempitchinovatalentos from "../../imagens/img_pitchinovatalentos.jpg";
import imagempitchinternacionalizacao from "../../imagens/img_pitchinternacionalizacao.jpg";
import imagempitchmea from "../../imagens/img_pitchmea.jpg";
import imagempitchmover from "../../imagens/img_pitchmover.jpg";
import imagempitchsaving from "../../imagens/img_pitchsaving.jpg";
import imagempitchrobofiscal from "../../imagens/img_pitchrobofiscal.jpg";

function Conteudodownloads() {
  return (
    <>
      <section className="Sectiondownloads">
        <main className="Conteudodownloads">
          <div className="carddownloads">
            <div className="titulodownloads">
              <h1>Template PPT</h1>
            </div>
            <div className="botao">
              <button>
                <a
                  href="https://gtconsultoriacombr.sharepoint.com/:p:/r/sites/gt/Basedeconhecimento/Brasil/13%20-%20Modelo%20PPT/Template%20treinamentos%202025_2.pptx?d=w1eca4a11432d40efbf76b78452c4956b&csf=1&web=1&e=rSZnQX"
                  target="_blank"
                >
                  Download
                  <Download className="iconCopyRoot" title="Baixar" />
                </a>
              </button>
            </div>
          </div>
          <hr
            style={{ border: "1px solid var(--cinza-claro)", width: "100%" }}
          />
          <div className="carddownloads">
            <div className="titulodownloads">
              <h1>Material de nutrição</h1>
            </div>
            <div className="linhacards">
              <div className="subtitulodownloads">
                <h2>Institucional</h2>
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="linhacards">
              <div className="subtitulodownloads">
                <h2>Pitchs de vendas</h2>
              </div>
            </div>
            <div className="linhacards">

              <div className="card">
                <div className="thumb">
                  <img src={imagempitchldb} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Pitch LDB</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:p:/r/sites/gt/Basedeconhecimento/Brasil/04%20-%20Pitchs/03-%20Pitch%20Lei%20do%20Bem.pptx?d=w478f56e8441344b3a15ce6606369b75c&csf=1&web=1&e=LIxtRR"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagempitchldi} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Pitch LDI</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:p:/r/sites/gt/Basedeconhecimento/Brasil/04%20-%20Pitchs/02-%20Pitch%20Lei%20de%20Inform%C3%A1tica.pptx?d=wbb0b51c8863f4d6db58ef72dff2333e7&csf=1&web=1&e=hhYrfS"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagempitchfinanciamento} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Pitch Financiamento</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:p:/r/sites/gt/Basedeconhecimento/Brasil/04%20-%20Pitchs/01-%20Pitch%20Financiamento.pptx?d=w47b0e0e7f53545af920971ca099fe092&csf=1&web=1&e=z5kkwu"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagempitchinovatalentos} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Pitch Inova Talentos</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:p:/r/sites/gt/Basedeconhecimento/Brasil/04%20-%20Pitchs/06-%20Pitch%20Inova%20Talentos.pptx?d=w3b57076bd4d1445d8cb68d02d26b0db8&csf=1&web=1&e=OlVadZ"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagempitchmea} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Pitch M&A</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:p:/r/sites/gt/Basedeconhecimento/Brasil/04%20-%20Pitchs/08-%20Pitch%20M%26A.pptx?d=w227f44440bb94196a321b00e9b9a8125&csf=1&web=1&e=dtOtic"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagempitchmover} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Pitch Mover</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:p:/r/sites/gt/Basedeconhecimento/Brasil/04%20-%20Pitchs/09-%20Pitch%20MOVER.pptx?d=w92d36305e4064c10b1237645739e1023&csf=1&web=1&e=s6D7s7"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagempitchrobofiscal} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Pitch Robô Fiscal</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:p:/r/sites/gt/Basedeconhecimento/Brasil/04%20-%20Pitchs/04-%20Picht%20Rob%C3%B4%20Fiscal.pptx?d=w819944924d0840a18591b4eaeb26e11f&csf=1&web=1&e=ybe9EH"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagempitchsaving} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Pitch Saving Software House</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:p:/r/sites/gt/Basedeconhecimento/Brasil/04%20-%20Pitchs/07-%20Pitch%20Saving%20para%20Software%20House.pptx?d=w1b87b14b5542480193676490b27eeab0&csf=1&web=1&e=8nvgXd"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>


            </div>

            <div className="linhacards">
              <div className="subtitulodownloads">
                <h2>Produtos</h2>
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="linhacards">
              <div className="subtitulodownloads">
                <h2>Segmentos</h2>
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
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
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="linhacards">
              <div className="subtitulodownloads">
                <h2>Artigos dos especialistas</h2>
              </div>
            </div>

            <div className="linhacards">
              <div className="card">
                <div className="thumb">
                  <img src={imagemartigoagro} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Novo rumo para inovação no agro</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/02%20-%20Artigos/01-%20Artigo%20de%20Especialista/Artigo%20de%20Especialista%20-%20Novo%20rumo%20para%20inova%C3%A7%C3%A3o%20no%20agro_20250102.pdf?csf=1&web=1&e=ybQHZ4"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagemartigobeneficios} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Benefício fiscal e incentivo fiscal</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/02%20-%20Artigos/01-%20Artigo%20de%20Especialista/Artigo%20de%20Especialista%20-%20Incentivos%20Fiscais_20250102.pdf?csf=1&web=1&e=ijeIUr"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagemartigocapitalhumano} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>
                    O poder do capital humano para o crescimento da sua empresa
                  </h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/02%20-%20Artigos/01-%20Artigo%20de%20Especialista/Artigo%20de%20Especialista%20-%20LDB_20250102.pdf?csf=1&web=1&e=SIqrxe"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagemartigocomoaumentar} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>Guia completo para aumentar o lucro da sua empresa</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/02%20-%20Artigos/01-%20Artigo%20de%20Especialista/Artigo%20de%20Especialista%20-%20Guia%20completo%20para%20aumentar%20o%20lucro_20250102.pdf?csf=1&web=1&e=EIQIRS"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagemartigocomomaximizar} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>
                    Como maximizar os lucros da sua empresa: 7 estratégias
                    essenciais
                  </h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/02%20-%20Artigos/01-%20Artigo%20de%20Especialista/Artigo%20de%20Especialista%20-%20Como%20maximizar%20os%20lucros%20da%20sua%20empresa_20250102.pdf?csf=1&web=1&e=y4TeyY"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagemartigoincentivos} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>
                    Incentivos fiscais: o que são e como obtê-los para crescer a
                    sua empresa
                  </h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/02%20-%20Artigos/01-%20Artigo%20de%20Especialista/Artigo%20de%20Especialista%20-%20Benef%C3%ADcios%20Fiscais_20250102.pdf?csf=1&web=1&e=6FHID8"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagemartigoldb1} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>
                    Lei do Bem: sua empresa não decolou porque você não conhecia
                    a Lei do Bem
                  </h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/02%20-%20Artigos/01-%20Artigo%20de%20Especialista/Artigo%20de%20Especialista%20-%20Lei%20do%20Bem_20250102.pdf?csf=1&web=1&e=eCyeFa"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagemartigoldi1} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>
                    Lei de Informática: incentivando a inovação no setor de
                    tecnologia
                  </h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/02%20-%20Artigos/01-%20Artigo%20de%20Especialista/Artigo%20de%20Especialista%20-%20LDI_20250102.pdf?csf=1&web=1&e=9aM4AL"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagemartigoldi2} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>
                    Incentivo da Lei de Informática: como contemplar os produtos
                    de software
                  </h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/02%20-%20Artigos/01-%20Artigo%20de%20Especialista/Artigo%20de%20Especialista%20-%20Lei%20de%20Inform%C3%A1tica_20250102.pdf?csf=1&web=1&e=NvC342"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagemartigoldi3} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>
                    Incentivo da Lei de Informática: impulsionando a inovação e
                    o desenvolvimento na fabricação de equipamentos médicos
                    hospitalares
                  </h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/02%20-%20Artigos/01-%20Artigo%20de%20Especialista/Artigo%20de%20Especialista%20-%20Lei%20de%20Inform%C3%A1tica_20250103.pdf?csf=1&web=1&e=pyc6hF"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagemartigomea1} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>M&A: 5 perguntas para o especialista</h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/02%20-%20Artigos/01-%20Artigo%20de%20Especialista/Artigo%20de%20Especialista%20-%20M%26A_20250103.pdf?csf=1&web=1&e=QTpboK"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagemartigomover} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>
                    Mobilidade verde e inovação ganham tração com o Programa
                    Mover
                  </h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/02%20-%20Artigos/01-%20Artigo%20de%20Especialista/Artigo%20de%20Especialista%20-%20MOVER_20250116.pdf?csf=1&web=1&e=sRg33W"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="thumb">
                  <img src={imagemartigorestituicao} alt="Thumbnail" />
                </div>
                <div className="titulocard">
                  <h2>
                    Tempo da restituição por PER/COMP: entenda o prazo para cair
                    na conta
                  </h2>
                </div>
                <div className="botao">
                  <button>
                    <a
                      href="https://gtconsultoriacombr.sharepoint.com/:b:/r/sites/gt/Basedeconhecimento/Brasil/02%20-%20Artigos/01-%20Artigo%20de%20Especialista/Artigo%20de%20Especialista%20-%20Tempo%20da%20restitui%C3%A7%C3%A3o_20250102.pdf?csf=1&web=1&e=Xrj5OI"
                      target="_blank"
                    >
                      Download
                      <Download className="iconCopyRoot" title="Baixar" />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Conteudodownloads;
