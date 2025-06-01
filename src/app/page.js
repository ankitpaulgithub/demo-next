import Link from "next/link";

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    date: "2024-03-20",
    author: "John Doe"
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    excerpt: "A comprehensive guide to React Hooks and their usage",
    date: "2024-03-19",
    author: "Jane Smith"
  },
  {
    id: 3,
    title: "The Power of TypeScript",
    excerpt: "Why TypeScript is becoming essential in modern web development",
    date: "2024-03-18",
    author: "Mike Johnson"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Mr. Paul</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Link href={`/blog/${blog.id}`}>
                <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 mb-2">
                  {blog.title}
                </h2>
              </Link>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>By {blog.author}</span>
                <time>{blog.date}</time>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
