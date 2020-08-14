import estadoInicial from "../EstadoInicial";

function reducer(state = estadoInicial, action){
    let idUsu,aK;
    switch(action.type){
      
      case "LOGIN":
        idUsu = action.payload.idUsu;
        aK = action.payload.apiKey;
        return {...state,idUsuario:idUsu,apiKey:aK}
      case "LOGINERROR":
        return {...state,Mensaje:action.payload.Mensaje}
      case "REGISTER":
        idUsu = action.payload.idUsu;
        aK = action.payload.apiKey;
        return {...state,idUsuario:idUsu,apiKey:aK}
      case "REGISTERERROR":
        return {...state,Mensaje:action.payload.Mensaje}
      case "CARGARUBROS":
        return {...state,rubros:action.payload}
      case "ACTUALIZAR":
        return {...state,gastos:action.payload}
      default:
        return state;
    } 
  }
export default reducer;