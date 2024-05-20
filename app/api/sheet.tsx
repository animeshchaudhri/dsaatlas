export default async function sheetcall(Difficulty: string) {
  const data = fetch(
    `https://lavenderlord-stinger.toystack.dev/${Difficulty}`
  );
  const response = await data;

  return response;
}
export async function companycall(company: string) {
  const data = fetch(
    `https://helixsnagglefoot-collar.toystack.dev/specific?companies=${company}`
  );
  const response = await data;

  return response;
}

export async function addUserQuestions(userId: string, questionIds: string[]) {
  try {
    const response = await fetch("https://helixsnagglefoot-collar.toystack.dev/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userId,
        question_ids: questionIds
      })
    });
    return response;
  } catch (error) {
    console.error("Error adding/updating user's questions:", error);
    throw error;
  }
}


export async function getUserQuestions(userId: string) {
  try {
    const response = await fetch(`https://helixsnagglefoot-collar.toystack.dev/search?user_id=${userId}`);
    return response;
  } catch (error) {
    console.error("Error fetching user's questions:", error);
    throw error;
  }
}