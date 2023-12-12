import { DocumentSnapshot, SnapshotOptions } from "firebase/firestore";

export class Profile {
  picture: string;
  description: string;
  resume: string;

  constructor(picture: string, description: string, resume: string) {
    this.picture = picture;
    this.description = description;
    this.resume = resume;
  }
}

// Firestore data converter
export const profileConverter = {
  toFirestore: (profile: Profile) => {
    return {
      picture: profile.picture,
      description: profile.description,
      resume: profile.resume,
    };
  },
  fromFirestore: (
    snapshot: DocumentSnapshot,
    options: SnapshotOptions
  ) => {
    const data = snapshot.data(options);

    if (data == null) return;

    return new Profile(data.picture, data.description, data.resume);
  },
};