import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "They fixed my laptop's screen in just a few hours. The service was professional and the price was very reasonable. Excellent work!",
    author: 'Sarah Johnson',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    text: 'Professional and knowledgeable staff. They diagnosed and fixed my phone issues quickly. Fair prices and great customer service.',
    author: 'Mike Thompson',
    role: 'Student',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    text: 'Saved all my important data from a water-damaged phone. These guys are absolute lifesavers! Highly recommend their services.',
    author: 'Emily Davis',
    role: 'Photographer',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 -translate-x-1/2 w-96 h-full bg-gradient-to-r from-primary-500/5 to-transparent blur-3xl" />
        <div className="absolute inset-y-0 right-0 translate-x-1/2 w-96 h-full bg-gradient-to-l from-accent-500/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-500/20 mb-8">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-2xl bg-white p-8 shadow-lg shadow-gray-200/50 transition-all hover:shadow-xl hover:shadow-primary-500/10"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 opacity-10 blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover ring-4 ring-gray-50"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}