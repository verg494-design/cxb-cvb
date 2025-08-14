import React, { createContext, useContext, ReactNode } from 'react';
import { 
  useClients, useProjects, useTeamMembers, useTransactions, 
  usePackages, useAddOns, useCards, useFinancialPockets, 
  useLeads, useAssets, useContracts, useClientFeedback,
  useSocialMediaPosts, usePromoCodes, useSOPs, useNotifications, useUsers
} from '../hooks/useSupabase';

interface SupabaseDataContextType {
  clients: ReturnType<typeof useClients>;
  projects: ReturnType<typeof useProjects>;
  teamMembers: ReturnType<typeof useTeamMembers>;
  transactions: ReturnType<typeof useTransactions>;
  packages: ReturnType<typeof usePackages>;
  addOns: ReturnType<typeof useAddOns>;
  cards: ReturnType<typeof useCards>;
  pockets: ReturnType<typeof useFinancialPockets>;
  leads: ReturnType<typeof useLeads>;
  assets: ReturnType<typeof useAssets>;
  contracts: ReturnType<typeof useContracts>;
  clientFeedback: ReturnType<typeof useClientFeedback>;
  socialMediaPosts: ReturnType<typeof useSocialMediaPosts>;
  promoCodes: ReturnType<typeof usePromoCodes>;
  sops: ReturnType<typeof useSOPs>;
  notifications: ReturnType<typeof useNotifications>;
  users: ReturnType<typeof useUsers>;
}

const SupabaseDataContext = createContext<SupabaseDataContextType | null>(null);

export const useSupabaseData = () => {
  const context = useContext(SupabaseDataContext);
  if (!context) {
    throw new Error('useSupabaseData must be used within a SupabaseDataProvider');
  }
  return context;
};

interface SupabaseDataProviderProps {
  children: ReactNode;
}

export const SupabaseDataProvider: React.FC<SupabaseDataProviderProps> = ({ children }) => {
  const clients = useClients();
  const projects = useProjects();
  const teamMembers = useTeamMembers();
  const transactions = useTransactions();
  const packages = usePackages();
  const addOns = useAddOns();
  const cards = useCards();
  const pockets = useFinancialPockets();
  const leads = useLeads();
  const assets = useAssets();
  const contracts = useContracts();
  const clientFeedback = useClientFeedback();
  const socialMediaPosts = useSocialMediaPosts();
  const promoCodes = usePromoCodes();
  const sops = useSOPs();
  const notifications = useNotifications();
  const users = useUsers();

  const value = {
    clients,
    projects,
    teamMembers,
    transactions,
    packages,
    addOns,
    cards,
    pockets,
    leads,
    assets,
    contracts,
    clientFeedback,
    socialMediaPosts,
    promoCodes,
    sops,
    notifications,
    users,
  };

  return (
    <SupabaseDataContext.Provider value={value}>
      {children}
    </SupabaseDataContext.Provider>
  );
};