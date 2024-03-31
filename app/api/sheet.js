export default async function sheetcall() {
  const data = fetch(`https://leetcode-animeshxd.koyeb.app/hard`);
  const response = await data;

  return response;
}

