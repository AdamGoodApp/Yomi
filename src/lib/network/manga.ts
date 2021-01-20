import { yomiApi } from '../network/http';
import { getKey } from '../secure-storage';

export const manganeloChapters = async (title: string) => {
  const masterKey = await getKey('master_key');
  const chapters = await yomiApi(`manga/chapters`, { "access_token": masterKey, manga: title });

  return chapters;
}

export const manganeloPages = async (page: string) => {
  const masterKey = await getKey('master_key');
  const pages = await yomiApi(`manga/pages`, { "access_token": masterKey, chapter: page });

  return pages;
};