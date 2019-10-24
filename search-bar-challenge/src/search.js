import key from './api-key';

export default async (term) => {
  const headers = new Headers({
    'X-RapidAPI-Key': key,
    'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
  });

  const baseURL = new URL('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/spelling/AutoComplete');
  baseURL.searchParams.append('text', term);
  const res = await fetch(baseURL.toString(), { headers });
  const data = await res.json()
  return data;
}
