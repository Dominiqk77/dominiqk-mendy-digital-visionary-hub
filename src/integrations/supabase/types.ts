export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin_notifications: {
        Row: {
          admin_id: string
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          title: string
        }
        Insert: {
          admin_id: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          title: string
        }
        Update: {
          admin_id?: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          title?: string
        }
        Relationships: []
      }
      admin_roles: {
        Row: {
          created_at: string | null
          id: string
          partner_id: string | null
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          partner_id?: string | null
          role: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          partner_id?: string | null
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_roles_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partners"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_users: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          ministry_id: string | null
          partner_id: string | null
          role: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          first_name: string
          id: string
          last_name: string
          ministry_id?: string | null
          partner_id?: string | null
          role: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          ministry_id?: string | null
          partner_id?: string | null
          role?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_users_ministry_id_fkey"
            columns: ["ministry_id"]
            isOneToOne: false
            referencedRelation: "ministries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "admin_users_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partners"
            referencedColumns: ["id"]
          },
        ]
      }
      advertisements: {
        Row: {
          clicks: number
          created_at: string | null
          description: string | null
          enddate: string
          id: string
          imageurl: string
          impressions: number
          islocal: boolean
          priority: number
          revenue_per_click: number
          size: string
          startdate: string
          targetaudience: string
          targeturl: string
          title: string
          total_revenue: number | null
        }
        Insert: {
          clicks?: number
          created_at?: string | null
          description?: string | null
          enddate?: string
          id?: string
          imageurl: string
          impressions?: number
          islocal?: boolean
          priority?: number
          revenue_per_click?: number
          size: string
          startdate?: string
          targetaudience: string
          targeturl: string
          title: string
          total_revenue?: number | null
        }
        Update: {
          clicks?: number
          created_at?: string | null
          description?: string | null
          enddate?: string
          id?: string
          imageurl?: string
          impressions?: number
          islocal?: boolean
          priority?: number
          revenue_per_click?: number
          size?: string
          startdate?: string
          targetaudience?: string
          targeturl?: string
          title?: string
          total_revenue?: number | null
        }
        Relationships: []
      }
      ai_conversations: {
        Row: {
          context: Json | null
          created_at: string
          id: string
          last_updated_at: string
          topic: string
          user_id: string
        }
        Insert: {
          context?: Json | null
          created_at?: string
          id?: string
          last_updated_at?: string
          topic: string
          user_id: string
        }
        Update: {
          context?: Json | null
          created_at?: string
          id?: string
          last_updated_at?: string
          topic?: string
          user_id?: string
        }
        Relationships: []
      }
      ai_messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          id: string
          role: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          role: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "ai_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      billing_history: {
        Row: {
          amount: number
          created_at: string
          id: string
          invoice_url: string | null
          payment_method: string | null
          period_end: string | null
          period_start: string | null
          plan_name: string | null
          status: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          invoice_url?: string | null
          payment_method?: string | null
          period_end?: string | null
          period_start?: string | null
          plan_name?: string | null
          status: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          invoice_url?: string | null
          payment_method?: string | null
          period_end?: string | null
          period_start?: string | null
          plan_name?: string | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author: string
          author_image: string | null
          author_title: string
          category: string
          content: string
          created_at: string | null
          excerpt: string
          id: string
          image_url: string | null
          keywords: string[] | null
          published_at: string | null
          read_time: number
          slug: string
          title: string
          updated_at: string | null
        }
        Insert: {
          author?: string
          author_image?: string | null
          author_title?: string
          category: string
          content: string
          created_at?: string | null
          excerpt: string
          id?: string
          image_url?: string | null
          keywords?: string[] | null
          published_at?: string | null
          read_time?: number
          slug: string
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string
          author_image?: string | null
          author_title?: string
          category?: string
          content?: string
          created_at?: string | null
          excerpt?: string
          id?: string
          image_url?: string | null
          keywords?: string[] | null
          published_at?: string | null
          read_time?: number
          slug?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      civic_actions: {
        Row: {
          created_at: string
          description: string
          end_date: string | null
          id: string
          location: Json | null
          points: number | null
          start_date: string | null
          status: string | null
          title: string
          type: string
        }
        Insert: {
          created_at?: string
          description: string
          end_date?: string | null
          id?: string
          location?: Json | null
          points?: number | null
          start_date?: string | null
          status?: string | null
          title: string
          type: string
        }
        Update: {
          created_at?: string
          description?: string
          end_date?: string | null
          id?: string
          location?: Json | null
          points?: number | null
          start_date?: string | null
          status?: string | null
          title?: string
          type?: string
        }
        Relationships: []
      }
      civic_participations: {
        Row: {
          action_id: string
          created_at: string
          id: string
          points_earned: number | null
          proof_url: string | null
          status: string | null
          user_id: string
          validated_at: string | null
        }
        Insert: {
          action_id: string
          created_at?: string
          id?: string
          points_earned?: number | null
          proof_url?: string | null
          status?: string | null
          user_id: string
          validated_at?: string | null
        }
        Update: {
          action_id?: string
          created_at?: string
          id?: string
          points_earned?: number | null
          proof_url?: string | null
          status?: string | null
          user_id?: string
          validated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "civic_participations_action_id_fkey"
            columns: ["action_id"]
            isOneToOne: false
            referencedRelation: "civic_actions"
            referencedColumns: ["id"]
          },
        ]
      }
      document_categories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      document_requirements: {
        Row: {
          created_at: string
          document_id: string | null
          id: string
          is_required: boolean | null
          service_id: string | null
        }
        Insert: {
          created_at?: string
          document_id?: string | null
          id?: string
          is_required?: boolean | null
          service_id?: string | null
        }
        Update: {
          created_at?: string
          document_id?: string | null
          id?: string
          is_required?: boolean | null
          service_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_requirements_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "government_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_requirements_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "government_services"
            referencedColumns: ["id"]
          },
        ]
      }
      government_documents: {
        Row: {
          category_id: string | null
          checksum: string | null
          created_at: string
          document_url: string | null
          format: string | null
          id: string
          is_active: boolean | null
          last_updated: string | null
          metadata: Json | null
          source_url: string
          title: string
          type: string
          updated_at: string
          version: number | null
        }
        Insert: {
          category_id?: string | null
          checksum?: string | null
          created_at?: string
          document_url?: string | null
          format?: string | null
          id?: string
          is_active?: boolean | null
          last_updated?: string | null
          metadata?: Json | null
          source_url: string
          title: string
          type: string
          updated_at?: string
          version?: number | null
        }
        Update: {
          category_id?: string | null
          checksum?: string | null
          created_at?: string
          document_url?: string | null
          format?: string | null
          id?: string
          is_active?: boolean | null
          last_updated?: string | null
          metadata?: Json | null
          source_url?: string
          title?: string
          type?: string
          updated_at?: string
          version?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "government_documents_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "document_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      government_services: {
        Row: {
          category: string
          cost: number | null
          created_at: string
          description: string | null
          id: string
          name: string
          processing_time: string | null
          requirements: Json | null
        }
        Insert: {
          category: string
          cost?: number | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          processing_time?: string | null
          requirements?: Json | null
        }
        Update: {
          category?: string
          cost?: number | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          processing_time?: string | null
          requirements?: Json | null
        }
        Relationships: []
      }
      identity_verifications: {
        Row: {
          created_at: string
          face_match_score: number | null
          id: string
          id_card_url: string | null
          selfie_url: string | null
          user_id: string
          verification_status: string | null
          verified_at: string | null
        }
        Insert: {
          created_at?: string
          face_match_score?: number | null
          id?: string
          id_card_url?: string | null
          selfie_url?: string | null
          user_id: string
          verification_status?: string | null
          verified_at?: string | null
        }
        Update: {
          created_at?: string
          face_match_score?: number | null
          id?: string
          id_card_url?: string | null
          selfie_url?: string | null
          user_id?: string
          verification_status?: string | null
          verified_at?: string | null
        }
        Relationships: []
      }
      ministries: {
        Row: {
          api_endpoint: string | null
          api_key: string | null
          code: string
          contact_email: string
          contact_name: string | null
          contact_phone: string | null
          created_at: string | null
          id: string
          logo_url: string | null
          name: string
          requests_monthly: number | null
          service_count: number | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          api_endpoint?: string | null
          api_key?: string | null
          code: string
          contact_email: string
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string | null
          id?: string
          logo_url?: string | null
          name: string
          requests_monthly?: number | null
          service_count?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          api_endpoint?: string | null
          api_key?: string | null
          code?: string
          contact_email?: string
          contact_name?: string | null
          contact_phone?: string | null
          created_at?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          requests_monthly?: number | null
          service_count?: number | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          link: string | null
          message: string
          read: boolean | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          link?: string | null
          message: string
          read?: boolean | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          link?: string | null
          message?: string
          read?: boolean | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_apis: {
        Row: {
          api_key: string | null
          api_name: string
          api_url: string
          created_at: string | null
          created_by: string | null
          endpoints: Json | null
          id: string
          partner_id: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          api_key?: string | null
          api_name: string
          api_url: string
          created_at?: string | null
          created_by?: string | null
          endpoints?: Json | null
          id?: string
          partner_id: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          api_key?: string | null
          api_name?: string
          api_url?: string
          created_at?: string | null
          created_by?: string | null
          endpoints?: Json | null
          id?: string
          partner_id?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      partners: {
        Row: {
          api_key: string | null
          api_url: string | null
          created_at: string | null
          id: string
          name: string
          status: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          api_key?: string | null
          api_url?: string | null
          created_at?: string | null
          id?: string
          name: string
          status?: string | null
          type: string
          updated_at?: string | null
        }
        Update: {
          api_key?: string | null
          api_url?: string | null
          created_at?: string | null
          id?: string
          name?: string
          status?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          accent_color: string | null
          address: string | null
          avatar_url: string | null
          bio: string | null
          birthdate: string | null
          company: string | null
          created_at: string
          first_name: string | null
          id: string
          identity_document_url: string | null
          job_title: string | null
          language: string | null
          last_name: string | null
          nationality: string | null
          phone: string | null
          referral_code: string | null
          role: string | null
          selfie_url: string | null
          theme: string | null
          updated_at: string
          verification_status: string | null
          website: string | null
        }
        Insert: {
          accent_color?: string | null
          address?: string | null
          avatar_url?: string | null
          bio?: string | null
          birthdate?: string | null
          company?: string | null
          created_at?: string
          first_name?: string | null
          id: string
          identity_document_url?: string | null
          job_title?: string | null
          language?: string | null
          last_name?: string | null
          nationality?: string | null
          phone?: string | null
          referral_code?: string | null
          role?: string | null
          selfie_url?: string | null
          theme?: string | null
          updated_at?: string
          verification_status?: string | null
          website?: string | null
        }
        Update: {
          accent_color?: string | null
          address?: string | null
          avatar_url?: string | null
          bio?: string | null
          birthdate?: string | null
          company?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          identity_document_url?: string | null
          job_title?: string | null
          language?: string | null
          last_name?: string | null
          nationality?: string | null
          phone?: string | null
          referral_code?: string | null
          role?: string | null
          selfie_url?: string | null
          theme?: string | null
          updated_at?: string
          verification_status?: string | null
          website?: string | null
        }
        Relationships: []
      }
      referrals: {
        Row: {
          code_used: string
          created_at: string
          id: string
          referred_id: string
          referrer_id: string
        }
        Insert: {
          code_used: string
          created_at?: string
          id?: string
          referred_id: string
          referrer_id: string
        }
        Update: {
          code_used?: string
          created_at?: string
          id?: string
          referred_id?: string
          referrer_id?: string
        }
        Relationships: []
      }
      scraping_logs: {
        Row: {
          created_at: string
          documents_added: number | null
          documents_found: number | null
          documents_updated: number | null
          error_message: string | null
          execution_time: number | null
          id: string
          source_url: string
          status: string
        }
        Insert: {
          created_at?: string
          documents_added?: number | null
          documents_found?: number | null
          documents_updated?: number | null
          error_message?: string | null
          execution_time?: number | null
          id?: string
          source_url: string
          status: string
        }
        Update: {
          created_at?: string
          documents_added?: number | null
          documents_found?: number | null
          documents_updated?: number | null
          error_message?: string | null
          execution_time?: number | null
          id?: string
          source_url?: string
          status?: string
        }
        Relationships: []
      }
      service_requests: {
        Row: {
          created_at: string
          documents: Json | null
          id: string
          notes: string | null
          service_id: string
          status: string
          submitted_data: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          documents?: Json | null
          id?: string
          notes?: string | null
          service_id: string
          status?: string
          submitted_data?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          documents?: Json | null
          id?: string
          notes?: string | null
          service_id?: string
          status?: string
          submitted_data?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_requests_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "government_services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_plans: {
        Row: {
          created_at: string
          description: string | null
          features: Json | null
          id: string
          name: string
          price: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          features?: Json | null
          id?: string
          name: string
          price: number
        }
        Update: {
          created_at?: string
          description?: string | null
          features?: Json | null
          id?: string
          name?: string
          price?: number
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          created_at: string | null
          description: string | null
          id: string
          source: string
          user_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          description?: string | null
          id?: string
          source: string
          user_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string | null
          id?: string
          source?: string
          user_id?: string | null
        }
        Relationships: []
      }
      urban_reports: {
        Row: {
          category: string
          created_at: string
          description: string
          id: string
          location: Json
          photos: string[] | null
          resolved_at: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string
          description: string
          id?: string
          location: Json
          photos?: string[] | null
          resolved_at?: string | null
          status?: string | null
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          id?: string
          location?: Json
          photos?: string[] | null
          resolved_at?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_badges: {
        Row: {
          badge_type: string
          earned_at: string
          id: string
          points: number | null
          user_id: string
        }
        Insert: {
          badge_type: string
          earned_at?: string
          id?: string
          points?: number | null
          user_id: string
        }
        Update: {
          badge_type?: string
          earned_at?: string
          id?: string
          points?: number | null
          user_id?: string
        }
        Relationships: []
      }
      user_credits: {
        Row: {
          amount: number
          created_at: string
          id: string
          reason: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          reason: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          reason?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      user_subscriptions: {
        Row: {
          created_at: string
          end_date: string | null
          id: string
          plan_id: string | null
          start_date: string
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          end_date?: string | null
          id?: string
          plan_id?: string | null
          start_date?: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          end_date?: string | null
          id?: string
          plan_id?: string | null
          start_date?: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_user_credit: {
        Args:
          | { user_id: number; credit_amount: number }
          | {
              user_id_param: string
              amount_param: number
              reason_param: string
            }
        Returns: undefined
      }
      create_referral: {
        Args: { ref_id: string; ref_user_id: string; ref_code: string }
        Returns: undefined
      }
      generate_blog_posts: {
        Args: { num_posts?: number; categories?: string[] }
        Returns: string[]
      }
      get_admin_billing_summary: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_admin_role: {
        Args: { user_id: string }
        Returns: string
      }
      get_profile_with_referral_code: {
        Args: { user_id_param: string }
        Returns: {
          id: string
          first_name: string
          last_name: string
          phone: string
          referral_code: string
        }[]
      }
      get_revenue_by_source: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_revenue_summary: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_user_referral_credits: {
        Args: { user_id_param: string }
        Returns: number
      }
      get_user_referrals: {
        Args: { referrer_id_param: string }
        Returns: {
          id: string
          referrer_id: string
          referred_id: string
          code_used: string
          created_at: string
          referred_email: string
        }[]
      }
      increment_ad_click: {
        Args: { ad_id: string }
        Returns: undefined
      }
      increment_ad_impression: {
        Args: { ad_id: string }
        Returns: undefined
      }
      is_admin: {
        Args: { user_id: string }
        Returns: boolean
      }
      update_profile_info: {
        Args: {
          user_id_param: string
          first_name_param: string
          last_name_param: string
          phone_param: string
          referral_code_param: string
        }
        Returns: undefined
      }
      update_profile_referral_code: {
        Args: { user_id_param: string; code_param: string }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
