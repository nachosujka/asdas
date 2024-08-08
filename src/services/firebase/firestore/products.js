import { createProductAdaptedFromFirebase } from "../../../adapters/productAdapted";
import { db } from "../index";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore";

export const getProducts = (categoryId) => {
  const productsCollection = categoryId
    ? query(collection(db, "products"), where("category", "==", categoryId))
    : collection(db, "products");

  return getDocs(productsCollection)
    .then((querySnapshot) => {
      const productAdapted = querySnapshot.docs.map((doc) => {
        return createProductAdaptedFromFirebase(doc);
      });
      return productAdapted;
    })
    .catch((error) => {
      return error;
    });
};
export const getProductsById = (itemId) => {
  const productDoc = doc(db, "products", itemId);

  return getDoc(productDoc)
    .then((queryDocumentSnapshot) => {
      const productAdapted = createProductAdaptedFromFirebase(
        queryDocumentSnapshot
      );

      return productAdapted;
    })
    .catch((error) => {
      return error;
    });
};
