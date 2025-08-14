export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string | null
          full_name: string
          email: string
          phone: string
          company_name: string
          website: string | null
          address: string
          bank_account: string
          authorized_signer: string
          id_number: string | null
          bio: string | null
          income_categories: Json
          expense_categories: Json
          project_types: Json
          event_types: Json
          asset_categories: Json
          sop_categories: Json
          project_status_config: Json
          notification_settings: Json
          security_settings: Json
          briefing_template: string
          terms_and_conditions: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          full_name?: string
          email?: string
          phone?: string
          company_name?: string
          website?: string | null
          address?: string
          bank_account?: string
          authorized_signer?: string
          id_number?: string | null
          bio?: string | null
          income_categories?: Json
          expense_categories?: Json
          project_types?: Json
          event_types?: Json
          asset_categories?: Json
          sop_categories?: Json
          project_status_config?: Json
          notification_settings?: Json
          security_settings?: Json
          briefing_template?: string
          terms_and_conditions?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          full_name?: string
          email?: string
          phone?: string
          company_name?: string
          website?: string | null
          address?: string
          bank_account?: string
          authorized_signer?: string
          id_number?: string | null
          bio?: string | null
          income_categories?: Json
          expense_categories?: Json
          project_types?: Json
          event_types?: Json
          asset_categories?: Json
          sop_categories?: Json
          project_status_config?: Json
          notification_settings?: Json
          security_settings?: Json
          briefing_template?: string
          terms_and_conditions?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          password: string
          full_name: string
          role: string
          permissions: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          password: string
          full_name: string
          role?: string
          permissions?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          password?: string
          full_name?: string
          role?: string
          permissions?: Json
          created_at?: string
          updated_at?: string
        }
      }
      clients: {
        Row: {
          id: string
          name: string
          email: string
          phone: string
          instagram: string | null
          since: string
          status: string
          client_type: string
          last_contact: string
          portal_access_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone: string
          instagram?: string | null
          since?: string
          status?: string
          client_type?: string
          last_contact?: string
          portal_access_id?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string
          instagram?: string | null
          since?: string
          status?: string
          client_type?: string
          last_contact?: string
          portal_access_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      packages: {
        Row: {
          id: string
          name: string
          price: number
          physical_items: Json
          digital_items: Json
          processing_time: string
          photographers: string | null
          videographers: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          price?: number
          physical_items?: Json
          digital_items?: Json
          processing_time?: string
          photographers?: string | null
          videographers?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          price?: number
          physical_items?: Json
          digital_items?: Json
          processing_time?: string
          photographers?: string | null
          videographers?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      add_ons: {
        Row: {
          id: string
          name: string
          price: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          price?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          price?: number
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          project_name: string
          client_name: string
          client_id: string
          project_type: string
          package_name: string
          package_id: string | null
          add_ons: Json
          date: string
          deadline_date: string | null
          location: string
          progress: number
          status: string
          active_sub_statuses: Json
          total_cost: number
          amount_paid: number
          payment_status: string
          team: Json
          notes: string | null
          accommodation: string | null
          drive_link: string | null
          client_drive_link: string | null
          final_drive_link: string | null
          start_time: string | null
          end_time: string | null
          image: string | null
          promo_code_id: string | null
          discount_amount: number
          shipping_details: string | null
          dp_proof_url: string | null
          printing_details: Json
          printing_cost: number
          transport_cost: number
          is_editing_confirmed_by_client: boolean
          is_printing_confirmed_by_client: boolean
          is_delivery_confirmed_by_client: boolean
          confirmed_sub_statuses: Json
          client_sub_status_notes: Json
          sub_status_confirmation_sent_at: Json
          completed_digital_items: Json
          invoice_signature: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_name: string
          client_name: string
          client_id: string
          project_type: string
          package_name: string
          package_id?: string | null
          add_ons?: Json
          date: string
          deadline_date?: string | null
          location?: string
          progress?: number
          status?: string
          active_sub_statuses?: Json
          total_cost?: number
          amount_paid?: number
          payment_status?: string
          team?: Json
          notes?: string | null
          accommodation?: string | null
          drive_link?: string | null
          client_drive_link?: string | null
          final_drive_link?: string | null
          start_time?: string | null
          end_time?: string | null
          image?: string | null
          promo_code_id?: string | null
          discount_amount?: number
          shipping_details?: string | null
          dp_proof_url?: string | null
          printing_details?: Json
          printing_cost?: number
          transport_cost?: number
          is_editing_confirmed_by_client?: boolean
          is_printing_confirmed_by_client?: boolean
          is_delivery_confirmed_by_client?: boolean
          confirmed_sub_statuses?: Json
          client_sub_status_notes?: Json
          sub_status_confirmation_sent_at?: Json
          completed_digital_items?: Json
          invoice_signature?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_name?: string
          client_name?: string
          client_id?: string
          project_type?: string
          package_name?: string
          package_id?: string | null
          add_ons?: Json
          date?: string
          deadline_date?: string | null
          location?: string
          progress?: number
          status?: string
          active_sub_statuses?: Json
          total_cost?: number
          amount_paid?: number
          payment_status?: string
          team?: Json
          notes?: string | null
          accommodation?: string | null
          drive_link?: string | null
          client_drive_link?: string | null
          final_drive_link?: string | null
          start_time?: string | null
          end_time?: string | null
          image?: string | null
          promo_code_id?: string | null
          discount_amount?: number
          shipping_details?: string | null
          dp_proof_url?: string | null
          printing_details?: Json
          printing_cost?: number
          transport_cost?: number
          is_editing_confirmed_by_client?: boolean
          is_printing_confirmed_by_client?: boolean
          is_delivery_confirmed_by_client?: boolean
          confirmed_sub_statuses?: Json
          client_sub_status_notes?: Json
          sub_status_confirmation_sent_at?: Json
          completed_digital_items?: Json
          invoice_signature?: string
          created_at?: string
          updated_at?: string
        }
      }
      team_members: {
        Row: {
          id: string
          name: string
          role: string
          email: string
          phone: string
          standard_fee: number
          no_rek: string | null
          reward_balance: number
          rating: number
          performance_notes: Json
          portal_access_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          role: string
          email: string
          phone: string
          standard_fee?: number
          no_rek?: string | null
          reward_balance?: number
          rating?: number
          performance_notes?: Json
          portal_access_id?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: string
          email?: string
          phone?: string
          standard_fee?: number
          no_rek?: string | null
          reward_balance?: number
          rating?: number
          performance_notes?: Json
          portal_access_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      transactions: {
        Row: {
          id: string
          date: string
          description: string
          amount: number
          type: string
          project_id: string | null
          category: string
          method: string
          pocket_id: string | null
          card_id: string | null
          printing_item_id: string
          vendor_signature: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          date?: string
          description: string
          amount?: number
          type: string
          project_id?: string | null
          category: string
          method?: string
          pocket_id?: string | null
          card_id?: string | null
          printing_item_id?: string
          vendor_signature?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          date?: string
          description?: string
          amount?: number
          type?: string
          project_id?: string | null
          category?: string
          method?: string
          pocket_id?: string | null
          card_id?: string | null
          printing_item_id?: string
          vendor_signature?: string
          created_at?: string
          updated_at?: string
        }
      }
      cards: {
        Row: {
          id: string
          card_holder_name: string
          bank_name: string
          card_type: string
          last_four_digits: string
          expiry_date: string
          balance: number
          color_gradient: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          card_holder_name: string
          bank_name: string
          card_type?: string
          last_four_digits: string
          expiry_date?: string
          balance?: number
          color_gradient?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          card_holder_name?: string
          bank_name?: string
          card_type?: string
          last_four_digits?: string
          expiry_date?: string
          balance?: number
          color_gradient?: string
          created_at?: string
          updated_at?: string
        }
      }
      financial_pockets: {
        Row: {
          id: string
          name: string
          description: string
          icon: string
          type: string
          amount: number
          goal_amount: number | null
          lock_end_date: string | null
          members: Json
          source_card_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string
          icon?: string
          type: string
          amount?: number
          goal_amount?: number | null
          lock_end_date?: string | null
          members?: Json
          source_card_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          icon?: string
          type?: string
          amount?: number
          goal_amount?: number | null
          lock_end_date?: string | null
          members?: Json
          source_card_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      leads: {
        Row: {
          id: string
          name: string
          contact_channel: string
          location: string
          status: string
          date: string
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          contact_channel: string
          location?: string
          status?: string
          date?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          contact_channel?: string
          location?: string
          status?: string
          date?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      assets: {
        Row: {
          id: string
          name: string
          category: string
          purchase_date: string
          purchase_price: number
          serial_number: string | null
          status: string
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          category: string
          purchase_date?: string
          purchase_price?: number
          serial_number?: string | null
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          category?: string
          purchase_date?: string
          purchase_price?: number
          serial_number?: string | null
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      contracts: {
        Row: {
          id: string
          contract_number: string
          client_id: string
          project_id: string
          signing_date: string
          signing_location: string
          client_name1: string
          client_address1: string
          client_phone1: string
          client_name2: string | null
          client_address2: string | null
          client_phone2: string | null
          shooting_duration: string
          guaranteed_photos: string
          album_details: string
          digital_files_format: string
          other_items: string | null
          personnel_count: string
          delivery_timeframe: string
          dp_date: string | null
          final_payment_date: string | null
          cancellation_policy: string
          jurisdiction: string
          vendor_signature: string | null
          client_signature: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          contract_number: string
          client_id: string
          project_id: string
          signing_date?: string
          signing_location?: string
          client_name1?: string
          client_address1?: string
          client_phone1?: string
          client_name2?: string | null
          client_address2?: string | null
          client_phone2?: string | null
          shooting_duration?: string
          guaranteed_photos?: string
          album_details?: string
          digital_files_format?: string
          other_items?: string | null
          personnel_count?: string
          delivery_timeframe?: string
          dp_date?: string | null
          final_payment_date?: string | null
          cancellation_policy?: string
          jurisdiction?: string
          vendor_signature?: string | null
          client_signature?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          contract_number?: string
          client_id?: string
          project_id?: string
          signing_date?: string
          signing_location?: string
          client_name1?: string
          client_address1?: string
          client_phone1?: string
          client_name2?: string | null
          client_address2?: string | null
          client_phone2?: string | null
          shooting_duration?: string
          guaranteed_photos?: string
          album_details?: string
          digital_files_format?: string
          other_items?: string | null
          personnel_count?: string
          delivery_timeframe?: string
          dp_date?: string | null
          final_payment_date?: string | null
          cancellation_policy?: string
          jurisdiction?: string
          vendor_signature?: string | null
          client_signature?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      client_feedback: {
        Row: {
          id: string
          client_name: string
          satisfaction: string
          rating: number
          feedback: string
          date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          client_name: string
          satisfaction: string
          rating: number
          feedback: string
          date?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          client_name?: string
          satisfaction?: string
          rating?: number
          feedback?: string
          date?: string
          created_at?: string
          updated_at?: string
        }
      }
      social_media_posts: {
        Row: {
          id: string
          project_id: string
          client_name: string
          post_type: string
          platform: string
          scheduled_date: string
          caption: string
          media_url: string | null
          status: string
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_id: string
          client_name: string
          post_type: string
          platform: string
          scheduled_date?: string
          caption: string
          media_url?: string | null
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          client_name?: string
          post_type?: string
          platform?: string
          scheduled_date?: string
          caption?: string
          media_url?: string | null
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      promo_codes: {
        Row: {
          id: string
          code: string
          discount_type: string
          discount_value: number
          is_active: boolean
          usage_count: number
          max_usage: number | null
          expiry_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          code: string
          discount_type: string
          discount_value?: number
          is_active?: boolean
          usage_count?: number
          max_usage?: number | null
          expiry_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          code?: string
          discount_type?: string
          discount_value?: number
          is_active?: boolean
          usage_count?: number
          max_usage?: number | null
          expiry_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      sops: {
        Row: {
          id: string
          title: string
          category: string
          content: string
          last_updated: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          category: string
          content: string
          last_updated?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          category?: string
          content?: string
          last_updated?: string
          created_at?: string
          updated_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          title: string
          message: string
          timestamp: string
          is_read: boolean
          icon: string
          link_view: string | null
          link_action: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          message: string
          timestamp?: string
          is_read?: boolean
          icon: string
          link_view?: string | null
          link_action?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          message?: string
          timestamp?: string
          is_read?: boolean
          icon?: string
          link_view?: string | null
          link_action?: Json
          created_at?: string
          updated_at?: string
        }
      }
      revisions: {
        Row: {
          id: string
          project_id: string
          date: string
          admin_notes: string
          deadline: string
          freelancer_id: string
          status: string
          freelancer_notes: string | null
          drive_link: string | null
          completed_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_id: string
          date?: string
          admin_notes: string
          deadline: string
          freelancer_id: string
          status?: string
          freelancer_notes?: string | null
          drive_link?: string | null
          completed_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          date?: string
          admin_notes?: string
          deadline?: string
          freelancer_id?: string
          status?: string
          freelancer_notes?: string | null
          drive_link?: string | null
          completed_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      team_project_payments: {
        Row: {
          id: string
          project_id: string
          team_member_name: string
          team_member_id: string
          date: string
          status: string
          fee: number
          reward: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          project_id: string
          team_member_name: string
          team_member_id: string
          date?: string
          status?: string
          fee?: number
          reward?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          team_member_name?: string
          team_member_id?: string
          date?: string
          status?: string
          fee?: number
          reward?: number
          created_at?: string
          updated_at?: string
        }
      }
      team_payment_records: {
        Row: {
          id: string
          record_number: string
          team_member_id: string
          date: string
          project_payment_ids: Json
          total_amount: number
          vendor_signature: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          record_number: string
          team_member_id: string
          date?: string
          project_payment_ids?: Json
          total_amount?: number
          vendor_signature?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          record_number?: string
          team_member_id?: string
          date?: string
          project_payment_ids?: Json
          total_amount?: number
          vendor_signature?: string
          created_at?: string
          updated_at?: string
        }
      }
      reward_ledger_entries: {
        Row: {
          id: string
          team_member_id: string
          date: string
          description: string
          amount: number
          project_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          team_member_id: string
          date?: string
          description: string
          amount?: number
          project_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          team_member_id?: string
          date?: string
          description?: string
          amount?: number
          project_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}