export interface Colonist {
    name: string;
    job: Job;
    id: number;
    age: number;
}

export class NewColonist {
    name: string;
    age: string;
    job_id: string;
    constructor(name: string, age: string, job_id: string) {
        this.name = name;
        this.age = age;
        this.job_id = job_id;
    }
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

export class Alien {
    type: string;
    submitted_by?: string;
    id: string;
    description: string;
}

export interface Job {
    name: string;
    id: string;
    description: string;
}
