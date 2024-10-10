// import { Dock } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Home, FileText, Github, Linkedin, Twitter, Youtube, Moon } from 'lucide-react';

export default function Page() {
  return (
    <>
      {/* Your other page content */}
      <Dock className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <DockIcon>
          <Home size={24} />
        </DockIcon>
        <DockIcon>
          <FileText size={24} />
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
          <Youtube size={24} />
        </DockIcon>
        <DockIcon>
          <Moon size={24} />
        </DockIcon>
      </Dock>
    </>
  );
}