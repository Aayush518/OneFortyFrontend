import { useState } from 'react';
import { useStore } from '@/lib/store';
import { Search, Filter, Trash2, Edit2, Plus, Tag, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import BlogForm from '@/components/admin/BlogForm';

export default function AdminBlogs() {
  const blogs = useStore((state) => state.blogs);
  const deleteBlog = useStore((state) => state.deleteBlog);
  const [selectedBlogs, setSelectedBlogs] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'Tips', name: 'Tech Tips' },
    { id: 'Mobile', name: 'Mobile' },
    { id: 'Laptop', name: 'Laptop' },
    { id: 'News', name: 'Tech News' },
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedBlogs(filteredBlogs.map(blog => blog.id));
    } else {
      setSelectedBlogs([]);
    }
  };

  const handleSelect = (id: string) => {
    setSelectedBlogs(prev => 
      prev.includes(id) 
        ? prev.filter(blogId => blogId !== id)
        : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    selectedBlogs.forEach(id => deleteBlog(id));
    setSelectedBlogs([]);
  };

  const handleEdit = (blogId: string) => {
    setEditingBlog(blogId);
    setShowForm(true);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Blog Management
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Create, edit, and manage your blog posts.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {selectedBlogs.length > 0 && (
            <button
              onClick={handleDeleteSelected}
              className="inline-flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
            >
              <Trash2 className="h-5 w-5" />
              Delete Selected ({selectedBlogs.length})
            </button>
          )}
          <button
            onClick={() => {
              setEditingBlog(null);
              setShowForm(true);
            }}
            className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500"
          >
            <Plus className="h-5 w-5" />
            New Blog Post
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blog posts..."
              className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div className="flex items-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Tag className="h-4 w-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="min-w-full divide-y divide-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                  <input
                    type="checkbox"
                    className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300"
                    checked={selectedBlogs.length === filteredBlogs.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Title
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Category
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Date
                </th>
                <th className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredBlogs.map((blog) => (
                <motion.tr
                  key={blog.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="hover:bg-gray-50"
                >
                  <td className="relative px-7 sm:w-12 sm:px-6">
                    <input
                      type="checkbox"
                      className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300"
                      checked={selectedBlogs.includes(blog.id)}
                      onChange={() => handleSelect(blog.id)}
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          src={blog.imageUrl}
                          alt=""
                          className="h-10 w-10 rounded-md object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium text-gray-900">{blog.title}</div>
                        <div className="text-gray-500 truncate max-w-md">
                          {blog.excerpt}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700">
                      {blog.category}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(blog.id)}
                        className="text-primary-600 hover:text-primary-900"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteBlog(blog.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <BlogForm 
          blog={editingBlog ? blogs.find(b => b.id === editingBlog) : undefined}
          onClose={() => {
            setShowForm(false);
            setEditingBlog(null);
          }}
        />
      )}
    </div>
  );
}