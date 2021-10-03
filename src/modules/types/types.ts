export type TextAlign =
  | "start"
  | "end"
  | "left"
  | "right"
  | "center"
  | "justify"
  | "match-parent";

export type Row<D> = { data: D; kids: string[] };
export type RowRecord<D> = Record<string, Row<D>>;
