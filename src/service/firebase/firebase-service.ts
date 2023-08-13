import { FirebaseCollection } from "@/config";
import { skillConverter, educationConverter, workExperienceConverter, volunteerConverter, awardConverter, projectConverter, categoryConverter } from "@/model";
import { Firestore, collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";

export async function getWorkExperienceList(db: Firestore) {
    const workExperiencesQuery = query(
        collection(db, FirebaseCollection.workExperiences).withConverter(workExperienceConverter),
        orderBy("startDate", 'desc') // This orders the results in ascending order based on startDate
    );
    const querySnapshot = await getDocs(workExperiencesQuery);

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getEducationList(db: Firestore) {
    const educationsQuery = query(
        collection(db, FirebaseCollection.educations).withConverter(educationConverter),
        orderBy("startDate", 'desc') // Assuming educations also have a startDate
    );
    const querySnapshot = await getDocs(educationsQuery);

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getSkillList(db: Firestore) {
    const querySnapshot = await getDocs(collection(db, FirebaseCollection.skills).withConverter(skillConverter));

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getVolunteerList(db: Firestore) {
    const volunteerQuery = query(
        collection(db, FirebaseCollection.volunteers).withConverter(volunteerConverter),
        orderBy("startDate", 'desc')
    );
    const querySnapshot = await getDocs(volunteerQuery);
    return querySnapshot.docs.map(doc => doc.data());
}

export async function getAwardList(db: Firestore) {
    const awardsQuery = query(
        collection(db, FirebaseCollection.awards).withConverter(awardConverter),
        orderBy("date", 'desc')
    );
    const querySnapshot = await getDocs(awardsQuery);
    return querySnapshot.docs.map(doc => doc.data());
}

export async function getProjectPlatformList(db: Firestore) {
    const projectsQuery = query(
        collection(db, FirebaseCollection.projects).withConverter(projectConverter)
    );
    const querySnapshot = await getDocs(projectsQuery);

    const platforms = querySnapshot.docs
        .map(doc => doc.data()?.platform || null)
        .filter(Boolean) as string[];  // This will remove any null values from the array and ensure the type is string[]

    return Array.from(new Set(platforms));
}

export async function getProjectList(db: Firestore) {
    const projectsQuery = query(
        collection(db, FirebaseCollection.projects).withConverter(projectConverter)
    );
    const querySnapshot = await getDocs(projectsQuery);
    return querySnapshot.docs.map(doc => doc.data());
}

export async function getProjectListByPlatform(db: Firestore, platform: string) {
    const q = query(collection(db, "projects"), where("platform", "==", platform)).withConverter(projectConverter);
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getProject(db: Firestore, id: string) {
    const docRef = doc(db, FirebaseCollection.projects, id).withConverter(projectConverter);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
}

export async function getCategoryList(db: Firestore) {
    const categoriesQuery = query(
        collection(db, FirebaseCollection.categories).withConverter(categoryConverter),
        orderBy("date", 'desc')
    );
    const querySnapshot = await getDocs(categoriesQuery);
    return querySnapshot.docs.map(doc => doc.data());
}