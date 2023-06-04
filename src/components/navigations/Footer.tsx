import { Icons } from "../assets/FooterIcons";

export default function Footer() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm_tablet:px-6 laptop:px-8 text-center pb-4">
      <div className="mt-2 pt-4 md_tablet:flex md_tablet:items-center md_tablet:justify-between">
        <div className="flex space-x-6 justify-center md_tablet:order-2">
          {Icons.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-500 hover:text-secondary"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-xs leading-5 text-gray-400 md_tablet:order-1 md_tablet:mt-0">
          &copy; {new Date().getFullYear()} romargeorge. All rights reserved.
        </p>
      </div>
    </div>
  );
}
