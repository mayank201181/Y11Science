export const masterclassDoneKey = (topicId: string) => `masterclass:${topicId}:done`;
export const sitcomDoneKey = (topicId: string) => `sitcom:${topicId}:done`;
export const comedyDoneKey = (topicId: string) => `comedy:${topicId}:done`;
export const watchChapterKey = (
  kind: "masterclass" | "sitcom" | "comedy",
  topicId: string,
  ch: string,
) => `${kind}:${topicId}:${ch}`;
