import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface MenuItemProps {
  text: string;
  href?: string;
  handleClick?: () => void;
  icon: React.ElementType;
}

interface SidebarMenuProps {
  item: MenuItemProps;
}

export default function ListMenu({ item }: SidebarMenuProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  const IconComponent = item.icon;

  return (
    <Link
      href={`${item.href}`}
      className={`group flex w-full cursor-pointer items-center gap-x-4 rounded-r-full px-4 py-2 transition-all duration-100 ${
        isActive ? 'bg-[var(--color-warning)]' : ''
      }`}
    >
      {IconComponent && (
        <IconComponent className={`size-6 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-primary'}`} />
      )}
      <p className={`font-medium ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-primary'}`}>{item.text}</p>
    </Link>
  );
}
