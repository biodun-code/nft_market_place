// import Category from '@/components/category/Category';

import Collections from '@/components/collections/Collections';
import Category from 'components/Category/Category.jsx';
import Question from '@/components/questions/Question';
import Slider from 'components/Slider/Slider.jsx';

import React, { useEffect } from 'react';

//INTERNAL IMPORT
import Style from '../styles/index.module.css';
import { getTopTenCollectionLatest } from 'services/collectionService';

const Home = ({ collectionSlider }) => {
  useEffect(() => {
    document.title = 'NFT';
  }, []);

  return (
    <div className={Style.homePage}>
      <Slider cols={collectionSlider}></Slider>
      <Collections></Collections>
      <Category />
      <Question></Question>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   context.res.setHeader(
//     'Cache-Control',
//     'public, s-maxage=10, stale-while-revalidate=59'
//   );

//   const topTenCollectionLatest = await getTopTenCollectionLatest();

//   return {
//     props: {
//       collectionSlider: topTenCollectionLatest,
//     },
//   };
// }

export default Home;
