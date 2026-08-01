'use client';

import React, { useState } from 'react';
import { MegaMenuNav } from '@/components/navigation/mega-menu-nav';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';

const BLOGS = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "Explore how artificial intelligence is reshaping the software development lifecycle, from code generation to automated testing and deployment pipelines.",
    category: "Artificial Intelligence",
    date: "Aug 1, 2026",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9TGAFj2kxw-aNNAx7o4GIYnkAl8sYQYHwzFQmuUrRlk9aBlexIq7sP2cIa-5jxrecBUrI70jjuqgqHAemNtMavFSwSQsKv-JZuvRGhO7LIye0jlKtuA18nRnkAKKXzE1NfWL_yqkzqYzAq_gOdMhybfE73m_qUN8cCnpHSnFLwKHliKEM4F8P1zYitnpSvnei9JL-NGi7I7K8dAgglQ4ERfULhP-cJWmG9r_UY558E7hk91cP0T9s",
    author: "Priya Sharma",
  },
  {
    id: 2,
    title: "Cybersecurity Trends to Watch in 2026",
    excerpt: "From zero-trust architecture to AI-powered threat detection, discover the cybersecurity trends that will define the digital landscape this year.",
    category: "Cybersecurity",
    date: "Jul 28, 2026",
    readTime: "7 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOHjz47v-zwRrlFyynYdJEdHJJTBGfhBtnjJs4RvMgd4YCDnOlt1RIVJKPs29H4ujx04tu4VhrZss7sp5Kn_aQx32ByRPqw24TOjuSBhasV_iO9k07mQiAfBO0UoKWxw5VdoXP5uvgRiPeTdjhGySFPWzcY1OA579Ildun8FdP-q4MW2LJJzLW1zRZaYlzU5EbF5GA1rfJZghp_NHKs1bntop9ws9y2TtMwLLoIf7vPrZbpBsaZieO",
    author: "Rahul Verma",
  },
  {
    id: 3,
    title: "How Cloud Computing is Transforming IT Infrastructure",
    excerpt: "Learn how businesses are migrating to the cloud, reducing costs, and scaling operations with AWS, Azure, and Google Cloud Platform.",
    category: "Cloud Computing",
    date: "Jul 25, 2026",
    readTime: "6 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuvhcXAodMQGEPawUqweSanD-SSKv6wqYsiLxLxqIxEiiKXG5EbdYJclbS8i94Fe5WBAQPX6RtJi5EqaxkT4iGoymm5WrA3bSS_BBZAdPj2kzWQbNcIlcHot3FE_rIOJKEW4iac93g4u2PZRWHmvSophfabxOXAyldS0LCZTyS8qviWMklIZlMPnNU8_ZsuXSKkf5HvZ2O8XB1yDo3zdn1dF187cH1x4o7DQGYJCD0VdK-9FNJFOCR",
    author: "Anita Reddy",
  },
  {
    id: 4,
    title: "Top 10 Programming Languages to Learn in 2026",
    excerpt: "From Python and JavaScript to Rust and Go, find out which programming languages are in high demand and why you should master them.",
    category: "Software Development",
    date: "Jul 22, 2026",
    readTime: "8 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTEHfc35j0o-lz9f2TT4azGR4hQG7-m2QRtByiP5xyfFjKGCWVJookiWlFIlbZRW4-NrfSvOZg4vF3RA-1cPD0Sc3TRyF3oAVMKgnYPHID3OeWVy8vR2-NiiOLo2RC0i30xLmSEDMyBn_WQOOe5sE_GBVgpuHI4b5Nw9ifcqo_zkBkN7A7Sf8aqNv8PNaOqA6tJmqX6byhOPkFSxyUTcCRXeVeJU1Z5m8gLyV539Cdn0fIBBqaPwtr",
    author: "Vikram Singh",
  },
  {
    id: 5,
    title: "Data Science Careers: Skills You Need to Succeed",
    excerpt: "A comprehensive guide to building a career in data science, including essential tools, certifications, and real-world project experience.",
    category: "Data Science",
    date: "Jul 20, 2026",
    readTime: "6 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA3_PXJn-qZGG4KWiLsLQZql-oSsytYhXq0wnDJuNeWM4cpBQyUl-ZoFpe5o1TwWxsyVWVNCnq8me_RgzW862KTBP2aUMh_EN-gnHITLafPCl9YaAyBOpKNfW11ZhwsKdtW3oD6tK75NiI3W1oXHGesBV0ET0OIPcQafD77Zu4IUBM2bZWtO-nXIqb4K61PANYbKE8KP9PSA011IHRg-7q-zffOVBQrcl-TN71pF1h8GCQg1ItbILu",
    author: "Sneha Kapoor",
  },
  {
    id: 6,
    title: "The Rise of Low-Code and No-Code Platforms",
    excerpt: "How low-code and no-code tools are democratizing software development and enabling businesses to build applications faster than ever.",
    category: "Technology",
    date: "Jul 18, 2026",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuDwlKkja83_8zc69F1J3mtrlzpd4jwrZvUNKya7ROM_Nf3sDVAGYhJKyBXQ-MHzCEKKwOnYu8vNCeGPwt_mvbfvrnKC9pRnfMsG-XJPAFilMtbfkZlbaw2FQsLQ1ar55F4pyoyzZ_x84kou_0nrHg2tykgJ1BgNXjXcM0ew_PsaI_h1HtMokZn298xW95PtrjZv3xx7eSYRw2rNnjYT8SM_RlMPXyBTEV4bAep6Usx1wFF-Cvkcjg",
    author: "Arjun Mehta",
  },
  {
    id: 7,
    title: "DevOps Best Practices for Modern Engineering Teams",
    excerpt: "Implement CI/CD pipelines, infrastructure as code, and monitoring strategies to improve deployment frequency and system reliability.",
    category: "DevOps",
    date: "Jul 15, 2026",
    readTime: "7 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXE3vJiHbHUr0dhTXRhOS_48xdrHOud0c-r_7Nn7tEQBq99y4yEADs6x5D6KLd8DBTMbhUALf_DPSP7yC5EyLG33LneYhCFs1vQ1I1USpDC9sdvccPhyxRcIIHTYd4Lc34Im-W1dCWVQrpe6IiHxmbZZ9W4cs774IZFUv8SZ7Z2qDPtsk5OtoZdVD3QGAQLKefqj-kVkngxtwiy8wf1gWja3eglSSy8hWdePAVrcxyzXyVNjXjllj0",
    author: "Kiran Rao",
  },
  {
    id: 8,
    title: "How to Ace Your Next Technical Interview",
    excerpt: "Expert tips on preparing for coding interviews, system design rounds, and behavioral questions at top tech companies.",
    category: "Career Advice",
    date: "Jul 12, 2026",
    readTime: "10 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTEHfc35j0o-lz9f2TT4azGR4hQG7-m2QRtByiP5xyfFjKGCWVJookiWlFIlbZRW4-NrfSvOZg4vF3RA-1cPD0Sc3TRyF3oAVMKgnYPHID3OeWVy8vR2-NiiOLo2RC0i30xLmSEDMyBn_WQOOe5sE_GBVgpuHI4b5Nw9ifcqo_zkBkN7A7Sf8aqNv8PNaOqA6tJmqX6byhOPkFSxyUTcCRXeVeJU1Z5m8gLyV539Cdn0fIBBqaPwtr",
    author: "Neha Gupta",
  },
  {
    id: 9,
    title: "Understanding Blockchain Beyond Cryptocurrency",
    excerpt: "Discover how blockchain technology is revolutionizing supply chain, healthcare, finance, and digital identity management.",
    category: "Blockchain",
    date: "Jul 10, 2026",
    readTime: "6 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuvhcXAodMQGEPawUqweSanD-SSKv6wqYsiLxLxqIxEiiKXG5EbdYJclbS8i94Fe5WBAQPX6RtJi5EqaxkT4iGoymm5WrA3bSS_BBZAdPj2kzWQbNcIlcHot3FE_rIOJKEW4iac93g4u2PZRWHmvSophfabxOXAyldS0LCZTyS8qviWMklIZlMPnNU8_ZsuXSKkf5HvZ2O8XB1yDo3zdn1dF187cH1x4o7DQGYJCD0VdK-9FNJFOCR",
    author: "Rajesh Kumar",
  },
  {
    id: 10,
    title: "The Impact of 5G on IoT and Smart Cities",
    excerpt: "How 5G networks are enabling the next generation of IoT devices and transforming urban infrastructure into connected smart cities.",
    category: "Telecommunications",
    date: "Jul 8, 2026",
    readTime: "5 min read",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOHjz47v-zwRrlFyynYdJEdHJJTBGfhBtnjJs4RvMgd4YCDnOlt1RIVJKPs29H4ujx04tu4VhrZss7sp5Kn_aQx32ByRPqw24TOjuSBhasV_iO9k07mQiAfBO0UoKWxw5VdoXP5uvgRiPeTdjhGySFPWzcY1OA579Ildun8FdP-q4MW2LJJzLW1zRZaYlzU5EbF5GA1rfJZghp_NHKs1bntop9ws9y2TtMwLLoIf7vPrZbpBsaZieO",
    author: "Deepika Iyer",
  },
];

const CATEGORIES = ["All", "Artificial Intelligence", "Cybersecurity", "Cloud Computing", "Software Development", "Data Science", "Technology", "DevOps", "Career Advice", "Blockchain", "Telecommunications"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = activeCategory === "All" 
    ? BLOGS 
    : BLOGS.filter(blog => blog.category === activeCategory);

  return (
    <div className="min-h-screen bg-surface">
      <MegaMenuNav />
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="py-16 px-gutter">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-background mb-4">
              Our Blog
            </h1>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto">
              Stay updated with the latest trends, tutorials, and insights from the world of technology and software engineering.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-label-md font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface border border-outline-variant text-on-surface hover:border-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/30 hover:border-primary/30 transition-all hover:shadow-lg group">
                <div className="relative h-48 bg-surface-container overflow-hidden">
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full font-label-sm font-bold text-xs shadow-md">
                    {blog.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-on-surface-variant text-sm mb-3">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h3 className="font-title-md font-bold text-on-background mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-on-surface-variant font-body-md text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-primary">By {blog.author}</span>
                    <button className="text-sm font-bold text-primary hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
