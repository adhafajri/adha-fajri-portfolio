import { Timestamp } from "firebase-admin/firestore";
import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export class award {
    id: string;
    title: string;
    issuer: string;
    description: [string];
    date: Timestamp;

    constructor(id: string, title: string, issuer: string, date: Timestamp, description: [string]) {
        this.id = id;
        this.title = title;
        this.issuer = issuer;
        this.date = date
        this.description = description;
    }
}

// Firestore data converter
export const awardConverter = {
    toFirestore: (award: award) => {
        return {
            id: award.id,
            title: award.title,
            issuer: award.issuer,
            date: award.date,
            description: award.description
        };
    },
    fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
        const data = snapshot.data(options);

        if (data == null) return;

        return new award(data.id, data.title, data.issuer, data.date, data.description);
    }
};