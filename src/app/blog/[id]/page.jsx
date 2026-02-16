import React from 'react';
import { layoutMap } from '../../../components/Blog_Layouts/layout-map';
import DefaultLayout from '@/components/Blog_Layouts/DefaultLayout';
import { metadataMap } from '@/components/Blog_Layouts/metadata-map';




export async function generateMetadata({ params }) {
  const { id } = await params;

  const custom = metadataMap[id];

  // custom থাকলে সেটাই নেবে
  if (custom) {
    return {
      title: custom?.title,
        description: custom?.description,
      openGraph: custom.openGraph,
      twitter: custom.twitter,
    };
  }

  // fallback dynamic
  return {
    title: `Blog ${id} | NexTools`,
    description: "Dynamic blog metadata",
  };
}





const BlogDetails = async ({ params }) => {
    const { id } = await params;

    const CustomLayout = layoutMap[id];
   

    if (CustomLayout) {
        return <CustomLayout id={id} />
    }

    return (
        <DefaultLayout id={id} />
    );
};

export default BlogDetails;