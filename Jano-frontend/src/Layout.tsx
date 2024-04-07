import Header from './components/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between h-screen w-full max-w-sm mx-auto rounded-t-xl border-t-2 border-gray-100/40 bg-white shadow-2xl overflow-auto dark:border-gray-950 dark:bg-gray-950/60">
      <div className="overflow-auto">
        <h1 className="text-2xl font-bold mb-4 textl-left px-5 mt-5">Hola Ari!</h1>
        {children}
      </div>
      <Header />
    </div>
  );
}
