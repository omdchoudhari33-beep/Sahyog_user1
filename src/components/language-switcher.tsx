'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import { languageNames, languageCodes } from '@/lib/i18n';
import type { Language } from '@/types';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 text-white hover:bg-white/10 hover:text-white">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{languageNames[language]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        <DropdownMenuLabel className="text-slate-500 font-medium">
          {t('language')}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languageCodes.map((code) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as Language)}
            className={`cursor-pointer ${
              language === code
                ? 'bg-blue-50 text-blue-700 font-medium'
                : 'text-slate-700'
            }`}
          >
            {languageNames[code]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
