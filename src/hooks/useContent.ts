import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

interface DocType {
  [key: string]: string | number;
}
type DocsType = Array<DocType>;

const useContent = (target: string) => {
  const [content, setContent] = useState<DocsType>([]);
  const { firebase } = useContext(FirebaseContext)!;

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          id: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [firebase, target]);

  return { [target]: content };
};

export { useContent };
