import Link from 'next/link';

// Sample blog data (in a real app, this would come from a database or API)
const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    content: `Next.js is a powerful React framework that makes building full-stack web applications simple and efficient. 
    In this article, we'll explore the key features that make Next.js a great choice for modern web development.
    
    Key Features:
    - Server-side rendering
    - Static site generation
    - API routes
    - File-based routing
    - Built-in CSS support`,
    date: "2024-03-20",
    author: "John Doe"
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    content: `React Hooks have revolutionized how we write React components. They allow us to use state and other React features 
    without writing class components.
    
    In this guide, we'll cover:
    - useState
    - useEffect
    - useContext
    - useReducer
    - Custom hooks`,
    date: "2024-03-19",
    author: "Jane Smith"
  },
  {
    id: 3,
    title: "The Power of TypeScript",
    content: `TypeScript has become an essential tool in modern web development. It adds static typing to JavaScript, 
    making our code more reliable and maintainable.
    
    Benefits of TypeScript:
    - Static type checking
    - Better IDE support
    - Enhanced code documentation
    - Improved team collaboration`,
    date: "2024-03-18",
    author: "Mike Johnson"
  }
];

export default function BlogPost({ params }) {
  const blog = blogs.find(b => b.id === parseInt(params.id));

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
          <div className="flex items-center gap-4 text-gray-500 mb-8">
            <span>By {blog.author}</span>
            <time>{blog.date}</time>
          </div>
          <div className="prose prose-lg text-black">
            {blog.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
} 