import { BorderTrail } from '@/components/ui/border-trail';

export function Header() {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full">

      <div className="relative inline-block">
        <BorderTrail
          className="opacity-50 absolute inset-0 bg-violet-500"
          size={48}
          style={{
            boxShadow: '0px 0px 30px 15px rgb(167 139 250 / 25%)'
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        <BorderTrail
          className="opacity-50 absolute inset-0 bg-violet-500"
          size={48}
          style={{
            boxShadow: '0px 0px 30px 15px rgb(167 139 250 / 25%)'
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear'
          }}
          delay={2.5}
        />
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <a href="#" className="nav-item">Home</a>
          <a href="#" className="nav-item">Projects</a>
          <a href="#" className="nav-item">About</a>
          <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </div>
  );
}
