export default async function sheetcall(Difficulty: string) {
  const data = fetch(
    `https://helixsnagglefoot-collar.toystack.dev/${Difficulty}`
  );
  const response = await data;

  return response;
}
