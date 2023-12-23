export async function getGamesList() {
  const response = await fetch(
    "https://api.challonge.com/v1/tournaments/8uiqdg3e/matches.json?api_key=gDHBLooHPXI0whxfhpQ0dcxYJ3Tehnq7RaomFweU",
    { next: { revalidate: 2 } }
  );
  return await response.json();
}

export async function getParticipants() {
  const response = await fetch(
    "https://api.challonge.com/v1/tournaments/8uiqdg3e/participants.json?api_key=gDHBLooHPXI0whxfhpQ0dcxYJ3Tehnq7RaomFweU",
    { next: { revalidate: 2 } }
  );
  return await response.json();
}
