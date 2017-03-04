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

export class Encounter {
    id: number;
    date: string;
    colonist_id: string;
    atype: string;
    action: string;
}

export class NewEncounter {
    atype: string;
    date: string;
    action: string;
    colonist_id: string;
    constructor(atype: string, date: string, action: string, colonist_id: string) {
        this.atype = atype;
        this.date = date;
        this.action = action;
        this.colonist_id = colonist_id;
    }
}

export class Alien {
    type: string;
    submitted_by: string;
    id: string;
    description: string;
}

export interface Job {
    name: string;
    id: string;
    description: string;
}
