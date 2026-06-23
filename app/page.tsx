export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-sky-500 text-white shadow-md">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tight">Splash Hound USA</span>
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-sky-100 transition-colors">Home</a>
            <a href="#" className="hover:text-sky-100 transition-colors">Services</a>
            <a href="#" className="hover:text-sky-100 transition-colors">About</a>
            <a href="#" className="hover:text-sky-100 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
        <h1 className="text-4xl font-bold text-sky-700 mb-4">Welcome to Splash Hound USA</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your dog deserves the best. We make bath time fun, stress-free, and tail-waggingly good.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6 border border-sky-100">
            <h2 className="text-xl font-semibold text-sky-600 mb-2">Full Grooming</h2>
            <p className="text-gray-500 text-sm">Bath, dry, trim, and style — head to tail.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border border-sky-100">
            <h2 className="text-xl font-semibold text-sky-600 mb-2">Self-Wash Stations</h2>
            <p className="text-gray-500 text-sm">Use our tubs, towels, and dryers yourself.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border border-sky-100">
            <h2 className="text-xl font-semibold text-sky-600 mb-2">Nail & Ear Care</h2>
            <p className="text-gray-500 text-sm">Quick add-ons to keep your pup comfortable.</p>
          </div>
        </div>
      </main>

      <footer className="bg-sky-600 text-sky-100 text-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Splash Hound USA. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
