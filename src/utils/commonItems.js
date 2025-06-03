// export const backendBase = "https://socializzebackend.site";
export const backendBase = " http://localhost:8000";
export const backendUrl = backendBase + "/api/";

export function checkTokenValidity(token) {
  const jwtPayload = JSON.parse(window.atob(token.split(".")[1]));
  const dte = jwtPayload.exp * 1000;

  return new Date(dte) > new Date(Date.now());
}

export const isValidImage = async (url) => {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok && res.headers.get("Content-Type")?.startsWith("image");
  } catch (error) {
    return false;
  }
};
