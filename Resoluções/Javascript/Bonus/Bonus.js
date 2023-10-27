async function a(){
    b()
    await c();
    await d();
    alertUser("a")
  }
  a();

  function b(){
    return;
    alertUser('b'); //Return sendo chamado antes da função, logo a chamada nunca será executada.
  }

  function c(){
    return new Promise ((resolve)=>{ //Chamada de uma promessa, porém em uma função que não é assíncrona, então não terá um propósito prático.
      resolve();
      alertUser('c');
    });
  }

  function d(){
    return new Promise ((resolve)=>{ //Chamada de uma promessa, porém em uma função que não é assíncrona, então não terá um propósito prático.
      alertUser('d');
    })
  }

  function alertUser(message){
    console.log('A função é: ' +message);
  }