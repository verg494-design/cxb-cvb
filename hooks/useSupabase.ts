import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { 
  Client, Project, TeamMember, Transaction, Package, AddOn, 
  Card, FinancialPocket, Lead, Asset, Contract, ClientFeedback,
  SocialMediaPost, PromoCode, SOP, Notification, User, Profile
} from '../types';

// Generic CRUD hook
export function useSupabaseTable<T extends { id: string }>(tableName: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data: result, error } = await supabase
        .from(tableName)
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setData(result || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const create = async (item: Omit<T, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data: result, error } = await supabase
        .from(tableName)
        .insert([item])
        .select()
        .single();

      if (error) throw error;
      setData(prev => [result, ...prev]);
      return result;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to create item');
    }
  };

  const update = async (id: string, updates: Partial<T>) => {
    try {
      const { data: result, error } = await supabase
        .from(tableName)
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setData(prev => prev.map(item => item.id === id ? result : item));
      return result;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to update item');
    }
  };

  const remove = async (id: string) => {
    try {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);

      if (error) throw error;
      setData(prev => prev.filter(item => item.id !== id));
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to delete item');
    }
  };

  useEffect(() => {
    fetchData();
  }, [tableName]);

  return {
    data,
    loading,
    error,
    create,
    update,
    remove,
    refetch: fetchData
  };
}

// Specific hooks for each table
export const useClients = () => useSupabaseTable<Client>('clients');
export const useProjects = () => useSupabaseTable<Project>('projects');
export const useTeamMembers = () => useSupabaseTable<TeamMember>('team_members');
export const useTransactions = () => useSupabaseTable<Transaction>('transactions');
export const usePackages = () => useSupabaseTable<Package>('packages');
export const useAddOns = () => useSupabaseTable<AddOn>('add_ons');
export const useCards = () => useSupabaseTable<Card>('cards');
export const useFinancialPockets = () => useSupabaseTable<FinancialPocket>('financial_pockets');
export const useLeads = () => useSupabaseTable<Lead>('leads');
export const useAssets = () => useSupabaseTable<Asset>('assets');
export const useContracts = () => useSupabaseTable<Contract>('contracts');
export const useClientFeedback = () => useSupabaseTable<ClientFeedback>('client_feedback');
export const useSocialMediaPosts = () => useSupabaseTable<SocialMediaPost>('social_media_posts');
export const usePromoCodes = () => useSupabaseTable<PromoCode>('promo_codes');
export const useSOPs = () => useSupabaseTable<SOP>('sops');
export const useNotifications = () => useSupabaseTable<Notification>('notifications');
export const useUsers = () => useSupabaseTable<User>('users');

// Profile hook (single record)
export function useProfile() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .limit(1);

      if (error) throw error;
      
      // Handle both single record and array responses
      const profileData = Array.isArray(data) ? data[0] : data;
      
      if (profileData) {
        // Transform database format to app format
        const transformedProfile: Profile = {
          fullName: profileData.full_name,
          email: profileData.email,
          phone: profileData.phone,
          companyName: profileData.company_name,
          website: profileData.website || '',
          address: profileData.address,
          bankAccount: profileData.bank_account,
          authorizedSigner: profileData.authorized_signer,
          idNumber: profileData.id_number || '',
          bio: profileData.bio || '',
          incomeCategories: Array.isArray(profileData.income_categories) ? profileData.income_categories as string[] : [],
          expenseCategories: Array.isArray(profileData.expense_categories) ? profileData.expense_categories as string[] : [],
          projectTypes: Array.isArray(profileData.project_types) ? profileData.project_types as string[] : [],
          eventTypes: Array.isArray(profileData.event_types) ? profileData.event_types as string[] : [],
          assetCategories: Array.isArray(profileData.asset_categories) ? profileData.asset_categories as string[] : [],
          sopCategories: Array.isArray(profileData.sop_categories) ? profileData.sop_categories as string[] : [],
          projectStatusConfig: Array.isArray(profileData.project_status_config) ? profileData.project_status_config as any[] : [],
          notificationSettings: profileData.notification_settings as any || { newProject: true, paymentConfirmation: true, deadlineReminder: true },
          securitySettings: profileData.security_settings as any || { twoFactorEnabled: false },
          briefingTemplate: profileData.briefing_template,
          termsAndConditions: profileData.terms_and_conditions || '',
        };
        setProfile(transformedProfile);
      } else {
        // No profile found - this should not happen after migration
        setError('No profile found. Please contact administrator.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch profile');
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<Profile>) => {
    try {
      if (!profile) {
        throw new Error('No profile to update');
      }
      
      // Transform app format to database format
      const dbUpdates = {
        full_name: updates.fullName,
        email: updates.email,
        phone: updates.phone,
        company_name: updates.companyName,
        website: updates.website,
        address: updates.address,
        bank_account: updates.bankAccount,
        authorized_signer: updates.authorizedSigner,
        id_number: updates.idNumber,
        bio: updates.bio,
        income_categories: updates.incomeCategories,
        expense_categories: updates.expenseCategories,
        project_types: updates.projectTypes,
        event_types: updates.eventTypes,
        asset_categories: updates.assetCategories,
        sop_categories: updates.sopCategories,
        project_status_config: updates.projectStatusConfig,
        notification_settings: updates.notificationSettings,
        security_settings: updates.securitySettings,
        briefing_template: updates.briefingTemplate,
        terms_and_conditions: updates.termsAndConditions,
        updated_at: new Date().toISOString()
      };

      // Remove undefined values
      Object.keys(dbUpdates).forEach(key => {
        if (dbUpdates[key as keyof typeof dbUpdates] === undefined) {
          delete dbUpdates[key as keyof typeof dbUpdates];
        }
      });

      const { data, error } = await supabase
        .from('profiles')
        .update(dbUpdates)
        .eq('id', profile.id || (await supabase.from('profiles').select('id').limit(1).single()).data?.id)
        .select()
        .single();

      if (error) throw error;
      
      // Update local state
      if (profile && data) {
        const updatedProfile = { ...profile, ...updates };
        setProfile(updatedProfile);
      }
      
      return data;
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : 'Failed to update profile');
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    profile,
    loading,
    error,
    updateProfile,
    refetch: fetchProfile
  };
}