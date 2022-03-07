export type Competition = {
    id: number,
    area: {
        id: number,
        name: string
    },
    name: string,
    code: null, // ?
    plan: string,
    currentSeason: {
        id: number,
        startDate: string, // date no time
        endDate: string,  // date no time
        currentMatchday: null // ?
    },
    numberOfAvailableSeasons: number,
    lastUpdated: string // date with time
}

export type CompetitionsResponseObj = {
    competitions: Competition[],
    count: number,
    filter: any
}


export type TeamsInCompetitionResponseObj = {
    competition: Competition,
    teams: Team[],
    count:number,
    season?:any, // type def needed
    filters?: any,
}

export type Team = {
    id: number,
    area: {
        id: number,
        name: string
    },
    name: string,
    shortName: string,
    tla: string,
    crestUrl: string,
    address: string,
    phone: string,
    website: string,
    email: string,
    founded: number,
    clubColors: string,
    venue: string,
    lastUpdated: string // date w time 
    squad?: Member[], 
}

export type Member = {
    id: number,
    name: string,
    position: string,
    dateOfBirth: string, // date
    countryOfBirth: string,
    nationality: string,
    role: string,
}