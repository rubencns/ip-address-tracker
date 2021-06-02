export async function fetchGeoLocation(query) {
  return await fetch(`http://ip-api.com/json/${query}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((e) => {
      console.log(e);
      throw new Error(e);
    });
}
