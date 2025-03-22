import { Clerk as BaseClerk } from '@clerk/clerk-react';

export interface ExtendedClerk extends BaseClerk {
  signIn: {
    create: (params: any) => Promise<any>;
  };
  signUp: {
    create: (params: any) => Promise<any>;
  };
  session: {
    sync: () => Promise<void>;
  } & BaseClerk['session'];
}

export type LoadedClerk = ExtendedClerk;

export interface ClerkContextValue {
  clerk: LoadedClerk | null;
  session: any;
  user: any;
  isLoaded: boolean;
  isSignedIn: boolean;
} 