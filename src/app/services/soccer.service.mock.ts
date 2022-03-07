import { Competition, CompetitionsResponseObj, Member, Team } from 'src/app/services/data-types.model';
export const mockCompetitions: Competition[] = [
    {
        id: 1,
        area: {
            id: 12,
            name: 'USA'
        },
        name: 'USA soccer league',
        code: null,
        plan: 'TIER_ONE',
        currentSeason: {
            id: 2839,
            startDate: '2018-05-22',
            endDate: '2018-10-22',
            currentMatchday: null,
        },
        numberOfAvailableSeasons: 1,
        lastUpdated: '2018-07-13T13:34:06Z'
    },
    {
        id: 2,
        area: {
            id: 12,
            name: 'USA'
        },
        name: 'MLS',
        code: null,
        plan: 'TIER_ONE',
        currentSeason: {
            id: 28329,
            startDate: '2019-05-22',
            endDate: '2019-10-22',
            currentMatchday: null,
        },
        numberOfAvailableSeasons: 1,
        lastUpdated: '2018-07-13T13:34:06Z'
    },
    {
        id: 3,
        area: {
            id: 122,
            name: 'USA'
        },
        name: 'Canada MLS',
        code: null,
        plan: 'TIER_ONE',
        currentSeason: {
            id: 32839,
            startDate: '2020-05-22',
            endDate: '2020-10-22',
            currentMatchday: null,
        },
        numberOfAvailableSeasons: 1,
        lastUpdated: '2018-07-13T13:34:06Z'
    },
    {
        id: 5,
        area: {
            id: 12,
            name: 'USA'
        },
        name: 'Mexico Soccer',
        code: null,
        plan: 'TIER_ONE',
        currentSeason: {
            id: 2832329,
            startDate: '2021-05-22',
            endDate: '2021-10-22',
            currentMatchday: null,
        },
        numberOfAvailableSeasons: 1,
        lastUpdated: '2018-07-13T13:34:06Z'
    },
]


export const mockMembers: Member[] = [
    {
        id: 1,
        name: 'Tom Hanks',
        position: 'back',
        dateOfBirth: '2019-09-21', // date
        countryOfBirth: 'USA',
        nationality: 'USA',
        role: 'PLAYER',
    },
    {
        id: 2,
        name: 'Hom Tanks',
        position: 'Front',
        dateOfBirth: '2019-09-21', // date
        countryOfBirth: 'USA',
        nationality: 'USA',
        role: 'PLAYER',
    },
    {
        id: 3,
        name: 'Bom Banks',
        position: 'keeper',
        dateOfBirth: '2019-09-21', // date
        countryOfBirth: 'USA',
        nationality: 'USA',
        role: 'PLAYER',
    },
    {
        id: 4,
        name: 'Lom Lanks',
        position: 'back',
        dateOfBirth: '2019-09-21', // date
        countryOfBirth: 'USA',
        nationality: 'USA',
        role: 'PLAYER',
    },
]

export const mockTeams: Team[] = [
    {
        id: 380,
        area: {
            id: 8380,
            name: 'USA'
        },
        name: 'USA Birds',
        shortName: 'Birds',
        tla: 'not sure',
        crestUrl: 'maybe get test url?',
        address: '123 main st denver co ',
        phone: '808-909-0909',
        website: 'www.birds.com',
        email: 'soccer@birds.com',
        founded: 1900,
        clubColors: 'blue / white',
        venue: 'Big stadium',
        lastUpdated: 'datestring',
        squad: mockMembers,
    }, {
        id: 3982,
        area: {
            id: 8380,
            name: 'Canda'
        },
        name: 'Canda Birds',
        shortName: 'Birds',
        tla: 'not sure',
        crestUrl: 'maybe get test url?',
        address: '123 main st denver co ',
        phone: '808-909-0909',
        website: 'www.birds.com',
        email: 'soccer@birds.com',
        founded: 1900,
        clubColors: 'blue / white',
        venue: 'Big stadium',
        lastUpdated: 'datestring',
        squad: mockMembers,
    }
]



export const mockTeamsInCompetitionResponseObj = {
    competition: {
        id: 1,
        area: {
            id: 12,
            name: 'USA'
        },
        name: 'USA soccer league',
        code: null,
        plan: 'TIER_ONE',
        currentSeason: {
            id: 2839,
            startDate: '2018-05-22',
            endDate: '2018-10-22',
            currentMatchday: null,
        },
        numberOfAvailableSeasons: 1,
        lastUpdated: '2018-07-13T13:34:06Z'
    },
    teams: mockTeams,
    count: 2,
}

export let mockCompetitionsResponseObj:CompetitionsResponseObj = {
    competitions: mockCompetitions,
    count: mockCompetitions.length,
    filter: undefined
}