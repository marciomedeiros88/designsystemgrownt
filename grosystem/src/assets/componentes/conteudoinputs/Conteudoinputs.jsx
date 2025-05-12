import "./index.scss";
import { useState, useRef } from "react";

function Conteudoinputs() {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const openFileDialog = () => {
    inputRef.current.click();
  };

  return (
    <>
      <div className="Conteudoinputs">
        <div className="cardinputs">
          <div className="titulocardinputs">
            <h1 className="tituloinputs">Biblioteca de inputs</h1>
          </div>
          <div className="inputstext">
            <div className="areainput">
              <div className="tituloinput">
                <label>Input sem valor inicial</label>
              </div>
              <div className="exemploinput">
                <input type="text" className="input" />
              </div>
            </div>
            <div className="areainput">
              <div className="tituloinput">
                <label>Input com valor inicial</label>
              </div>
              <div className="exemploinput">
                <input type="text" className="input" value="Valor inicial" />
              </div>
            </div>
            <div className="areainput">
              <div className="tituloinput">
                <label>Input de senha</label>
              </div>
              <div className="exemploinput">
                <input
                  type="password"
                  className="input"
                  value="Valor inicial"
                />
              </div>
            </div>
          </div>
          <div className="inputstext">
            <div className="areainput">
              <div className="tituloinput">
                <label>Input tipo select</label>
              </div>
              <div className="exemploinput">
                <select name="select" className="input">
                  <option value="valor1">Valor 1</option>
                  <option value="valor2">Valor 2</option>
                  <option value="valor3">Valor 3</option>
                </select>
              </div>
            </div>
            <div className="areainput">
              <div className="tituloinput">
                <label>Input tipo área de texto</label>
              </div>
              <div className="exemploinput">
                <textarea
                  type="text"
                  className="textarea"
                  value="Valor inicial"
                >
                  {" "}
                </textarea>
              </div>
            </div>
          </div>
          <div className="inputsfile">
            <div className="areainput">
              <div className="tituloinput">
                <label>Input tipo arquivo</label>
              </div>
              <div className="exemploinput">
                <input type="file" name="select" className="input" />
              </div>
            </div>
            <div className="areainput">
              <div className="tituloinput">
                <label>Input tipo drag and drop</label>
              </div>
              <div
                className="exemploinput"
                onClick={openFileDialog}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <input
                  type="file"
                  className="filearea"
                  ref={inputRef}
                  onChange={handleFileChange}
                />
                {file ? (
                  <div>
                    <p>Arquivo selecionado: {file.name}</p>
                  </div>
                ) : (
                  <div className="inputstext">
                    <p>Arraste um arquivo aqui ou clique para selecionar</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conteudoinputs;
