import { TrainingGroupsListDto } from '@api/models';
import { ISportTraining, SocialMediaOptions } from '../domain/models';

export class SportsMapper {
  static mapTrainingGroupsFromApi(
    source: TrainingGroupsListDto
  ): ISportTraining[] {
    return source.result.training_groups.map((item) => {
      return {
        id: item.id,
        userId: item.user_id,
        latitude: item.latitude,
        longitude: item.longitude,
        address: item.address,
        description: item.description,
        fullImage: item.full_image,
        thumb: item.thumb,
        listImage: item.list_image,
        groupDetails: {
          name: item.group_name,
          email: item.group_email,
          website: item.group_website,
          whatsappLink: item.whatsapp_group_link,
          facebookLink: item.facebook_group_link,
          instagramLink: item.instagram_group_link,
          komootLink: item.komoot_link,
          rideeLink: item.ridee_link,
          stravaLink: item.strava_group_link,
          mostActive: item.most_active_group as SocialMediaOptions
        },
        adminDetails: {
          name: item.admin_name,
          emmail: item.admin_email,
          phoneNumber: item.admin_phone_number
        }
      };
    });
  }
}
