export interface Colonist {
    name: string;
    job: Occupation;
    id: number;
    age: number;
}

export class NewColonist {
    name: string;
    age: number;
    job_id: Occupation;
}

export interface Encounter {
    id: number;
    date: string;
    colonist_id: number;
    atype: string;
    action: string;
}

export class NewEncounter {
    atype: string;
    date: number;
    action: string;
    colonist_id: number;
}

export interface Alien {
    type: string;
    submitted_by: string;
    id: number;
    description: string;
}

export interface Occupation {
    name: string;
    id: number;
    description: string;
}
