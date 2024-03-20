"use server";
const getMusicList = async () => {
  const response = await fetch(
    "https://65fb4b0514650eb21009c9f1.mockapi.io/songs"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch songs");
  }

  return response.json();
};

export default getMusicList;
