import React, { Component } from 'react';
import { RichText } from 'prismic-reactjs';
import InstagramInfoCard from './styles/InstagramInfoCard';

class InstagramCard extends Component {
  render() {
    const { post, format } = this.props;

    let instagramHandle;
    let instagramLink;
    let instagramImg;
    let instagramProfilePhoto;
    let instagramName;

    if (format == 'tall') {
      instagramHandle = RichText.asText(post.tall_instagram_handle);
      instagramLink =
        RichText.asText(post.tall_instagram_link) != ''
          ? RichText.asText(post.tall_instagram_link)
          : '#press';
      instagramImg = post.tall_post_image.url;
      instagramProfilePhoto = post.tall_profile_photo.url;
      instagramName = RichText.asText(post.tall_name);
    } else {
      instagramHandle = RichText.asText(post.instagram_handle);
      instagramLink =
        RichText.asText(post.instagram_link) != ''
          ? RichText.asText(post.instagram_link)
          : '#press';
      instagramImg = post.image.url;
      instagramProfilePhoto = post.profile_photo.url;
      instagramName = RichText.asText(post.name);
    }

    const prefix = 'https://';
    if (
      instagramLink !== '#' &&
      instagramLink.substr(0, prefix.length) !== prefix
    ) {
      instagramLink = prefix + instagramLink;
    }

    return (
      <div className="card-bg">
        <a href={instagramLink} target="_blank">
          <img src={instagramImg} alt="" className="post-img" />
        </a>
        <InstagramInfoCard className="insta-info">
          <div className="v-h-aligner">
            <div className="profile-img">
              <img src={instagramProfilePhoto} alt={instagramHandle} />
            </div>
          </div>
          <div className="post-info vertical-aligner">
            <a href={instagramLink} target="_blank">
              <p className="name">{instagramName}</p>
              <p className="handle">@{instagramHandle}</p>
            </a>
          </div>
        </InstagramInfoCard>
      </div>
    );
  }
}

export default InstagramCard;
