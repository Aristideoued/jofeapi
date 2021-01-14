
const BASE='http://localhost';
const PORT=8080;
const PATH='/jofeapi';
export const API_URLS={
  lien:BASE+':'+ PORT+PATH,
  Api_URLS:BASE+':'+ PORT+PATH+'/apis',
  Create_urls:BASE+':'+ PORT+PATH+'apis',
  GetById_url:BASE+':'+ PORT+PATH+'/apis/{id}',
  Update_url:BASE+':'+ PORT+PATH+'apis/{id}',
  Delete_url:BASE+':'+ PORT+PATH+'apis/{id}'
};
