export async function FetchData(url: string) {
  const csrf = sessionStorage.getItem('X-CSRF-Token');
  const obj = {
    'X-CSRF-Token': csrf,
  };
  const body = JSON.stringify(obj);
  const res = await fetch(url, { body });

  return await res.json();
}
