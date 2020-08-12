import estadoInicial from "../EstadoInicial";

function reducer(state = estadoInicial, action){
    let idUsu,apiKey;
    switch(action.type){
      case "TEST":
        return {...state,prueba:"Segundo texto de prueba"}
        case "GUARDAR":
          return{...state,pronostico:action.payload, login:true}
        case "LOGIN":
          idUsu = action.payload.idUsu;
          apiKey = action.payload.apiKey;
          return {...state,idUsuario:idUsu,apiKey:apiKey}
        case "LOGINERROR":
          return {...state,Mensaje:action.payload.Mensaje}
        case "REGISTER":
          idUsu = action.payload.idUsu;
          apiKey = action.payload.apiKey;
          return {...state,idUsuario:idUsu,apiKey:apiKey}
        case "REGISTERERROR":
          return {...state,Mensaje:action.payload.Mensaje}
      default:
        return state;
    } 
  }
export default reducer;