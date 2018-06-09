export const CHANGE_PARAGRAPH = 'CHANGE_PARAGRAPH';

export function changeParagraph(data) {
  return {
    type: CHANGE_PARAGRAPH,
    data,
  };
}