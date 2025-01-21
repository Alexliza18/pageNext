import { Metadata } from "next";


export const metadata : Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ['alex' ,'omar', 'liza'], 
};


export default function AboutPage  () {
  return (
    <>
    <span className="text-7xl">Bienvenido al about page</span>
    </>
  );
}