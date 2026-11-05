import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
            <p className="mt-2 text-gray-600">Get in touch with me through this contact page!</p>

            <div className="mt-6">
                <Link href="/" className="text-pink-600 underline font-semibold">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}