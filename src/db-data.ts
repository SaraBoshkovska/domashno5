export const PLAYERS: any = [
    {
        id: 1,
        name: "Novak Djokovic",
        iconUrl: 'https://www.atptour.com/-/media/alias/player-headshot/D643',
        country: "Serbia",
        points: 11055,
        ranking: 1
    },
    {
        id: 2,
        name: "Carlos Alcaraz",
        iconUrl: 'https://www.atptour.com/-/media/alias/player-headshot/a0e2',
        country: "Spain",
        points: 8855,
        ranking: 2
    },

    {
        id: 3,
        name: 'Daniil Medvedev',
        iconUrl: 'https://www.atptour.com/-/media/alias/player-headshot/mm58',
        country: "Russia",
        points: 7555,
        ranking: 3
    },

    {
        id: 4,
        name: "Jannik Sinner",
        iconUrl: 'https://www.atptour.com/-/media/alias/player-headshot/s0ag',
        country: "Italy",
        points: 6490,
        ranking: 4
    }
];

export function findPlayerById(playerId:number) {
    return PLAYERS.find((player: { id: number; }) => player.id === playerId);
}