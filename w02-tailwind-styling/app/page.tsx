import Image from 'next/image';
import Link from 'next/link';

export default function ProfileCardPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      {/* Profile Card Container */}
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl">

        {/* Avatar Image */}
        <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full shadow-md">
          <Image
            src="/profile.jpg"
            alt="User Profile Picture"
            fill
            sizes="(max-width: 768px) 100vw, 128px"
            priority
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Headings & Descriptions */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Tailwind CSS Practice</h1>
          <p className="mt-2 text-sm text-gray-600">
            Tailwind CSS is a utility-first CSS framework that provides pre-designed classes to build custom designs quickly without leaving your HTML.
          </p>

          {/* Call to Action Button linked to /projects */}
          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-block rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-pink-700 no-underline"
            >
              View Profile
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
