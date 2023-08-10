import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export class category {
    id: string;
    category: string;

    constructor(id: string, category: string) {
        this.id = id;
        this.category = category;
    }
}

// Firestore data converter
export const categoryConverter = {
    toFirestore: (category: category) => {
        return {
            id: category.id,
            category: category.category,
        };
    },
    fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
        const data = snapshot.data(options);

        if (data == null) return;

        return new category(data.id, data.category);
    }
};