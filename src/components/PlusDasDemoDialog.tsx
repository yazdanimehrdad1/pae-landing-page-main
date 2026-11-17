import type { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const PLUS_DAS_URL = 'http://plusdas.powerautomationengineering.com/';
const DEMO_EMAIL = 'demo@plusdas.dev';
const DEMO_PASSWORD = 'demo-password';

type CredentialRowProps = {
  label: string;
  value: string;
};

const CredentialRow = ({ label, value }: CredentialRowProps) => (
  <div>
    <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500">
      {label}
    </span>
    <div className="select-all rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 font-mono text-sm text-gray-900">
      {value}
    </div>
  </div>
);

type PlusDasDemoDialogProps = {
  children: ReactNode;
  onContinue?: () => void;
};

const PlusDasDemoDialog = ({ children, onContinue }: PlusDasDemoDialogProps) => (
  <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle className="text-xl">
          Try{' '}
          <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
            PlusDAS
          </span>{' '}
          live
        </DialogTitle>
        <DialogDescription>
          Use this demo account to sign in on the next page.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4">
        <CredentialRow label="Email" value={DEMO_EMAIL} />
        <CredentialRow label="Password" value={DEMO_PASSWORD} />
      </div>

      <a
        href={PLUS_DAS_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onContinue}
        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-2.5 font-semibold text-white shadow-md shadow-cyan-500/30 transition-opacity duration-200 hover:opacity-90"
      >
        Continue to PlusDAS
        <ExternalLink className="h-4 w-4" />
      </a>
    </DialogContent>
  </Dialog>
);

export default PlusDasDemoDialog;
