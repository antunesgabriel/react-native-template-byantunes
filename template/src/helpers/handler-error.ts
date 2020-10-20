import {showMessage} from 'react-native-flash-message';

export const handleError = (error: any): false => {
  if (!error.response || error?.response?.statusCode >= 500) {
    showMessage({
      message:
        'Ops! parece que o estagiario derrubou o servidor... Tente novamente',
      type: 'danger',
    });

    return false;
  }

  if (error.response?.data?.messages) {
    const {data} = error.response;

    showMessage({
      message: data.message[0].messages[0].message,
      type: 'danger',
    });

    return false;
  }

  showMessage({
    message:
      'Ops! parece que o estagiario derrubou o servidor... Tente novamente',
    type: 'danger',
  });

  return false;
};
