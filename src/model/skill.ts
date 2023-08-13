import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export class Skill {
    id: string;
    skill: string;

    constructor(id: string, skill: string) {
        this.id = id;
        this.skill = skill;
    }
}

// Firestore data converter
export const skillConverter = {
    toFirestore: (skill: Skill) => {
        return {
            id: skill.id,
            skill: skill.skill,
        };
    },
    fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
        const data = snapshot.data(options);

        if (data == null) return;

        return new Skill(data.id, data.skill);
    }
};