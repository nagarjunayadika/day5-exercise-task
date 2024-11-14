import React from 'react';
const SocialMediaIcons = ({ socialMedia }) => {
  return (
    <div className="social-media-icons">
      {socialMedia.facebook && (
        <a href={socialMedia.facebook} target="_blank">Facebook</a>
      )}
      {socialMedia.twitter && (
        <a href={socialMedia.twitter} target="_blank">Twitter</a>
      )}
      {socialMedia.instagram && (
        <a href={socialMedia.instagram} target="_blank">Instagram</a>
      )}
      {socialMedia.linkedin && (
        <a href={socialMedia.linkedin} target="_blank">Linkedin</a>
      )}
    </div>
  );
};

export default SocialMediaIcons;
