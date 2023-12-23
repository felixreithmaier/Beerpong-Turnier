import { getGamesList, getParticipants } from "@/api/endpoints";

export default async function Home() {
  const games = await getGamesList();
  const participants = await getParticipants();
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
      <h1 className="font-light text-2xl">Gruppenphase</h1>
      <div className="space-y-4">
        {games
          ?.filter((e) => e.match.group_id)
          .map((game) => (
            <div
              key={game.match.id}
              className="p-2 bg-accent rounded-md drop-shadow-md"
            >
              <p>
                Gruppe{" "}
                {String.fromCharCode(
                  65 + groups.findIndex((index) => index == game.match.group_id)
                )}
              </p>
              <div className="w-full flex items-center">
                <div className="basis-5/12">
                  {participants
                    ?.find(
                      (team) =>
                        team.participant.group_player_ids.includes(
                          game.match.player1_id
                        ) || team.participant.id === game.match.player1_id
                    )
                    ?.participant?.name.split("(")
                    .map((el, i) => (
                      <p key={i}>{i === 1 ? "(" + el : el}</p>
                    ))}
                </div>
                <div className="basis-2/12 text-xl">
                  {game.match.scores_csv || "-"}
                </div>
                <div className="basis-5/12">
                  {participants
                    ?.find(
                      (team) =>
                        team.participant.group_player_ids.includes(
                          game.match.player2_id
                        ) || team.participant.id === game.match.player2_id
                    )
                    ?.participant?.name.split("(")
                    .map((el, i) => (
                      <p key={i}>{i === 1 ? "(" + el : el}</p>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
