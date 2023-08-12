import { firebaseCollection } from "@/config";
import { skillConverter, educationConverter, workExperienceConverter, volunteerConverter, awardConverter, projectConverter, categoryConverter } from "@/model";
import { DocumentReference, Firestore, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

export async function getWorkExperienceList(db: Firestore) {
    const querySnapshot = await getDocs(collection(db, firebaseCollection.workExperiences).withConverter(workExperienceConverter));
    console.log('[getWorkExperienceList][querySnapshot]', querySnapshot);

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getEducationList(db: Firestore) {
    const querySnapshot = await getDocs(collection(db, firebaseCollection.educations).withConverter(educationConverter));
    console.log('[getWorkExperienceList][querySnapshot]', querySnapshot);

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getSkillList(db: Firestore) {
    const querySnapshot = await getDocs(collection(db, firebaseCollection.skills).withConverter(skillConverter));
    console.log('[getWorkExperienceList][querySnapshot]', querySnapshot);

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getVolunteerList(db: Firestore) {
    const querySnapshot = await getDocs(collection(db, firebaseCollection.volunteers).withConverter(volunteerConverter));
    console.log('[getVolunteerList][querySnapshot]', querySnapshot);

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getAwardList(db: Firestore) {
    const querySnapshot = await getDocs(collection(db, firebaseCollection.awards).withConverter(awardConverter));
    console.log('[getAwardList][querySnapshot]', querySnapshot);

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getProjectList(db: Firestore) {
    const querySnapshot = await getDocs(collection(db, firebaseCollection.projects).withConverter(projectConverter));
    console.log('[getProjectList][querySnapshot]', querySnapshot);

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getProjectListByCategory(db: Firestore, category: DocumentReference) {
    // Assuming you have a field named "categoryRef" in your project documents that holds a reference to the category document
    const q = query(collection(db, "projects"), where("category", "==", category)).withConverter(projectConverter);

    const querySnapshot = await getDocs(q);
    console.log('[getProjectListByCategory][querySnapshot]', querySnapshot);

    return querySnapshot.docs.map(doc => doc.data());
}

export async function getProject(db: Firestore, id: string) {
    const docRef = doc(db, firebaseCollection.projects, id).withConverter(projectConverter);
    const docSnap = await getDoc(docRef);
    console.log('[getProject][docSnap]', docSnap);

    return docSnap.data();
}

export async function getCategoryList(db: Firestore) {
    const querySnapshot = await getDocs(collection(db, firebaseCollection.categories).withConverter(categoryConverter));
    console.log('[getCategoryList][querySnapshot]', querySnapshot);

    return querySnapshot.docs.map(doc => doc.data());
}