import { getGamesList, getParticipants } from "@/api/endpoints";

export default async function Home() {
  const games = await getGamesList();
  const participants = await getParticipants();

  return (
    <div className="p-4 space-y-4 text-center">
      <h1 className="font-light text-2xl">Finalspiele</h1>
      <div className="space-y-4">
        {games
          ?.filter((e) => !e.match.group_id)
          .map((game, i) => (
            <div key={game.match.id}>
              {i === 0 && <div className="text-xl p-4">Halbfinale</div>}
              {i === 1 && <div className="text-xl p-4">Halbfinale</div>}
              {i === 2 && <div className="text-xl p-4">Finale</div>}
              {i === 3 && <div className="text-xl p-4">Spiel um Platz 3</div>}
              <div className="p-2 bg-accent rounded-md drop-shadow-md w-full flex items-center">
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
