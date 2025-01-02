import { createApi } from 'unsplash-js';

// Initialize the Unsplash API client
const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '',
});

export const getImages = async (query: string, count: number = 1) => {
  try {
    const result = await unsplash.search.getPhotos({
      query,
      perPage: count,
      orientation: 'landscape',
    });

    if (result.errors) {
      console.error('Error fetching images:', result.errors[0]);
      return null;
    }

    return result.response?.results.map(photo => ({
      url: photo.urls.regular,
      thumb: photo.urls.thumb,
      alt: photo.alt_description || photo.description || query,
      credit: {
        name: photo.user.name,
        link: photo.user.links.html,
      },
    }));
  } catch (error) {
    console.error('Error in getImages:', error);
    return null;
  }
};
