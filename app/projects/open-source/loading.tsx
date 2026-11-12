export default function Loading() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8 animate-pulse space-y-8">
            {/* Header Skeleton */}
            <div className="space-y-3 pb-6 border-b border-pink-200">
                <div className="h-9 w-1/2 rounded bg-pink-100" />
                <div className="h-5 w-3/4 rounded bg-pink-100/60" />
            </div>

            {/* Project Cards Skeletons */}
            <div className="grid gap-6">
                <div className="h-40 rounded-2xl bg-pink-50 border border-pink-100 p-6 space-y-4">
                    <div className="h-6 w-1/3 rounded bg-pink-200" />
                    <div className="h-4 w-full rounded bg-pink-100" />
                    <div className="h-4 w-4/5 rounded bg-pink-100" />
                </div>
                <div className="h-40 rounded-2xl bg-pink-50 border border-pink-100 p-6 space-y-4">
                    <div className="h-6 w-1/3 rounded bg-pink-200" />
                    <div className="h-4 w-full rounded bg-pink-100" />
                    <div className="h-4 w-4/5 rounded bg-pink-100" />
                </div>
            </div>
        </main>
    );
}