export async function fetchGeoLocation(query) {
  return await fetch(`http://ip-api.com/json/${query}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.status === 'fail') throw new Error(res.message);
      return res;
    })
    .catch((e) => {
      throw new Error(e.message);
    });
}
