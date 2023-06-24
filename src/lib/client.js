import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'oayn2xm5',
  dataset: 'production',
  apiVersion: '2023-06-24',
  useCdn: true,
  token: 'sk6GCLotdl2iBrQgjdEa9cG2zTewTTq4lKIO7vaidwl8vbTWPVdUMKvEu6W1kXIq2bfX6eoBybPIytRPwGmIjPYdwH62cwfuQpsS58SQUr0NwNrMpL6PQwTZhD453cbQCf81EYHg0Ho74LMidq1eeufmQNXZC2Ih70zeUqqDS5QkyzgpJpXK'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  if (typeof source === 'string') {
    return builder.image(source);
  }
  
  if (source?.asset?._ref) {
    return builder.image(source.asset._ref);
  }

  return '';
};