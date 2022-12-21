import { TListItem } from "../../types/listItem.types";

export function getItemParts(
  items: TListItem[] | null,
  page: number,
  itemsAmont: number
) {
  const pageStart = page * itemsAmont - itemsAmont;
  const pageEnd = page * itemsAmont;

  if (!items || Math.round(pageStart) > items.length) {
    return null;
  }

  if (pageEnd > items.length) {
    return items.slice(pageStart);
  }

  return items.slice(pageStart, pageEnd);
}
