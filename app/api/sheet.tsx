export default async function sheetcall(Difficulty: string) {
  const data = fetch(`http://4.213.40.108/${Difficulty}`);
  const response = await data;

  return response;
}
