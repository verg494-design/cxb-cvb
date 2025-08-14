import { supabase } from '../lib/supabase';
import type { 
  Client, Project, TeamMember, Transaction, Package, AddOn,
  Card, FinancialPocket, Lead, Asset, Contract, ClientFeedback,
  SocialMediaPost, PromoCode, SOP, Notification, User, Profile,
  Revision, TeamProjectPayment, TeamPaymentRecord, RewardLedgerEntry
} from '../types';

// Transform functions to convert between database and app formats
const transformDbToClient = (dbClient: any): Client => ({
  id: dbClient.id,
  name: dbClient.name,
  email: dbClient.email,
  phone: dbClient.phone,
  instagram: dbClient.instagram || '',
  since: dbClient.since,
  status: dbClient.status,
  clientType: dbClient.client_type,
  lastContact: dbClient.last_contact,
  portalAccessId: dbClient.portal_access_id,
});

const transformClientToDb = (client: Omit<Client, 'id'>): any => ({
  name: client.name,
  email: client.email,
  phone: client.phone,
  instagram: client.instagram,
  since: client.since,
  status: client.status,
  client_type: client.clientType,
  last_contact: client.lastContact,
  portal_access_id: client.portalAccessId,
});

const transformDbToProject = (dbProject: any): Project => ({
  id: dbProject.id,
  projectName: dbProject.project_name,
  clientName: dbProject.client_name,
  clientId: dbProject.client_id,
  projectType: dbProject.project_type,
  packageName: dbProject.package_name,
  packageId: dbProject.package_id,
  addOns: dbProject.add_ons || [],
  date: dbProject.date,
  deadlineDate: dbProject.deadline_date,
  location: dbProject.location,
  progress: dbProject.progress,
  status: dbProject.status,
  activeSubStatuses: dbProject.active_sub_statuses || [],
  totalCost: dbProject.total_cost,
  amountPaid: dbProject.amount_paid,
  paymentStatus: dbProject.payment_status,
  team: dbProject.team || [],
  notes: dbProject.notes,
  accommodation: dbProject.accommodation,
  driveLink: dbProject.drive_link,
  clientDriveLink: dbProject.client_drive_link,
  finalDriveLink: dbProject.final_drive_link,
  startTime: dbProject.start_time,
  endTime: dbProject.end_time,
  image: dbProject.image,
  promoCodeId: dbProject.promo_code_id,
  discountAmount: dbProject.discount_amount,
  shippingDetails: dbProject.shipping_details,
  dpProofUrl: dbProject.dp_proof_url,
  printingDetails: dbProject.printing_details || [],
  printingCost: dbProject.printing_cost,
  transportCost: dbProject.transport_cost,
  isEditingConfirmedByClient: dbProject.is_editing_confirmed_by_client,
  isPrintingConfirmedByClient: dbProject.is_printing_confirmed_by_client,
  isDeliveryConfirmedByClient: dbProject.is_delivery_confirmed_by_client,
  confirmedSubStatuses: dbProject.confirmed_sub_statuses || [],
  clientSubStatusNotes: dbProject.client_sub_status_notes || {},
  subStatusConfirmationSentAt: dbProject.sub_status_confirmation_sent_at || {},
  completedDigitalItems: dbProject.completed_digital_items || [],
  invoiceSignature: dbProject.invoice_signature,
});

const transformProjectToDb = (project: Omit<Project, 'id'>): any => ({
  project_name: project.projectName,
  client_name: project.clientName,
  client_id: project.clientId,
  project_type: project.projectType,
  package_name: project.packageName,
  package_id: project.packageId,
  add_ons: project.addOns,
  date: project.date,
  deadline_date: project.deadlineDate,
  location: project.location,
  progress: project.progress,
  status: project.status,
  active_sub_statuses: project.activeSubStatuses,
  total_cost: project.totalCost,
  amount_paid: project.amountPaid,
  payment_status: project.paymentStatus,
  team: project.team,
  notes: project.notes,
  accommodation: project.accommodation,
  drive_link: project.driveLink,
  client_drive_link: project.clientDriveLink,
  final_drive_link: project.finalDriveLink,
  start_time: project.startTime,
  end_time: project.endTime,
  image: project.image,
  promo_code_id: project.promoCodeId,
  discount_amount: project.discountAmount,
  shipping_details: project.shippingDetails,
  dp_proof_url: project.dpProofUrl,
  printing_details: project.printingDetails,
  printing_cost: project.printingCost,
  transport_cost: project.transportCost,
  is_editing_confirmed_by_client: project.isEditingConfirmedByClient,
  is_printing_confirmed_by_client: project.isPrintingConfirmedByClient,
  is_delivery_confirmed_by_client: project.isDeliveryConfirmedByClient,
  confirmed_sub_statuses: project.confirmedSubStatuses,
  client_sub_status_notes: project.clientSubStatusNotes,
  sub_status_confirmation_sent_at: project.subStatusConfirmationSentAt,
  completed_digital_items: project.completedDigitalItems,
  invoice_signature: project.invoiceSignature,
});

// Data service class
export class DataService {
  // Clients
  static async getClients(): Promise<Client[]> {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data.map(transformDbToClient);
  }

  static async createClient(client: Omit<Client, 'id'>): Promise<Client> {
    const { data, error } = await supabase
      .from('clients')
      .insert([transformClientToDb(client)])
      .select()
      .single();
    
    if (error) throw error;
    return transformDbToClient(data);
  }

  static async updateClient(id: string, updates: Partial<Client>): Promise<Client> {
    const { data, error } = await supabase
      .from('clients')
      .update({
        ...transformClientToDb(updates as any),
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return transformDbToClient(data);
  }

  static async deleteClient(id: string): Promise<void> {
    const { error } = await supabase
      .from('clients')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }

  // Projects
  static async getProjects(): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('date', { ascending: false });
    
    if (error) throw error;
    return data.map(transformDbToProject);
  }

  static async createProject(project: Omit<Project, 'id'>): Promise<Project> {
    const { data, error } = await supabase
      .from('projects')
      .insert([transformProjectToDb(project)])
      .select()
      .single();
    
    if (error) throw error;
    return transformDbToProject(data);
  }

  static async updateProject(id: string, updates: Partial<Project>): Promise<Project> {
    const { data, error } = await supabase
      .from('projects')
      .update({
        ...transformProjectToDb(updates as any),
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return transformDbToProject(data);
  }

  static async deleteProject(id: string): Promise<void> {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }

  // Generic methods for other tables
  static async getTableData<T>(tableName: string): Promise<T[]> {
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  }

  static async createTableItem<T>(tableName: string, item: any): Promise<T> {
    const { data, error } = await supabase
      .from(tableName)
      .insert([item])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async updateTableItem<T>(tableName: string, id: string, updates: any): Promise<T> {
    const { data, error } = await supabase
      .from(tableName)
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async deleteTableItem(tableName: string, id: string): Promise<void> {
    const { error } = await supabase
      .from(tableName)
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }

  // Authentication
  static async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    return data;
  }

  static async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }

  static async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  }
}