const defaultstate = {
    login: false,
    token: '',
  };
  
  const userToken = (state = defaultstate, action) => {
    switch (action.type) {
      case 'TOKEN_USER':
        return {login: true, token: action.payload};
    //   case 'TOKEN_SPLASH':
    //     return {...state,...action.payload}
      default:
        return state;
    }
  };
  export default userToken;
  