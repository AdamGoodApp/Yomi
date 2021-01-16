import { yomiApi } from '../network/http';
import { getKey } from '../secure-storage';

export const manganeloChapters = async (title: string) => {
  const masterKey = await getKey('master_key');
  const chapters = await yomiApi(`manga/${title}`, { "access_token": masterKey });

  return chapters;
}

export const manganeloPages = async (page: string) => {
  const masterKey = await getKey('master_key');
  const pages = await yomiApi(`manga/`, { "access_token": masterKey, manga: page });

  return pages;
};