import "./Cartao.scss";

const Cartao = ({ nome, numero, mes, ano, cod }) => {
  return (
    <div className="cartao">
      <div className="cont-nome">
          <p className="titulo">Nome:</p>
          <p className="conteudo">{nome}</p>
      </div>
      <div className="cont-numero">
          <p className="titulo">Numero:</p>
          <p className="conteudo">{numero[0]}{numero[1]}{numero[2]}{numero[3]} {numero[4]}{numero[5]}{numero[6]}{numero[7]} {numero[8]}{numero[9]}{numero[10]}{numero[11]} {numero[12]}{numero[13]}{numero[14]}{numero[15]}</p>
      </div>
      <div className="cont-validade">
        <div>
          <p className="titulo">VALID:</p>
          <p className="conteudo">
            {mes}/{ano}
          </p>
        </div>
          <div>
            <p className="titulo">Cod Securyty:</p>
            <p className="conteudo">{cod}</p>
          </div>
          
      </div>
    </div>
  );
};

export default Cartao;
