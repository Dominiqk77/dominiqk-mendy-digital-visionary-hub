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
      api_usage_logs: {
        Row: {
          api_name: string
          cost: number | null
          created_at: string | null
          endpoint: string | null
          id: string
          request_data: Json | null
          response_status: number | null
          tokens_used: number | null
          user_id: string | null
        }
        Insert: {
          api_name: string
          cost?: number | null
          created_at?: string | null
          endpoint?: string | null
          id?: string
          request_data?: Json | null
          response_status?: number | null
          tokens_used?: number | null
          user_id?: string | null
        }
        Update: {
          api_name?: string
          cost?: number | null
          created_at?: string | null
          endpoint?: string | null
          id?: string
          request_data?: Json | null
          response_status?: number | null
          tokens_used?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      automation_workflows: {
        Row: {
          configuration: Json | null
          created_at: string | null
          description: string | null
          id: string
          last_run: string | null
          n8n_workflow_id: string | null
          name: string
          status: string | null
          total_runs: number | null
          updated_at: string | null
          user_id: string | null
          workflow_type: string | null
        }
        Insert: {
          configuration?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          last_run?: string | null
          n8n_workflow_id?: string | null
          name: string
          status?: string | null
          total_runs?: number | null
          updated_at?: string | null
          user_id?: string | null
          workflow_type?: string | null
        }
        Update: {
          configuration?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          last_run?: string | null
          n8n_workflow_id?: string | null
          name?: string
          status?: string | null
          total_runs?: number | null
          updated_at?: string | null
          user_id?: string | null
          workflow_type?: string | null
        }
        Relationships: []
      }
      chat_analytics: {
        Row: {
          consultation_accepted: boolean | null
          consultation_offered: boolean | null
          conversation_duration: number | null
          conversation_id: string | null
          created_at: string
          id: string
          negotiation_attempts: number | null
          objections_raised: string[] | null
          services_discussed: string[] | null
          technologies_mentioned: string[] | null
          total_messages: number | null
        }
        Insert: {
          consultation_accepted?: boolean | null
          consultation_offered?: boolean | null
          conversation_duration?: number | null
          conversation_id?: string | null
          created_at?: string
          id?: string
          negotiation_attempts?: number | null
          objections_raised?: string[] | null
          services_discussed?: string[] | null
          technologies_mentioned?: string[] | null
          total_messages?: number | null
        }
        Update: {
          consultation_accepted?: boolean | null
          consultation_offered?: boolean | null
          conversation_duration?: number | null
          conversation_id?: string | null
          created_at?: string
          id?: string
          negotiation_attempts?: number | null
          objections_raised?: string[] | null
          services_discussed?: string[] | null
          technologies_mentioned?: string[] | null
          total_messages?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_analytics_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "chat_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_conversations: {
        Row: {
          budget_mentioned: string | null
          business_context: string | null
          consultation_scheduled: boolean | null
          conversation_ended_at: string | null
          conversation_summary: string | null
          created_at: string
          email_sent: boolean | null
          email_sent_at: string | null
          has_requested_consultation: boolean | null
          id: string
          lead_score: number | null
          lead_status: string | null
          messages: Json
          project_complexity: string | null
          session_id: string
          updated_at: string
          user_email: string | null
          user_name: string | null
          user_phone: string | null
        }
        Insert: {
          budget_mentioned?: string | null
          business_context?: string | null
          consultation_scheduled?: boolean | null
          conversation_ended_at?: string | null
          conversation_summary?: string | null
          created_at?: string
          email_sent?: boolean | null
          email_sent_at?: string | null
          has_requested_consultation?: boolean | null
          id?: string
          lead_score?: number | null
          lead_status?: string | null
          messages?: Json
          project_complexity?: string | null
          session_id: string
          updated_at?: string
          user_email?: string | null
          user_name?: string | null
          user_phone?: string | null
        }
        Update: {
          budget_mentioned?: string | null
          business_context?: string | null
          consultation_scheduled?: boolean | null
          conversation_ended_at?: string | null
          conversation_summary?: string | null
          created_at?: string
          email_sent?: boolean | null
          email_sent_at?: string | null
          has_requested_consultation?: boolean | null
          id?: string
          lead_score?: number | null
          lead_status?: string | null
          messages?: Json
          project_complexity?: string | null
          session_id?: string
          updated_at?: string
          user_email?: string | null
          user_name?: string | null
          user_phone?: string | null
        }
        Relationships: []
      }
      chat_leads: {
        Row: {
          budget_range: string | null
          company: string | null
          conversation_id: string | null
          created_at: string
          email: string
          follow_up_date: string | null
          id: string
          lead_source: string | null
          name: string | null
          notes: string | null
          phone: string | null
          project_type: string | null
          qualification_score: number | null
          status: string | null
          updated_at: string
          urgency_level: string | null
        }
        Insert: {
          budget_range?: string | null
          company?: string | null
          conversation_id?: string | null
          created_at?: string
          email: string
          follow_up_date?: string | null
          id?: string
          lead_source?: string | null
          name?: string | null
          notes?: string | null
          phone?: string | null
          project_type?: string | null
          qualification_score?: number | null
          status?: string | null
          updated_at?: string
          urgency_level?: string | null
        }
        Update: {
          budget_range?: string | null
          company?: string | null
          conversation_id?: string | null
          created_at?: string
          email?: string
          follow_up_date?: string | null
          id?: string
          lead_source?: string | null
          name?: string | null
          notes?: string | null
          phone?: string | null
          project_type?: string | null
          qualification_score?: number | null
          status?: string | null
          updated_at?: string
          urgency_level?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_leads_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "chat_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_sessions: {
        Row: {
          created_at: string
          id: string
          ip_address: string | null
          is_active: boolean | null
          last_activity: string
          session_token: string
          user_agent: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          ip_address?: string | null
          is_active?: boolean | null
          last_activity?: string
          session_token: string
          user_agent?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          ip_address?: string | null
          is_active?: boolean | null
          last_activity?: string
          session_token?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          budget_range: string | null
          company: string | null
          created_at: string
          email: string
          id: string
          lead_score: number | null
          message: string
          name: string
          phone: string | null
          project_timeline: string | null
          request_type: string
          source_page: string | null
          status: string | null
          subject: string
          updated_at: string
        }
        Insert: {
          budget_range?: string | null
          company?: string | null
          created_at?: string
          email: string
          id?: string
          lead_score?: number | null
          message: string
          name: string
          phone?: string | null
          project_timeline?: string | null
          request_type: string
          source_page?: string | null
          status?: string | null
          subject: string
          updated_at?: string
        }
        Update: {
          budget_range?: string | null
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          lead_score?: number | null
          message?: string
          name?: string
          phone?: string | null
          project_timeline?: string | null
          request_type?: string
          source_page?: string | null
          status?: string | null
          subject?: string
          updated_at?: string
        }
        Relationships: []
      }
      crm_leads: {
        Row: {
          company_name: string | null
          company_size: string | null
          contact_name: string | null
          created_at: string | null
          email: string | null
          id: string
          industry: string | null
          last_contact_date: string | null
          lead_score: number | null
          notes: string | null
          phone: string | null
          social_profiles: Json | null
          source_type: string | null
          status: string | null
          tags: string[] | null
          updated_at: string | null
          user_id: string | null
          website: string | null
        }
        Insert: {
          company_name?: string | null
          company_size?: string | null
          contact_name?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          industry?: string | null
          last_contact_date?: string | null
          lead_score?: number | null
          notes?: string | null
          phone?: string | null
          social_profiles?: Json | null
          source_type?: string | null
          status?: string | null
          tags?: string[] | null
          updated_at?: string | null
          user_id?: string | null
          website?: string | null
        }
        Update: {
          company_name?: string | null
          company_size?: string | null
          contact_name?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          industry?: string | null
          last_contact_date?: string | null
          lead_score?: number | null
          notes?: string | null
          phone?: string | null
          social_profiles?: Json | null
          source_type?: string | null
          status?: string | null
          tags?: string[] | null
          updated_at?: string | null
          user_id?: string | null
          website?: string | null
        }
        Relationships: []
      }
      generated_content: {
        Row: {
          api_used: string | null
          content: string | null
          content_type: string
          created_at: string | null
          generation_cost: number | null
          id: string
          metadata: Json | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          api_used?: string | null
          content?: string | null
          content_type: string
          created_at?: string | null
          generation_cost?: number | null
          id?: string
          metadata?: Json | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          api_used?: string | null
          content?: string | null
          content_type?: string
          created_at?: string | null
          generation_cost?: number | null
          id?: string
          metadata?: Json | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      marketing_campaigns: {
        Row: {
          budget: number | null
          campaign_type: string | null
          content: Json | null
          created_at: string | null
          end_date: string | null
          id: string
          metrics: Json | null
          name: string
          start_date: string | null
          status: string | null
          target_audience: Json | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          budget?: number | null
          campaign_type?: string | null
          content?: Json | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          metrics?: Json | null
          name: string
          start_date?: string | null
          status?: string | null
          target_audience?: Json | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          budget?: number | null
          campaign_type?: string | null
          content?: Json | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          metrics?: Json | null
          name?: string
          start_date?: string | null
          status?: string | null
          target_audience?: Json | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          budget_range: string | null
          created_at: string | null
          deadline: string | null
          description: string | null
          id: string
          progress: number | null
          project_type: string | null
          status: string | null
          title: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          budget_range?: string | null
          created_at?: string | null
          deadline?: string | null
          description?: string | null
          id?: string
          progress?: number | null
          project_type?: string | null
          status?: string | null
          title: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          budget_range?: string | null
          created_at?: string | null
          deadline?: string | null
          description?: string | null
          id?: string
          progress?: number | null
          project_type?: string | null
          status?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      seo_analyses: {
        Row: {
          analysis_type: string | null
          created_at: string | null
          id: string
          recommendations: string[] | null
          results: Json | null
          score: number | null
          user_id: string | null
          website_url: string
        }
        Insert: {
          analysis_type?: string | null
          created_at?: string | null
          id?: string
          recommendations?: string[] | null
          results?: Json | null
          score?: number | null
          user_id?: string | null
          website_url: string
        }
        Update: {
          analysis_type?: string | null
          created_at?: string | null
          id?: string
          recommendations?: string[] | null
          results?: Json | null
          score?: number | null
          user_id?: string | null
          website_url?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          api_usage_count: number | null
          company_name: string | null
          company_size: string | null
          created_at: string | null
          id: string
          industry: string | null
          monthly_api_limit: number | null
          phone: string | null
          subscription_plan: string | null
          subscription_status: string | null
          updated_at: string | null
          user_id: string | null
          website: string | null
        }
        Insert: {
          api_usage_count?: number | null
          company_name?: string | null
          company_size?: string | null
          created_at?: string | null
          id?: string
          industry?: string | null
          monthly_api_limit?: number | null
          phone?: string | null
          subscription_plan?: string | null
          subscription_status?: string | null
          updated_at?: string | null
          user_id?: string | null
          website?: string | null
        }
        Update: {
          api_usage_count?: number | null
          company_name?: string | null
          company_size?: string | null
          created_at?: string | null
          id?: string
          industry?: string | null
          monthly_api_limit?: number | null
          phone?: string | null
          subscription_plan?: string | null
          subscription_status?: string | null
          updated_at?: string | null
          user_id?: string | null
          website?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_lead_score: {
        Args: { conversation_id: string }
        Returns: number
      }
      calculate_lead_score_crm: {
        Args: { lead_id: string }
        Returns: number
      }
      cleanup_inactive_sessions: {
        Args: Record<PropertyKey, never>
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
