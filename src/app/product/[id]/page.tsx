import { Metadata } from 'next';
import { revalidatePath } from 'next/cache';
import React from 'react'
async function fetchproduct(id:number){
const res= await fetch(`https://dummyjson.com/quotes/${id}`

    ,{
     next:{
        revalidate:60*60*12,
        tags:[`product_${id}`]
        // tags helps in caching data
     }   
    }
);
return res.json();
}

export async function generateMetadata({params}:{params:{id:number}}):Promise<Metadata>{

const response = await fetchproduct(params.id);
const title= response?.quote??"Hii Today is Good Day";
const description= title;
const creator= response?.author;

return {
  title:title,
 description:description,
 keywords:"seo,seo_agency",
  openGraph:{
    title:title,
    type:"website",
    url:`https://example.com/${params.id}`,
    images:["https://images.pexels.com/photos/17708522/pexels-photo-17708522/free-photo-of-woman-in-white-dress-among-sheep-on-pasture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]
  },
  creator:creator
}

}

export default async function product({params}:{params:{id:number}}) {

  const response = await fetchproduct(params.id);

  return (
    <div className='h-screen flex justify-center items-center text-5xl'>HIi The product name is {response?.id}</div>
  )
}
