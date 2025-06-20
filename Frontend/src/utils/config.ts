const getBackendUrl = () => {
  const isProd = import.meta.env.PROD;
  return isProd 
    ? import.meta.env.VITE_BACKEND_URL_PROD 
    : import.meta.env.VITE_BACKEND_URL;
};

export const config = {
  backendUrl: getBackendUrl()
};
