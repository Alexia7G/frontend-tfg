import axios from "axios";

const URL_BASE = "https://a346-190-11-151-195.sa.ngrok.io";

// --------------------------USUARIO--------------------------
async function authenticate(mode, email, password) {
  const url = `${URL_BASE}/usuario/${mode}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = "da5a5d5ad5a5da6"; //response.data.idToken;
  //console.log(response.data);
  return token;
}

export function createUser(email, password) {
  return authenticate("nuevoUsuario", email, password);
}

export function login(email, password) {
  const aux = `${email}/${password}`;
  return authenticate(aux, email, password);
}

// --------------------------ESTABLECIMIENTOS--------------------------
export const getEstablecimientos = async () => {
  const res = await fetch(`${URL_BASE}/lugar`, {
    method: "GET",
  });
  return await res.json();
};

export const guardarEstablecimiento = async (establecimiento) => {
  const res = await fetch(`${URL_BASE}/lugar/nuevo`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(establecimiento),
  });
  return await res.json();
};

// --------------------------CATEGORIAS--------------------------
export const getCategorias = async () => {
  const res = await fetch(`${URL_BASE}/categorias`, {
    method: "GET",
  });
  return await res.json();
};

// --------------------------PAISES--------------------------
export const getPaises = async () => {
  const res = await fetch(`${URL_BASE}/paises`, {
    method: "GET",
  });
  return await res.json();
};
// --------------------------PROVINCIAS--------------------------
export const getProvincias = async () => {
  const res = await fetch(`${URL_BASE}/provincias`, {
    method: "GET",
  });
  return await res.json();
};
// --------------------------CIUDADES--------------------------
export const getCiudades = async () => {
  const res = await fetch(`${URL_BASE}/ciudades`, {
    method: "GET",
  });
  return await res.json();
};
