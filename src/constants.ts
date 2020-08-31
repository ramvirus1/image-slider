const IMAGE_LIST_URL = 'https://picsum.photos/list';
export const IMAGE_ID_URL = (id : number) : string => `https://picsum.photos/400/600?image=${id}`;

export const imageListFetcher = () => fetch(IMAGE_LIST_URL);
export const ressponseBeautifier = (resp : any) : object => resp.json();