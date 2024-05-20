export default async function sheetcall(Difficulty: string) {
  const data = fetch(
    `https://lavenderlord-stinger.toystack.dev/${Difficulty}`
  );
  const response = await data;

  return response;
}
export async function companycall(company: string) {
  const data = fetch(`https://lavenderlord-stinger.toystack.dev/specific?companies=${company}`);
  const response = await data;

  return response;
}