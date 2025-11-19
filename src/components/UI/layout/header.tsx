'use client';
import { layoutConfig } from '@/config/layout.config';
import { siteConfige } from '@/config/site.config';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@heroui/react';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import RegistrationModal from '../modals/registration.modal';
import LoginModal from '../modals/login.modal';

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt={siteConfige.title}
      width={26}
      height={26}
      priority
    />
  );
};

export default function Header() {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const pathname = usePathname();
  const getNavItems = () => {
    return siteConfige.navItems.map((item) => {
      const isActive = pathname === item.href;
      return (
        <NavbarItem key={item.href}>
          <Link
            color="foreground"
            href={item.href}
            className={`px-3 py-1 ${isActive ? 'text-blue-500' : 'text-foreground'} 
                hover:text-blue-300 hover:border hover: 
                border-blue-300 hover:rounded-md 
                transition-color transition-border duration-300`}
          >
            {item.label}
          </Link>
        </NavbarItem>
      );
    });
  };
  return (
    <Navbar style={{ height: layoutConfig.headerHeight }}>
      <NavbarBrand>
        <Link href="/" className="flex gap-1">
          <Logo />
          <p className="font-bold text-inherit">{siteConfige.title}</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            color="secondary"
            href="#"
            variant="flat"
            onPress={() => setIsLoginModalOpen(true)}
          >
            Войти
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            onPress={() => setIsRegistrationModalOpen(true)}
          >
            Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>
      <RegistrationModal
        isOpen={isRegistrationModalOpen}
        onClose={() => setIsRegistrationModalOpen(false)}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </Navbar>
  );
}
