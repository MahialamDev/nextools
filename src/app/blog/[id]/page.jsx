import React from 'react';
import { layoutMap } from '../../../components/Blog_Layouts/layout-map';
import DefaultLayout from '@/components/Blog_Layouts/DefaultLayout';

const BlogDetails = async ({ params }) => {
    const { id } = await params;

    const CustomLayout = layoutMap[id];
   

    if (CustomLayout) {
        return <CustomLayout id={id} />
    }

    return (
        <DefaultLayout id="id" />
    );
};

export default BlogDetails;