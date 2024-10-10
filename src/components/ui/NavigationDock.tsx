import React from 'react';
import { Dock, DockIcon } from '../magicui/dock';
import { Home, Pencil, Github, Linkedin, Twitter, Mail, Sun } from 'lucide-react';

export const NavigationDock: React.FC = () => {
  return (
    <Dock>
      <DockIcon>
        <Home size={24} />
      </DockIcon>
      <DockIcon>
        <Pencil size={24} />
      </DockIcon>
      <DockIcon>
        <Github size={24} />
      </DockIcon>
      <DockIcon>
        <Linkedin size={24} />
      </DockIcon>
      <DockIcon>
        <Twitter size={24} />
      </DockIcon>
      <DockIcon>
        <Mail size={24} />
      </DockIcon>
      <DockIcon>
        <Sun size={24} />
      </DockIcon>
    </Dock>
  );
};