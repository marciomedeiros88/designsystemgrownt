import "./index.scss";
import { CircleX, CircleCheckBig } from "lucide-react";
import React, { useState } from "react";

function Conteudoidentidadeverbal() {
  return (
    <>
      <section className="Sectionidentidadeverbal">
        <main className="Conteudoidentidadeverbal">
          <div className="cardidentidadeverbal">
            <div className="tituloidentidadeverbal">
              <h1>
                Somos a marca,
                <br />
                a empresa.
                <br />
                Então, nosso
                <br />
                tratamento é no
                <br />
                <span className="underline">feminino.</span>
              </h1>
            </div>
          </div>
          <div className="cardidentidadeverbal">
            <div className="paragrafo">
              <p>
                Uso da primeira pessoa do plural (nós):
                <br />
                • Textos institucionais;
                <br />
                • Treinamentos de equipe e colaboradores;
                <br />
                • Entrevistas;
                <br />
                <br />
                Uso da primeira pessoa do singular (eu):
                <br />
                • Eventuais seleções de representante de marca;
                <br />
                • Em relações internas individuais one-on-one;
                <br />
                • Atendimento FAQ-clientes com apresentação do próprio nome do
                atendente.
                <br />
                <br />
                Uso da terceira pessoa do singular (ela):
                <br />
                • Alguns textos institucionais e promocionais.
                <br />
                Ex: "A Gröwnt quer falar com você!". "Aqui na Gröwnt, nós..."
              </p>
            </div>
          </div>
          <hr style={{ border: '1px solid var(--cinza-claro)', width: '100%' }} />
        </main>
        <main className="Conteudoidentidadeverbal">
          <div className="cardidentidadeverbal">
            <div className="tituloidentidadeverbal">
              <h1>
                Dividimos a nossa linguagem em
                <br /> <span className="underline">três principais</span>{" "}
                formatos:
              </h1>
            </div>
          </div>
          <div className="cardidentidadeverbal">
            <div className="colunaidentidadeverbal">
              <div className="tituloidentidadeverbal">
                <h2>01. Funcional</h2>
              </div>
              <div className="paragrafo">
                <p>
                  Técnica, formal, atenciosa e direta.
                  <br />
                  Valorizamos uma comunicação clara e agradável, para que o
                  receptor entenda facilmente nossos serviços e objetivos a
                  serem explanados.
                </p>
                <p className="boxtexto">
                  <span className="negrito">Onde usar:</span>
                  <br />
                  Ideal para comunicações internas, como e-mails e contratos, e
                  também para contextos formais, como palestras, conteúdos
                  institucionais, discursos, entrevistas, apresentações
                  internas, treinamentos, documentos oficiais, novas parcerias e
                  reuniões de negócios.
                </p>
                <p className="boxdos">
                  <CircleCheckBig color="green" size={18} />
                  <span className="negrito marginleftlw paragrafomd">
                    Do's:
                  </span>
                  <br />
                  <br />
                  <span className="negrito">Seja direto(a) e objetivo(a):</span>
                  <br />
                  Exemplo: “Para concluir o relatório, reúna os dados e nos
                  encaminhe até sexta-feira, por favor.”
                  <br />
                  <br />
                  <span className="negrito">
                    Mantenha a fala formal e respeitosa:
                  </span>
                  <br />
                  Exemplo: “Agradecemos a sua colaboração com o projeto e
                  estamos à disposição para esclarecimentos.”
                  <br />
                  <br />
                  <span className="negrito">
                    Prefira linguagem técnica quando apropriado, para ser
                    preciso:
                  </span>
                  <br />
                  Exemplo: “Os dados de desempenho foram revisados conforme os
                  KPIs estabelecidos.”
                  <br />
                  <br />
                  <span className="negrito">
                    Seja claro(a) e evite ambiguidades:
                  </span>
                  <br />
                  Exemplo: “A reunião ocorrerá na sexta-feira, às 10h, na sala
                  3.”
                  <br />
                  <br />
                  <span className="negrito">
                    Estruture seu texto com uma organização lógica:
                  </span>
                  <br />
                  Exemplo: Inicie com o objetivo, desenvolva a mensagem e
                  finalize com uma orientação ou prazo.
                </p>
                <p className="boxdonts">
                  <CircleX color="red" size={18} />
                  <span className="negrito marginleftlw paragrafomd">
                    Dont's:
                  </span>
                  <br />
                  <br />
                  <span className="negrito">
                    Evite informalidades e gírias:
                  </span>
                  <br />
                  Errado: “A gente se encontra lá na sexta, beleza?”
                  <br />
                  <br />
                  <span className="negrito">
                    Não misture emoções ou opiniões pessoais:
                  </span>
                  <br />
                  Errado: “Estou completamente frustrado com a demora nesse
                  processo.”
                  <br />
                  <br />
                  <span className="negrito">
                    Não use emojis, linguagem neutra ou abreviações:
                  </span>
                  <br />
                  Errado: “Obrigad@, meninx! 😊 Nos vemos lá.”
                  <br />
                  <br />
                  <span className="negrito">
                    Não use expressões vagas ou desnecessariamente complexas:
                  </span>
                  <br />
                  Errado: “A reunião será em algum momento no final da semana.”
                  <br />
                  <br />
                  <span className="negrito">
                    Evite mensagens longas e prolixas que não vão direto ao
                    ponto:
                  </span>
                  <br />
                  Errado: “Gostaria de aproveitar esta oportunidade, nesta
                  sexta-feiral, para lembrar que será de extrema importância que
                  todos estejam presentes e atentos na reunião, visto a
                  dificuldade de reunir o time inteiro...”
                </p>
              </div>
            </div>
            <div className="colunaidentidadeverbal">
              <div className="tituloidentidadeverbal">
                <h2>02. Expressiva</h2>
              </div>
              <div className="paragrafo">
                <p>
                  Forma de se comunicar de maneira simples, amigável e próxima,
                  criando uma conexão mais humana com o público.
                  <br />É pensada para ser acolhedora e envolvente, permitindo
                  que o público se sinta mais próximo da marca.
                </p>
                <p className="boxtexto">
                  <span className="negrito">Onde usar:</span>
                  <br />
                  Ideal para conversas informais e interativas, como no
                  WhatsApp, redes sociais, alguns textos na web e chats. Também
                  é ótima para campanhas publicitárias, materiais gráficos,
                  eventos, e apresentações cativantes da marca, onde a
                  comunicação precisa ser mais leve e acessível.
                </p>
                <p className="boxdos">
                  <CircleCheckBig color="green" size={18} />
                  <span className="negrito marginleftlw paragrafomd">
                    Do's:
                  </span>
                  <br />
                  <br />
                  <span className="negrito">
                    Use uma linguagem amigável e próxima:
                  </span>
                  <br />
                  Exemplo: Exemplo: “Que bom te ver por aqui! Como posso te
                  ajudar hoje?”
                  <br />
                  <br />
                  <span className="negrito">
                    Utilize emojis para dar leveza à mensagem, mas sem exagero:
                  </span>
                  <br />
                  Exemplo: “Parabéns pela conquista! 🎉 Estamos muito felizes
                  por você!”
                  <br />
                  <br />
                  <span className="negrito">
                    Prefira frases curtas e diretas, que soem naturais:
                  </span>
                  <br />
                  Exemplo: “Tá pronto pra saber mais? Vamos lá!”
                  <br />
                  <br />
                  <span className="negrito">
                    Use gírias e expressões populares com moderação para criar
                    proximidade:
                  </span>
                  <br />
                  Exemplo: “Oi, tudo bem? Estamos aqui em caso de dúvida!”
                  <br />
                  <br />
                  <span className="negrito">
                    Mantenha a forma informal, mas ainda assim respeitosa:
                  </span>
                  <br />
                  Exemplo: “Oi, já viu as novidades? Dá uma olhada!”
                </p>
                <p className="boxdonts">
                  <CircleX color="red" size={18} />
                  <span className="negrito marginleftlw paragrafomd">
                    Dont's:
                  </span>
                  <br />
                  <br />
                  <span className="negrito">
                    Evite excesso de gírias e abreviações que dificultem a
                    leitura:
                  </span>
                  <br />
                  Errado: “Falae, blz? Tmj e qq coisa é só dar um toque!”
                  <br />
                  <br />
                  <span className="negrito">
                    Evite escrever tudo em caixa alta para não soar agressivo ou
                    descontrolado:
                  </span>
                  <br />
                  Errado: “OLÁ! TEMOS UMA IDEIA INCRÍVEL!”
                  <br />
                  <br />
                  <span className="negrito">
                    Evite onomatopeias que possam parecer excessivamente
                    informais ou deslocadas:
                  </span>
                  <br />
                  Errado: “A-ham, sabia que você ia gostar dessa novidade! 😉”
                  <br />
                  <br />
                  <span className="negrito">
                    Não use muitos emojis ou emojis em sequência, para não
                    poluir a mensagem:
                  </span>
                  <br />
                  Errado: “Obrigaaadaaaaa!!! 😍😍😍❤❤❤💥💥💥✨✨✨
                  <br />
                  <br />
                  <span className="negrito">
                    Não exagere nas abreviações, mantendo o texto compreensível:
                  </span>
                  <br />
                  Errado: “Vc vai curti d+ as nvdades! 😉”
                  <br />
                  <br />
                  <span className="negrito">Não soe robótico ou chatGPT:</span>
                  <br />
                  Errado: “Certo, Senhor. É compreensível. São padrões —
                  existência humana: viver, trabalhar, interagir.”
                </p>
              </div>
            </div>
            <div className="colunaidentidadeverbal">
              <div className="tituloidentidadeverbal">
                <h2>03. Estrangeira</h2>
              </div>
              <div className="paragrafo">
                <p>
                  Em alguns textos e frases, optamos por incluir a língua
                  inglesa para nos apresentar como uma marca conectada e
                  acessível ao público global. Nas legendas de nossas postagens
                  em redes sociais, usamos o português como língua principal,
                  seguido da tradução em inglês logo abaixo. Esse formato
                  valoriza nossa origem brasileira, enquanto incorpora uma visão
                  global e moderna.
                </p>
                <p className="boxtexto">
                  <span className="negrito">Onde usar:</span>
                  <br />
                  Aplicada em expressões de marca, slogans, frases curtas,
                  insights e mensagens reflexivas em nossos materiais impressos
                  e digitais.
                </p>
                <p className="boxdos">
                  <CircleCheckBig color="green" size={18} />
                  <span className="negrito marginleftlw paragrafomd">
                    Do's:
                  </span>
                  <br />
                  <br />
                  <span className="negrito">
                    Use o inglês de forma simples e acessível:
                  </span>
                  <br />
                  Exemplo: "Dream big, achieve more."
                  <br />
                  <br />
                  <span className="negrito">
                    Sempre coloque o português em primeiro lugar nas legendas
                    das redes sociais, com a tradução em inglês logo abaixo:
                  </span>
                  <br />
                  Exemplo: “Uma nova experiência para você! Confira agora.” ~ “A
                  new experience for you! Check it out.”
                  <br />
                  <br />
                  <span className="negrito">
                    Verifique a gramática e ortografia no inglês para manter a
                    credibilidade da marca:
                  </span>
                  <br />
                  Exemplo: Evite erros comuns e revise sempre: "Inspiring change
                  for a better tomorrow."
                  <br />
                  <br />
                  <span className="negrito">
                    Aplique o inglês em expressões de marca e slogans para
                    transmitir uma imagem global:
                  </span>
                  <br />
                  Exemplo: “Your path to growth and keep growing.”
                  <br />
                  <br />
                  <span className="negrito">
                    Seja consistente com o uso de inglês em contextos
                    estratégicos, como campanhas globais e materiais impressos:
                  </span>
                  <br />
                  Exemplo: “Innovation fuels growth.” em materiais envolventes.
                </p>
                <p className="boxdonts">
                  <CircleX color="red" size={18} />
                  <span className="negrito marginleftlw paragrafomd">
                    Dont's:
                  </span>
                  <br />
                  <br />
                  <span className="negrito">
                    Evite misturar frases em inglês com o português de forma
                    aleatória e sem tradução:
                  </span>
                  <br />
                  Errado: “Hoje é dia de relax e enjoy every moment.”
                  <br />
                  <br />
                  <span className="negrito">
                    Evite jargões ou expressões muito regionais do inglês, que
                    possam ser confusos para o público geral:
                  </span>
                  <br />
                  Errado: "We're here to disrupt the status quo and deliver a
                  paradigm shift."
                  <br />
                  <br />
                  <span className="negrito">
                    Não exagere no uso do inglês em contextos onde o português é
                    mais natural ou necessário:
                  </span>
                  <br />
                  Errado: Exclusivamente em português: “Feel free to contact us
                  for any inquiries.”
                  <br />
                  <br />
                  <span className="negrito">
                    Não traduza literalmente expressões brasileiras para o
                    inglês, prefira adaptações culturalmente adequadas:
                  </span>
                  <br />
                  Errado: “We're together” (em vez de “We’re in this together”).
                </p>
              </div>
            </div>
          </div>
          <hr style={{ border: '1px solid var(--cinza-claro)', width: '100%' }} />
        </main>
        <main className="Conteudoidentidadeverbal">
          <div className="cardidentidadeverbal">
            <div className="tituloidentidadeverbal">
              <h1>Tons de voz:</h1>
            </div>
          </div>
          <div className="cardidentidadeverbal">
            <div className="tituloidentidadeverbal">
              <h2>
                Nossas linguagens,{" "}
                <span className="underline">expressiva e estrangeira,</span>
                em conjunto com elementos de proximidade e humanidade, incorpora
                diferentes tons de voz que refletem nossa personalidade de
                marca. Esses tons incluem:
              </h2>
              <br />
              <br />
            </div>
            <div className="paragrafo marginleft">
              <h3>
                <span className="negrito">01. Tom de voz Incentivador</span>
              </h3>
              <br />
              <p>
                Nossa voz inspira coragem, determinação e foco para perseguir o
                sucesso.
                <br />
                <span className="underline">O que significa:</span> Encorajador,
                firme, estimulador, obstinado, incitante.
                <br />
                <span className="underline">O que não significa:</span>{" "}
                Resistente, amedrontador, inalterável, aterrorizador, duro,
                intolerável, irreal.
                <br />
                <br />
              </p>

              <p className="paragrafo marginleft boxtexto">
                <span className="underline negrito">
                  Como a fala incentivadora soa:
                </span>{" "}
                como uma voz confiante e calorosa que{" "}
                <span className="underline">
                  impulsiona as pessoas a agirem
                </span>
                , acreditarem no próprio potencial e enfrentarem desafios com
                determinação. Ele carrega uma energia positiva e encorajadora,{" "}
                <span className="underline">
                  equilibrando firmeza e empatia
                </span>{" "}
                para inspirar coragem sem parecer insensível ou distante. É uma
                voz que transforma barreiras em oportunidades e motivações,
                sempre conectada à realidade e ao propósito, mas nunca se deixa
                abalar por dificuldades.
              </p>
              <div className="boxtons">
                <p className="paragrafo marginleft boxdos midwidth">
                  <span className="underline negrito">Como dialogamos:</span>{" "}
                  Quem inova, cresce e quem cresce, lidera o mercado. Desperte o
                  seu potencial e conquiste um crescimento prolongado com a
                  Gröwnt ao seu lado. Aqui, unimos consultoria, tecnologia e
                  expertise humana para cultivar um ambiente fértil no seu
                  negócio.
                </p>
                <p className="paragrafo marginleft boxdonts midwidth">
                  <span className="underline negrito">
                    Como não dialogamos:
                  </span>{" "}
                  Quem não inova, fica para trás. Quem não cresce, perde espaço.
                  Desperte seu potencial e pare de hesitar — o crescimento é
                  implacável com a Gröwnt. Aqui, juntamos consultoria,
                  tecnologia e expertise humana para fazer seu negócio prosperar
                  custe o que custar.
                </p>
              </div>
            </div>
            <div className="paragrafo marginleft">
              <h3>
                <span className="negrito">02. Tom de voz Esclarecedor</span>
              </h3>
              <br />
              <p>
                Não usamos palavras complicadas sem necessidade, gostamos de ser
                entendidos por todos.
                <br />
                <span className="underline">O que significa:</span> Didático,
                informativo, explicativo, acessível.
                <br />
                <span className="underline">O que não significa:</span>{" "}
                Professoral, difícil, constrangedor, impaciente, apático, frio.
                <br />
              </p>
              <p className="paragrafo marginleft boxtexto">
                <span className="underline negrito">
                  Como a fala esclarecedora soa:
                </span>{" "}
                como uma conversa em que o objetivo é ajudar e informar com
                clareza e simplicidade, a fala esclarecedora{" "}
                <span className="underline">
                  usa palavras e exemplos que todos possam entender,
                </span>{" "}
                evitando termos complexos e técnicos – a menos que sejam
                realmente necessários – e, mesmo assim, sempre com uma
                explicação acessível. Esse tom é{" "}
                <span className="underline">gentil e paciente</span> como quem
                quer garantir que a mensagem seja compreendida sem parecer que
                está "dando aula" ou tratando o ouvinte como inferior. Ele passa
                uma sensação de acolhimento e respeito, valorizando a
                compreensão de quem escuta.
              </p>
              <div className="boxtons">
                <p className="paragrafo marginleft boxdos midwidth">
                  <span className="underline negrito">Como dialogamos:</span>{" "}
                  Criamos um ecossistema completo de inovação, unindo o melhor
                  do conhecimento humano e da tecnologia para ajudar empresas a
                  potencializar suas ideias e manter um ciclo constante de
                  transformação.
                </p>
                <p className="paragrafo marginleft boxdonts midwidth">
                  <span className="underline negrito">
                    Como não dialogamos:
                  </span>{" "}
                  Criamos um "ecossistema completo" de inovação, como preferimos
                  chamar, combinando conhecimento humano e tecnologia — algo que
                  talvez você já devesse saber: É ESSENCIAL! Nossa estrutura
                  está aqui para auxiliar empresas a enfim conseguirem
                  potencializar suas ideias e manter um ciclo de transformação,
                  que, obviamente, esperamos ser constante.
                </p>
              </div>
            </div>
            <div className="paragrafo marginleft">
              <h3>
                <span className="negrito">03. Tom de voz Assertivo</span>
              </h3>
              <br />
              <p>
                Somos seguros e contamos a nossa história com confiança e
                transparência.
                <br />
                <span className="underline">O que significa:</span> Seguro de
                si, maduro, confiante, racional, transparente, decidido,
                correto.
                <br />
                <span className="underline">O que não significa:</span>{" "}
                Inseguro, dramático, medroso, fantasioso, berrante, misterioso,
                redundante.
                <br />
              </p>
              <p className="paragrafo marginleft boxtexto">
                <span className="underline negrito">
                  Como a fala assertiva soa:
                </span>{" "}
                como uma comunicação firme, que vai direto ao ponto, sem rodeios
                ou exageros. Reflete confiança, transmitindo informações com{" "}
                <span className="underline">segurança e maturidade,</span> de
                forma a demonstrar domínio sobre o que está sendo dito. é um tom
                é direto e racional: cada palavra tem um propósito e é usada
                para esclarecer, não para dramatizar ou gerar suspense.{" "}
                <span className="underline">
                  Não há exageros, como exclamações, emojis ou caixa alta;
                </span>{" "}
                o foco está em passar a mensagem de maneira objetiva e correta,
                criando um ambiente de transparência e respeito com o público.
                Quem lê sente que está em boas mãos, pois a empresa soa{" "}
                <span className="underline">experiente e confiável,</span>{" "}
                transmitindo uma sensação de profissionalismo e solidez.
              </p>
              <div className="boxtons">
                <p className="paragrafo marginleft boxdos midwidth">
                  <span className="underline negrito">Como dialogamos:</span>{" "}
                  Sua próxima inovação começa aqui.
                </p>
                <p className="paragrafo marginleft boxdonts midwidth">
                  <span className="underline negrito">
                    Como não dialogamos:
                  </span>{" "}
                  Sua próxima INOVAÇÃO começa aqui! 😊😊
                </p>
              </div>
            </div>
            <div className="paragrafo marginleft">
              <h3>
                <span className="negrito">04. Tom de voz Influente</span>
              </h3>
              <br />
              <p>
                Acumulamos experiências profundas e transformadoras,
                influenciando o mercado e nos consolidando como referência.
                <br />
                <span className="underline">O que significa:</span> Referência,
                autoridade, dominante, líder, respeitado, inspirador,
                importante.
                <br />
                <span className="underline">O que não significa:</span>{" "}
                Prepotente, tirano, arrogante, desrespeitoso, metido, esnobe.
                <br />
              </p>
              <p className="paragrafo marginleft boxtexto">
                <span className="underline negrito">
                  Como a fala assertiva soa:
                </span>{" "}
                como uma comunicação respeitada, que transmite autoridade de
                forma natural e inspiradora. Reflete a posição da empresa como
                líder e referência em seu setor, mas sem soar arrogante ou
                superior. Esse tom é seguro, demonstrando que a empresa possui
                conhecimento sólido e uma trajetória de sucesso, o que gera
                confiança e admiração. Cada palavra é escolhida para reforçar a
                importância e o impacto da empresa, mostrando que ela não apenas
                acompanha, mas{" "}
                <span className="underline">
                  molda o mercado e inspira outros
                </span>{" "}
                a seguirem seu exemplo. Esse tom tem um toque de inspiração,
                deixando claro que a empresa ocupa um lugar de destaque porque
                conquistou essa posição com mérito e respeito.
              </p>
              <div className="boxtons">
                <p className="paragrafo marginleft boxdos midwidth">
                  <span className="underline negrito">Como dialogamos:</span>{" "}
                  Nosso novo projeto nasce da expertise de quem estuda as
                  necessidades do mercado e tem como objetivo transformar o
                  setor. Com uma equipe de especialistas e foco em inovação,
                  seguimos como referência global na captação de recursos para
                  projetos que impulsionam o futuro.
                </p>
                <p className="paragrafo marginleft boxdonts midwidth">
                  <span className="underline negrito">
                    Como não dialogamos:
                  </span>{" "}
                  Esse novo projeto prova que somos a única empresa capaz de
                  fazer algo tão inovador no setor. Nossa equipe é a mais
                  qualificada, e o mercado sabe disso. Estamos sempre à frente
                  de todos.
                </p>
              </div>
            </div>
            <div className="paragrafo marginleft">
              <h3>
                <span className="negrito">05. Tom de voz Inteligente</span>
              </h3>
              <br />
              <p>
                Comunicamos ideias de forma criativa e bem fundamentada, com um
                toque de elegância e astúcia.
                <br />
                <span className="underline">O que significa:</span> Sagaz,
                sapiente, brilhante, inventivo, criativo, capaz, bem-educado.
                <br />
                <span className="underline">O que não significa:</span> Erudito,
                enciclopedista, chato, complicado, labiríntico, incompreensível,
                inacessível, obscuro.
                <br />
              </p>
              <p className="paragrafo marginleft boxtexto">
                <span className="underline negrito">
                  Como a fala assertiva soa:
                </span>{" "}
                como uma conversa perspicaz, que expressa ideias de maneira
                criativa e bem-pensada. Combina elegância e leveza com
                profundidade, tornando assuntos complexos acessíveis e
                interessantes, sem exagerar no vocabulário técnico ou acadêmico.
                Esse tom é{" "}
                <span className="underline">seguro e inventivo,</span>{" "}
                estimulando a curiosidade e demonstrando conhecimento com
                naturalidade, sem nunca soar pedante ou inacessível. Faz o
                ouvinte sentir que está interagindo com{" "}
                <span className="underline">alguém brilhante e capaz,</span> mas
                que prefere encantar e engajar em vez de impressionar de maneira
                formal ou distante. É um tom que{" "}
                <span className="underline">deixa espaço para a reflexão,</span>{" "}
                convidando o público a explorar novos pensamentos com prazer e
                entendimento.
              </p>
              <div className="boxtons">
                <p className="paragrafo marginleft boxdos midwidth">
                  <span className="underline negrito">Como dialogamos:</span> A
                  cultura da Gröwnt é marcada por um ambiente leve e
                  colaborativo, com uma gestão sem microgerenciamento. O senso
                  de cooperação é forte, incentivando o apoio mútuo, a
                  transparência e uma interação saudável entre todos os
                  colaboradores.
                </p>
                <p className="paragrafo marginleft boxdonts midwidth">
                  <span className="underline negrito">
                    Como não dialogamos:
                  </span>{" "}
                  A cultura da Gröwnt, imersa em uma atmosfera etérea e quase
                  tangível em sua leveza, encontra-se intrinsecamente
                  entrelaçada com um ethos colaborativo, onde a gestão se
                  configura não como uma estrutura opressiva e impositiva, mas
                  como um princípio fluido, desprovido das amarras do
                  microgerenciamento. Nesse contexto, predomina um senso
                  profundo de cooperação, cuja manifestação se traduz em uma
                  rede de apoio mútuo, interconectando os indivíduos de forma
                  transcendental, ao passo que a transparência e a interação
                  harmoniosa entre os colaboradores emergem como pilares
                  invisíveis, mas essenciais, de um ambiente onde o coletivo é
                  simultaneamente enigmático e perfeitamente alinhado.
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Conteudoidentidadeverbal;
