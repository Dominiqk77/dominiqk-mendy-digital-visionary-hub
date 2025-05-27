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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_lead_score: {
        Args: { conversation_id: string }
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
