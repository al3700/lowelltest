import Prismic from 'prismic-javascript';
import { PRISMIC_API_URL } from '../config';

const getBlogPostsAPI = async params => {
  try {
    // We initialise the API with Prismic's kit
    const API = await Prismic.api(PRISMIC_API_URL);
    // Here we just query the documents with a filter of only returning
    // the type of blog_post and order them. Full docs can be found here:
    // https://github.com/prismicio/prismic-javascript#query-the-content
    const response = await API.query(
      Prismic.Predicates.at('document.type', 'blog_post'),
      {
        orderings: '[my.blog_post.date desc]',
        ...params,
        // params will be extra parameters we can pass through with api calls
        // such as how many documents to return
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

const getPageApi = async pageId => {
  try {
    const API = await Prismic.api(PRISMIC_API_URL);
    // we pass up the slug to request the correct post
    const response = await API.query(
      Prismic.Predicates.at('document.id', pageId),
      { pageSize: 100 }
    );
    return response.results[0];
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getPageByType = async pageType => {
  try {
    const API = await Prismic.api(PRISMIC_API_URL);
    // we pass up the slug to request the correct post
    const response = await API.query(
      Prismic.Predicates.at('document.type', pageType),
      { pageSize: 100 }
    );
    return response.results;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { getPageApi, getBlogPostsAPI, getPageByType };
