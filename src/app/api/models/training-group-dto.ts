import { IResponse } from './response';

export interface TrainingGroupsListDto extends IResponse<ResponseResult> {}

interface ResponseResult {
  related_groups: unknown[];
  training_groups: TrainingGroupDto[];
}

interface TrainingGroupDto {
  id: number;
  user_id: number;
  latitude: number;
  longitude: number;
  address: string;
  group_name: string;
  group_email: string;
  group_website: string;
  approved_by_admin: boolean;
  description: string;
  admin_name: string;
  admin_email: string;
  admin_phone_number: string;
  whatsapp_group_link: string;
  facebook_group_link: string;
  instagram_group_link: string;
  komoot_link: string;
  ridee_link: string;
  strava_group_link: string;
  most_active_group: string;
  full_image: string;
  thumb: string;
  list_image: string;
}
