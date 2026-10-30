import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: '୧ ‧₊˚ 🍵 CSE341 Books API',
    description: 'A RESTful Node.js and Express API connected to MongoDB Atlas with secure routing and validation.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JavaScript'],
    link: 'https://github.com/xandrineshu/cse341-books'
  },
  {
    title: '୧ ‧₊˚ 🍀 WDD430 Portfolio',
    description: 'A modern full-stack portfolio application built with Next.js App Router, TypeScript, and Tailwind CSS.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/xandrineshu/wdd430-portfolio'
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">. ݁₊ ⊹ My Portfolio ⊹ ₊ ݁.</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I am a software development student learning full-stack engineering, Next.js, and React. 
          Here are some of my recent projects:
        </p>
      </section>
      <ProjectList projects={projects} />
    </div>
  );
}