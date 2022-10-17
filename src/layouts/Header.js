import React from 'react';

function Header(){

const [contador, setContador] = React.useState(0);
function aumentar (){
    const valor = contador + 1;
    setContador(valor);
}

function diminuir (){
    const valor = contador -1;
    setContador(valor);

}



    return(
    <>
<h1>Header</h1>
<h2>COntador: {contador}</h2>
  <button onClick={aumentar}> Aumentar </button>
  <button onClick={diminuir}> Diminuir </button>
  
  </>
);
}

export default Header;