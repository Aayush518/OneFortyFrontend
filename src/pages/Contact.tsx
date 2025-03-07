import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useStore } from '../lib/store';
import { cn } from '../lib/utils';
import 'leaflet/dist/leaflet.css';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  deviceType: z.enum(['phone', 'laptop', 'tablet', 'other']),
});

type ContactFormData = z.infer<typeof contactSchema>;

const position: [number, number] = [27.695144369983282, 85.37248781038323];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const addContact = useStore((state) => state.addContact);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      addContact({
        id: crypto.randomUUID(),
        name: data.name,
        email: data.email,
        message: data.message,
        createdAt: new Date().toISOString(),
      });
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-primary-900 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557425955-df376b5903c8?auto=format&fit=crop&q=80')] opacity-10 mix-blend-overlay" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
              Have questions about our services? Need a repair quote? Our expert team is here to help!
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="h-1/2 bg-gray-50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Map and Contact Info Section */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Large Map */}
              <div className="h-[400px] w-full">
                <MapContainer
                  center={position}
                  zoom={15}
                  className="h-full w-full"
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={position}>
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-bold text-lg">One Fourty</h3>
                        <p>Expert Device Repair Services</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              {/* Contact Information */}
              <div className="p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary-600" />
                      Location
                    </h3>
                    <p className="mt-2 text-gray-600">
                      123 Repair Street<br />
                      Kathmandu, Nepal
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary-600" />
                      Contact
                    </h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-gray-600">+977 1234567890</p>
                      <p className="text-gray-600">support@onefourty.com</p>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <h3 className="font-heading text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary-600" />
                      Business Hours
                    </h3>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      {businessHours.map((schedule) => (
                        <div key={schedule.day}>
                          <p className="font-medium text-gray-900">{schedule.day}</p>
                          <p className="text-gray-600">{schedule.hours}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-6 w-6 text-primary-600" />
                <h2 className="font-heading text-2xl font-bold text-gray-900">
                  Send Us a Message
                </h2>
              </div>

              {isSubmitted ? (
                <div className="rounded-lg bg-green-50 p-8 text-center">
                  <h3 className="text-xl font-semibold text-green-800">
                    Thank you for contacting us!
                  </h3>
                  <p className="mt-2 text-green-700">
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name')}
                        className={cn(
                          'mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm',
                          errors.name && 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        )}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email')}
                        className={cn(
                          'mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm',
                          errors.email && 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        )}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone')}
                        className={cn(
                          'mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm',
                          errors.phone && 'border-red-300 focus:border-red-500 focus:ring-red-500'
                        )}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="deviceType" className="block text-sm font-medium text-gray-700">
                        Device Type
                      </label>
                      <select
                        id="deviceType"
                        {...register('deviceType')}
                        className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      >
                        <option value="phone">Phone</option>
                        <option value="laptop">Laptop</option>
                        <option value="tablet">Tablet</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...register('subject')}
                      className={cn(
                        'mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm',
                        errors.subject && 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      )}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register('message')}
                      className={cn(
                        'mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm',
                        errors.message && 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      )}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex justify-center items-center rounded-lg bg-primary-600 px-8 py-3 text-base font-medium text-white shadow-lg shadow-primary-500/25 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}