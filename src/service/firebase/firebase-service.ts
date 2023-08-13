import { firebaseCollection } from "@/config";
import { skillConverter, educationConverter, workExperienceConverter, volunteerConverter, awardConverter, projectConverter, categoryConverter } from "@/model";
import { DocumentReference, Firestore, collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";

export async function getWorkExperienceList(db: Firestore) {
    const workExperiencesQuery = query(
        collection(db, firebaseCollection.workExperiences).withConverter(workExperienceConverter),
        orderBy("startDate", 'desc') // This orders the results in ascending order based on startDate
    );
    const querySnapshot = await getDocs(workExperiencesQuery);

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getEducationList(db: Firestore) {
    const educationsQuery = query(
        collection(db, firebaseCollection.educations).withConverter(educationConverter),
        orderBy("startDate", 'desc') // Assuming educations also have a startDate
    );
    const querySnapshot = await getDocs(educationsQuery);

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getSkillList(db: Firestore) {
    const querySnapshot = await getDocs(collection(db, firebaseCollection.skills).withConverter(skillConverter));

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getVolunteerList(db: Firestore) {
    const volunteerQuery = query(
        collection(db, firebaseCollection.volunteers).withConverter(volunteerConverter),
        orderBy("startDate", 'desc')
    );
    const querySnapshot = await getDocs(volunteerQuery);
    return querySnapshot.docs.map(doc => doc.data());
}

export async function getAwardList(db: Firestore) {
    const awardsQuery = query(
        collection(db, firebaseCollection.awards).withConverter(awardConverter),
        orderBy("date", 'desc')
    );
    const querySnapshot = await getDocs(awardsQuery);
    return querySnapshot.docs.map(doc => doc.data());
}

export async function getProjectList(db: Firestore) {
    const projectsQuery = query(
        collection(db, firebaseCollection.projects).withConverter(projectConverter)
    );
    const querySnapshot = await getDocs(projectsQuery);
    return querySnapshot.docs.map(doc => doc.data());
}

export async function getProjectListByCategory(db: Firestore, category: DocumentReference) {
    // Assuming you have a field named "categoryRef" in your project documents that holds a reference to the category document
    const q = query(collection(db, "projects"), where("category", "==", category)).withConverter(projectConverter);
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getProject(db: Firestore, id: string) {
    const docRef = doc(db, firebaseCollection.projects, id).withConverter(projectConverter);
    const docSnap = await getDoc(docRef);
    console.log('[getProject][docSnap]', docSnap);

    return docSnap.data();
}

export async function getCategoryList(db: Firestore) {
    const categoriesQuery = query(
        collection(db, firebaseCollection.categories).withConverter(categoryConverter),
        orderBy("date", 'desc')
    );
    const querySnapshot = await getDocs(categoriesQuery);
    return querySnapshot.docs.map(doc => doc.data());
}