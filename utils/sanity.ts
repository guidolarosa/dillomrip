// sanity.js
import { createClient } from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getOffers(quantity : number) {
  const offers = await client.fetch(`*[_type == "offer"] | order(_createdAt desc)[0...${quantity}]`)
  return offers
}

export async function createOffer(offer : any) {
  const result = client.create({
    _type: 'offer',
    imageId: parseInt(offer.imageId),
    text: offer.text
  });
  return result
}

export async function clearOffers() {
  try {
    const result = await client.delete({query: '*[_type == "offer"][0...999]'});
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

export async function findDuplicates() {
  try {
    const result = await client.fetch(`[_type == "offer"] {
      "duplicates": *[_type == "offer" && @[text] == ^[text] && _id != ^._id && !(_id in path('drafts.**'))] {_id, text: @[text]}
    }[count(duplicates) > 0]]`);
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}