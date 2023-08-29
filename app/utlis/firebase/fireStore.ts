import { db } from "./firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

export const COLLECTION = {
	ORDER: "Orders",
	ADMIN: "Admin",
	PRODUCT: "Product",
	USER: "User",
	COMPLAINTS: "Complaints",
};

export const getFireStoreData = async (collectionName: string) => {
	const data = [];
	const collectionRef = collection(db, collectionName);
	const q = query(collectionRef);
	const querySnapShort = await getDocs(q);

	const array = querySnapShort.docs.map((docSnapShot) => docSnapShot.data());

	return array;
};
