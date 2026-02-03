import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../constants';
import { ArrowLeft } from 'lucide-react';

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find(a => a.slug === slug);

  if (!article) {
     return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
           <h1 className="text-4xl font-black mb-4 font-display">ARTICLE NOT FOUND</h1>
           <Link to="/blog" className="underline font-mono">RETURN TO INDEX</Link>
        </div>
     );
  }

  return (
    <article className="min-h-screen bg-white">
       {/* Header */}
       <header className="px-6 md:px-12 py-20 border-b-2 border-black bg-gray-50">
          <Link to="/blog" className="inline-flex items-center gap-2 font-mono text-sm mb-8 hover:underline text-gray-600">
             <ArrowLeft size={16} /> BACK TO INSIGHTS
          </Link>
          <div className="max-w-4xl">
             <div className="flex gap-4 font-mono text-xs mb-4 uppercase tracking-widest text-gray-500">
                <span>{article.category}</span>
                <span>//</span>
                <span>{article.readTime} MIN READ</span>
             </div>
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-8 font-display">
                {article.title}
             </h1>
             <div className="flex items-center gap-4 border-t-2 border-black pt-4 w-max">
                <div className="font-bold uppercase text-sm font-mono">
                   {article.author.name}
                </div>
                <div className="font-mono text-xs text-gray-500">
                   {article.author.role}
                </div>
             </div>
          </div>
       </header>

       {/* Content */}
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 md:px-12 py-12 md:py-20">
          <div className="lg:col-span-3">
             <div className="sticky top-24 font-mono text-sm text-gray-500 hidden lg:block">
                <p className="mb-2 uppercase font-bold text-black">Share</p>
                <ul className="space-y-2">
                   <li><button className="hover:text-black">Twitter</button></li>
                   <li><button className="hover:text-black">LinkedIn</button></li>
                   <li><button className="hover:text-black">Email</button></li>
                </ul>
             </div>
          </div>
          <div className="lg:col-span-6 prose prose-xl prose-headings:font-black prose-headings:uppercase prose-p:font-sans prose-img:border-2 prose-img:border-black max-w-none">
             <p className="lead font-bold text-xl md:text-2xl mb-8">{article.excerpt}</p>
             <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>
       </div>
    </article>
  );
};

export default Article;