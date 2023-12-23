import { getGamesList, getParticipants } from "@/api/endpoints";

export default async function Home() {
  const games = await getGamesList();
  const participants = await getParticipants();

  games.forEach((game) => {
    if (game.match.group_id) {
      const index1 = participants.findIndex((part) =>
        part.participant.group_player_ids.includes(game.match.player1_id)
      );
      const index2 = participants.findIndex((part) =>
        part.participant.group_player_ids.includes(game.match.player2_id)
      );
      if (!participants[index1].participant.score) {
        participants[index1].participant.score = 0;
      }
      if (!participants[index2].participant.score) {
        participants[index2].participant.score = 0;
      }
      participants[index1].participant.group_id = game.match.group_id;
      participants[index2].participant.group_id = game.match.group_id;

      if (game.match.scores_csv) {
        const scores = game.match.scores_csv.split("-");

        participants[index1].participant.score += +scores[0];
        participants[index2].participant.score += +scores[1];
      }
    }
  });

  const groupsDict = {};
  games.forEach((game) => {
    groupsDict[game.match.group_id] = 0;
  });
  let groups = [];
  for (const [key, value] of Object.entries(groupsDict)) {
    groups.push(key);
  }

  return (
    <div className="p-4 space-y-4 text-center">
      <h1 className="font-light text-2xl">Punkte (Gruppenphase)</h1>

      {groups?.map((groupId, i) => (
        <>
          <div key={groupId} className="text-xl pt-4">
            Gruppe {String.fromCharCode(65 + i)}
          </div>
          <div className="space-y-4">
            {participants
              ?.filter((el) => el.participant.group_id == groupId)
              .map((part) => (
                <div
                  key={part.participant.id}
                  className="p-2 bg-accent rounded-md drop-shadow-md flex flex-col gap-2"
                >
                  <p>{part.participant.name}</p>
                  <p className="text-2xl">{part.participant.score}</p>
                </div>
              ))}
          </div>
        </>
      ))}
    </div>
  );
}
