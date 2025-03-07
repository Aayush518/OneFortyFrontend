import React, { useState } from 'react';
import { useStore } from '@/lib/store';
import { Save, Settings as SettingsIcon, Clock, Bell, Lock, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import * as Icons from 'lucide-react';
import type { BusinessHours, EmergencyContact } from '@/types';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('site');
  const {
    siteConfig,
    setSiteConfig,
    businessHours,
    updateBusinessHours,
    emergencyContacts,
    updateEmergencyContact,
    forceBusinessStatus,
    setForceBusinessStatus,
  } = useStore();

  const [config, setConfig] = useState(siteConfig);

  const tabs = [
    { id: 'site', name: 'Site Settings', icon: Globe },
    { id: 'business', name: 'Business Hours', icon: Clock },
    { id: 'security', name: 'Security', icon: Lock },
    { id: 'notifications', name: 'Notifications', icon: Bell },
  ];

  // Curated list of relevant icons for a repair business
  const recommendedIcons = [
    'Wrench',
    'Tool',
    'Hammer',
    'Smartphone',
    'Laptop',
    'Tablet',
    'Monitor',
    'Cpu',
    'HardDrive',
    'Battery',
    'Shield',
    'Settings',
    'Power',
    'Zap',
    'Radio',
    'Wifi',
    'Bluetooth',
    'Speaker',
    'Headphones',
    'Camera',
    'Printer',
    'Mouse',
    'Keyboard',
    'Server',
    'SdCard',
    'Usb',
    'Plug',
    'Cog',
    'Screwdriver',
  ];

  // Filter available icons to show recommended ones first, then all others
  const availableIcons = [
    ...recommendedIcons.filter(icon => Icons[icon as keyof typeof Icons]),
    ...Object.keys(Icons)
      .filter(icon => 
        typeof Icons[icon as keyof typeof Icons] === 'function' &&
        !recommendedIcons.includes(icon)
      )
  ];

  const handleSiteConfigSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSiteConfig(config);
    alert('Site settings updated successfully!');
  };

  // Helper function to format icon name for display
  const formatIconName = (name: string) => {
    return name.replace(/([A-Z])/g, ' $1').trim();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Settings
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage your business settings and preferences.
        </p>
      </div>

      {/* Settings Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-2 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
                activeTab === tab.id
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              )}
            >
              <tab.icon className="h-5 w-5" />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Settings Content */}
      <div className="bg-white shadow-sm ring-1 ring-gray-900/5 rounded-xl">
        <div className="p-6">
          {activeTab === 'site' && (
            <form onSubmit={handleSiteConfigSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Site Name
                  </label>
                  <input
                    type="text"
                    value={config.name}
                    onChange={(e) => setConfig({ ...config, name: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Site Logo Icon
                  </label>
                  <div className="mt-1">
                    <select
                      value={config.logo}
                      onChange={(e) => setConfig({ ...config, logo: e.target.value })}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    >
                      <optgroup label="Recommended Icons">
                        {recommendedIcons
                          .filter(icon => Icons[icon as keyof typeof Icons])
                          .map((icon) => (
                            <option key={icon} value={icon}>
                              {formatIconName(icon)}
                            </option>
                          ))}
                      </optgroup>
                      <optgroup label="All Icons">
                        {Object.keys(Icons)
                          .filter(icon => 
                            typeof Icons[icon as keyof typeof Icons] === 'function' &&
                            !recommendedIcons.includes(icon)
                          )
                          .map((icon) => (
                            <option key={icon} value={icon}>
                              {formatIconName(icon)}
                            </option>
                          ))}
                      </optgroup>
                    </select>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gray-100">
                      {Icons[config.logo as keyof typeof Icons] && 
                        React.createElement(Icons[config.logo as keyof typeof Icons], {
                          className: "h-6 w-6 text-primary-600"
                        })
                      }
                    </div>
                    <span className="text-sm text-gray-500">Preview</span>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Site Description
                  </label>
                  <input
                    type="text"
                    value={config.description}
                    onChange={(e) => setConfig({ ...config, description: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={config.contact.email}
                    onChange={(e) => setConfig({
                      ...config,
                      contact: { ...config.contact, email: e.target.value }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    value={config.contact.phone}
                    onChange={(e) => setConfig({
                      ...config,
                      contact: { ...config.contact, phone: e.target.value }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Business Address
                  </label>
                  <input
                    type="text"
                    value={config.contact.address}
                    onChange={(e) => setConfig({
                      ...config,
                      contact: { ...config.contact, address: e.target.value }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Facebook URL
                  </label>
                  <input
                    type="url"
                    value={config.social.facebook}
                    onChange={(e) => setConfig({
                      ...config,
                      social: { ...config.social, facebook: e.target.value }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Twitter URL
                  </label>
                  <input
                    type="url"
                    value={config.social.twitter}
                    onChange={(e) => setConfig({
                      ...config,
                      social: { ...config.social, twitter: e.target.value }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Instagram URL
                  </label>
                  <input
                    type="url"
                    value={config.social.instagram}
                    onChange={(e) => setConfig({
                      ...config,
                      social: { ...config.social, instagram: e.target.value }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    YouTube URL
                  </label>
                  <input
                    type="url"
                    value={config.social.youtube}
                    onChange={(e) => setConfig({
                      ...config,
                      social: { ...config.social, youtube: e.target.value }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <Save className="h-5 w-5" />
                  Save Settings
                </button>
              </div>
            </form>
          )}

          {activeTab === 'business' && (
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">Regular Business Hours</h3>
                <div className="space-y-4">
                  {businessHours.map((hours) => (
                    <div key={hours.day} className="flex items-center gap-4">
                      <div className="w-32">
                        <span className="font-medium">{hours.day}</span>
                      </div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={hours.isOpen}
                          onChange={(e) => updateBusinessHours(hours.day, { isOpen: e.target.checked })}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">Open</span>
                      </label>
                      <input
                        type="time"
                        value={hours.openTime}
                        onChange={(e) => updateBusinessHours(hours.day, { openTime: e.target.value })}
                        disabled={!hours.isOpen}
                        className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm disabled:bg-gray-100"
                      />
                      <span className="text-gray-500">to</span>
                      <input
                        type="time"
                        value={hours.closeTime}
                        onChange={(e) => updateBusinessHours(hours.day, { closeTime: e.target.value })}
                        disabled={!hours.isOpen}
                        className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm disabled:bg-gray-100"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">Emergency Contacts</h3>
                <div className="space-y-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <input
                        type="text"
                        value={contact.name}
                        onChange={(e) => updateEmergencyContact(index, { ...contact, name: e.target.value })}
                        placeholder="Contact Name"
                        className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      />
                      <input
                        type="tel"
                        value={contact.phone}
                        onChange={(e) => updateEmergencyContact(index, { ...contact, phone: e.target.value })}
                        placeholder="Phone Number"
                        className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      />
                      <input
                        type="text"
                        value={contact.hours}
                        onChange={(e) => updateEmergencyContact(index, { ...contact, hours: e.target.value })}
                        placeholder="Available Hours"
                        className="rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                      />
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={contact.available}
                          onChange={(e) => updateEmergencyContact(index, { ...contact, available: e.target.checked })}
                          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">Available</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <Save className="h-5 w-5" />
                  Save Settings
                </button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="current-password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="new-password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <Save className="h-5 w-5" />
                  Update Password
                </button>
              </div>
            </form>
          )}

          {activeTab === 'notifications' && (
            <div className="py-4">
              <p className="text-gray-500">Notification settings coming soon!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}