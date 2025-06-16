import "./index.scss";
import { ChevronsRight } from "lucide-react";
import React, { useState } from "react";
import imagem001 from "../../imagens/gro/001.jpg";

function Conteudoexemplos() {
  return (
    <>
      <section className="Sectionexemplos">
        <main className="Conteudoexemplos">
          <div className="cardexemplos">
            <div className="titulotagline">
              <h2>Ideia estratégica hipotética para rede social com foco no Instagram:</h2>
            </div>
            <div className="paragrafo">
              <p>Considerando os seguintes objetivos:</p><br />
              <p className="marginleft">1. Separar a identidade da empresa da dos sócios, com existência independente e autônoma.<br />
              2. Descomplicar o mercado.<br />
              3. Gerar Awareness.<br />
              4. Reconhecimento como marca diferenciada.<br />
              5. Construção de proximidade e relacionamento.<br />
              6. "Precisamos nos aproximar e colocar as pessoas no centro de tudo".<br />
              7. Fortalecer a percepção da marca como líder em inovação e tecnologia.</p><br /> 
            </div>            
          </div>
          <div className="cardfundamentos">
          <div className="paragrafo">
            <p>E os seguintes fundamentos do reposicionamento:</p>
          </div>
          <div className="fundamentos">
            <div className="boxtextoexemplos">
            <ChevronsRight size={36}/>
              <p>Unimos o potencial humano (consultoria) e a força tecnológica (software) para inspirar e conduzir mudanças.</p>
            </div>
            <div className="boxtextoexemplos">
            <ChevronsRight size={36}/>
              <p>Somos uma facilitadora de transformação e avanço tecnológico.</p>
            </div>
            <div className="boxtextoexemplos">
            <ChevronsRight size={36}/>
              <p>Somos um ecossistema pioneiro de soluções tecnológicas e inovadoras.</p>
            </div>
            <div className="boxtextoexemplos">
            <ChevronsRight size={36}/>
              <p>Somos uma referência global em inovação e tecnologia.</p>
            </div>
            <div className="boxtextoexemplos">
            <ChevronsRight size={36}/>
              <p>Nos posicionamos como autoridade de forma atrativa.</p>
            </div>
          </div>
          <div className="fundamentos">
            <div className="boxtextoexemplos">
            <ChevronsRight size={36}/>
              <p>Somos uma marca moderna e forte.</p>
            </div>
            <div className="boxtextoexemplos">
            <ChevronsRight size={36}/>
              <p>Temos uma identidade proprietária que gera lembrança.</p>
            </div>
            <div className="boxtextoexemplos">
            <ChevronsRight size={36}/>
              <p>Nossa comunicação é impactante e clara.</p>
            </div>
            <div className="boxtextoexemplos">
            <ChevronsRight size={36}/>
              <p>Nossa comunicação tem personalidade.</p>
            </div>
            <div className="boxtextoexemplos">
            <ChevronsRight size={36}/>
              <p>Nosso sonho é democratizar a inovação.</p>
            </div>
          </div>
          </div>
          <hr style={{ border: '1px solid var(--cinza-claro)', width: '100%' }} />
        </main>
        
        <main className="Conteudoexemplos colunas">
          <div className="cardexemplos">
            <div className="tituloexemplos">
              <h2>Exemplos:</h2>
            </div>
          </div>          
          <div className="cardexemplos">
            <div className="imagemgro">
              <img src={imagem001} alt="Exemplo imagem Grö" />
            </div>
              <p>
                Grö from Gröwnt.<br />
                AI Digital Character.<br />
                World's First Digital InnTech Consultant.<br />
                <span className="italico">Just Keep Growing.</span><br />
              </p>
              <p className="midwidth">
                Quinta-feira fui ao Museu de Arte Moderna do Rio de Janeiro e, como sempre, saí de lá inspirada. Estar cercada por tantas obras que provocam, desafiam e estimulam a criatividade é algo que me renova e fortalece minha visão inovadora.<br/><br/>
                Arte é transformação, é uma forma de pensar fora da caixa, e é isso que eu busco para minha rotina: manter o olhar crítico e curioso, sempre explorando novas formas de conectar ideias.<br/><br/>
                Cada pincelada, cada cor e cada história por trás das exposições é um lembrete de como o mundo pode ser recriado todos os dias.<br/><br/>
                Se você ainda não foi, fica a dica: reserve um tempo para visitas lugares que alimentam sua mente e seu potencial inovativo.
              </p>
          </div>
        </main>
        
      </section>
    </>
  );
}

export default Conteudoexemplos;
