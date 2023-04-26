import "./Formulario.scss"


const Formulario = ({setName,setNumero,setMes,setAno,setCod}) => {
  return (
    <div className="form">
        <div className="box-input">
            <label htmlFor="nome">Nome Impresso no Cartão:</label>
            <input type="text" name="nome" id="nome" onChange={(ev) => setName(ev.target.value)} maxLength={30}/>
        </div>
        <div className="box-input">
            <label htmlFor="numero">Numero:</label>
            <input type="text" name="numero" id="numero" onChange={(ev) => setNumero(ev.target.value)} maxLength={16}/>
        </div>
        <div className="box-input ">
            <label htmlFor="mes">Mes:</label>
            <input type="text" name="mes" id="mes" onChange={(ev) => setMes(ev.target.value)} maxLength={2}/>
            <label htmlFor="ano">Ano:</label>
            <input type="text" name="ano" id="ano" onChange={(ev) => setAno(ev.target.value)} maxLength={4}/>
        </div> 
        <div className="box-input">
            <label htmlFor="cod">Cod:</label>
            <input type="text" name="cod" id="cod" onChange={(ev) => setCod(ev.target.value)} maxLength={3}/>
        </div>

    </div>
  )
}

export default Formulario