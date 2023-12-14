import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export function formatEntryAndRichTextFields(items: any) {
  const processItem = (item: any) => {
    const { fields, sys } = item;
    if (fields.content) {
      return {
        ...fields,
        content: documentToReactComponents(fields.content as Document),
        id: sys.id,
      };
    }
    return null; // Handle the case where content is missing or falsy
  };

  if (Array.isArray(items)) {
    return items.map(processItem);
  } else {
    return processItem(items);
  }
}
