export enum SocialMediaOptions {
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
  WHATSAPPP = 'whatsapp',
  KOMOOT = 'komoot',
  RIDEE = 'ridee',
  STRAVA = 'strava'
}

interface IGroupDetails {
  name: string;
  email: string;
  website: string;
  whatsappLink: string;
  facebookLink: string;
  instagramLink: string;
  komootLink: string;
  rideeLink: string;
  stravaLink: string;
  mostActive: SocialMediaOptions;
}

interface IAdminDetails {
  name: string;
  emmail: string;
  phoneNumber: string;
}

export interface ISportTraining {
  id: number;
  userId: number;
  latitude: number;
  longitude: number;
  address: string;
  description: string;
  fullImage: string;
  thumb: string;
  listImage: string;
  groupDetails: IGroupDetails;
  adminDetails: IAdminDetails;
}
