import { Timestamp } from "firebase-admin/firestore";
import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export class Education {
    id: string;
    school: string;
    degree: string;
    fieldOfStudy: string;
    description: string[];
    startDate: Timestamp;
    endDate: Timestamp;

    constructor(id: string, school: string, degree: string, fieldOfStudy: string, startDate: Timestamp, endDate: Timestamp, description: string[]) {
        this.id = id;
        this.school = school;
        this.degree = degree;
        this.fieldOfStudy = fieldOfStudy;
        this.startDate = startDate
        this.endDate = endDate;
        this.description = description;
    }
}

// Firestore data converter
export const educationConverter = {
    toFirestore: (education: Education) => {
        return {
            id: education.id,
            school: education.school,
            degree: education.degree,
            fieldOfStudy: education.fieldOfStudy,
            startDate: education.startDate,
            endDate: education.endDate,
            description: education.description
        };
    },
    fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
        const data = snapshot.data(options);

        if (data == null) return;

        return new Education(data.id, data.school, data.degree, data.fieldOfStudy, data.startDate, data.endDate, data.description);
    }
};