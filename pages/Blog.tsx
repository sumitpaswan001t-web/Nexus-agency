import React, { useState } from 'react';
import { ARTICLES } from '../constants';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/UI';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [category, setCategory] = useState('ALL');
  const categories = ['ALL', 'DESIGN', 'ENGINEERING', 'STRATEGY'];
  
  const filteredArticles = category === 'ALL' 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category.toUpperCase() === category);

  return (
    <div className="flex flex-col min-h-screen">
       <section className="px-6 md:px-12 py-20 border-b-2 border-black">
          <SectionTitle title="Insights" subtitle="Thoughts on structure and system." />
          <div className="flex gap-4 mt-8 flex-wrap">
             {categories.map(c => (
                <button 
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`font-mono text-sm px-4 py-2 border-2 border-black uppercase transition-colors ${category === c ? 'bg-black text-white' : 'hover:bg-gray-200'}`}
                >
                   {c}
                </button>
             ))}
          </div>
       </section>

       <section className="px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {filteredArticles.map(article => (
                <Link to={`/blog/${article.slug}`} key={article.id} className="group border-2 border-black p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all bg-white flex flex-col justify-between">
                   <div>
                     <div className="flex justify-between items-start mb-6">
                        <span className="font-mono text-xs bg-gray-200 px-2 py-1 uppercase">{article.category}</span>
                        <span className="font-mono text-xs text-gray-500">{article.publishDate}</span>
                     </div>
                     <h2 className="text-2xl font-black uppercase mb-4 leading-tight group-hover:underline font-display">{article.title}</h2>
                     <p className="text-gray-600 mb-8 line-clamp-3">{article.excerpt}</p>
                   </div>
                   <div className="flex items-center gap-2 font-bold text-sm tracking-widest uppercase font-mono">
                      Read Article <ArrowRight size={16} />
                   </div>
                </Link>
             ))}
          </div>
       </section>
    </div>
  );
};

export default Blog;