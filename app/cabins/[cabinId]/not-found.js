function NotFound() {
  return (
    <main className="text-center space-y-4 sm:space-y-6 mt-4 px-4">
      <h1 className="text-2xl sm:text-3xl font-semibold">
        This cabin is not created yet
      </h1>
      <a
        href="/"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg sm:text-xl"
      >
        Go back home
      </a>
    </main>
  );
}

export default NotFound;
