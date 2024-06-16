export async function useURLFetch(route, { method, body }) {
  let res = await fetch(`https://spoo.me${route}`, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });
  res = await res.json();

  return res;
}
