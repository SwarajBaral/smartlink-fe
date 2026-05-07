export interface QRCard {
  id: string;
  qr_slug: string;
  business_name: string;
  owner_name: string;
  phone: string;
  email?: string;
  whatsapp_number?: string;
  google_maps_link?: string;
  upi_id?: string;
  youtube_link?: string;
  google_review_link?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  logo_url?: string;
  qr_image_base64?: string;
  enabled: boolean;
  created_at: string;
  updated_at: string;
}

export interface PublicCardData {
  qr_slug: string;
  enabled: boolean;
  business_name: string;
  owner_name: string;
  phone: string;
  email?: string;
  whatsapp_number?: string;
  google_maps_link?: string;
  upi_id?: string;
  youtube_link?: string;
  google_review_link?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  logo_url?: string;
}

export interface CreateQRInput {
  business_name: string;
  owner_name: string;
  phone: string;
  email?: string;
  whatsapp_number?: string;
  google_maps_link?: string;
  upi_id?: string;
  youtube_link?: string;
  google_review_link?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  logo_url?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}
