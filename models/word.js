// @flow
import type { Word } from '../types/types';

export function createWord(data : Word) : Word {
  const { id, name, image, children } = data;
  return {
    id,
    name,
    image,
    children
  }
}