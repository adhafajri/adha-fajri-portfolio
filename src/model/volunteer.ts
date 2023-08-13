import { Timestamp } from "firebase-admin/firestore";
import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export class Volunteer {
    id: string;
    organisation: string;
    position: string;
    description: [string];
    startDate: Timestamp;
    endDate: Timestamp;

    constructor(id: string, organisation: string, position: string, startDate: Timestamp, endDate: Timestamp, description: [string]) {
        this.id = id;
        this.organisation = organisation;
        this.position = position;
        this.startDate = startDate
        this.endDate = endDate;
        this.description = description;
    }
}

// Firestore data converter
export const volunteerConverter = {
    toFirestore: (volunteer: Volunteer) => {
        return {
            id: volunteer.id,
            organisation: volunteer.organisation,
            position: volunteer.position,
            startDate: volunteer.startDate,
            endDate: volunteer.endDate,
            description: volunteer.description
        };
    },
    fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
        const data = snapshot.data(options);

        if (data == null) return;

        return new Volunteer(data.id, data.organisation, data.position, data.startDate, data.endDate, data.description);
    }
};