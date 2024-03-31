export default async function sheetcall(Difficulty) {
  const data = fetch(`https://leetcode-animeshxd.koyeb.app/${Difficulty}`);
  const response = await data;

  return response;
}
