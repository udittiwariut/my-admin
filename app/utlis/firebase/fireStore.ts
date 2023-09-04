import { db } from "./firebaseConfig";
import {
	collection,
	query,
	getDocs,
	where,
	WhereFilterOp,
} from "firebase/firestore";

export const COLLECTION = {
	ORDER: "Orders",
	ADMIN: "Admin",
	PRODUCT: "Product",
	USER: "User",
	COMPLAINTS: "Complaints",
};

export const getFireStoreData = async (
	collectionName: string,
	queryArray?: [string, WhereFilterOp, string]
) => {
	const data = [];
	const collectionRef = collection(db, collectionName);
	let q;
	if (!queryArray) {
		q = query(collectionRef);
	}
	if (queryArray) {
		q = query(collectionRef, where(...queryArray));
	}

	const querySnapShort = await getDocs(q!);

	const array = querySnapShort.docs.map((docSnapShot) => docSnapShot.data());

	return array;
};
