import { Timestamp } from "firebase-admin/firestore";
import { DocumentSnapshot, QuerySnapshot, SnapshotOptions } from "firebase/firestore";

export class WorkExperience {
    id: string;
    position: string;
    company: string;
    startDate: Timestamp;
    endDate: Timestamp;
    description: [string]

    constructor(id: string, position: string, company: string, startDate: Timestamp, endDate: Timestamp, description: [string]) {
        this.id = id;
        this.position = position;
        this.company = company;
        this.startDate = startDate
        this.endDate = endDate;
        this.description = description;
    }
}

// Firestore data converter
export const workExperienceConverter = {
    toFirestore: (experience: WorkExperience) => {
        return {
            id: experience.id,
            position: experience.position,
            company: experience.company,
            startDate: experience.startDate,
            endDate: experience.endDate,
            description: experience.description
        };
    },
    fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
        const data = snapshot.data(options);

        if (data == null) return;

        return new WorkExperience(data.id, data.position, data.company, data.startDate, data.endDate, data.description);
    }
};