import { DocumentReference, Timestamp } from "firebase-admin/firestore";
import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export class project {
    id: string;
    name: string;
    description: string;
    techStack: [string];
    media: [string];
    github: string;
    link: string;
    category: DocumentReference;

    constructor(id: string, name: string, description: string, techStack: [string], media: [string], github: string, link: string, category: DocumentReference) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.techStack = techStack;
        this.media = media;
        this.github = github;
        this.link = link;
        this.category = category;
    }
}

// Firestore data converter
export const projectConverter = {
    toFirestore: (project: project) => {
        return {
            id: project.id,
            name: project.name,
            description: project.description,
            techStack: project.techStack,
            media: project.media,
            github: project.github,
            link: project.link,
            category: project.category,
        };
    },
    fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
        const data = snapshot.data(options);

        if (data == null) return;

        return new project(data.id, data.name, data.description, data.techStack, data.media, data.github, data.link, data.category);
    }
};