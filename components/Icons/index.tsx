import React from 'react';
import Image from 'next/image';

import iconOverview from './icon-overview.png';
import iconInquiries from './icon-inquiries.png';
import iconEstimator from './icon-estimator.png';
import iconProjects from './icon-projects.png';
import iconDocumentation from './icon-documentation.png';
import iconAdministrations from './icon-administrations.png';
import iconLightMode from './icon-light-mode.png';
import iconVector from './icon-vector.png';
import iconLogo from './icon-logo.png';
import iconEBook from './icon-ebook.png';

const IconWrapper = ({ src, size }: { src: any; size: number }) => (
  <Image src={src} alt="icon" width={size} height={size} />
);

export const IconOverview = (props: { size: number }) => (
  <IconWrapper src={iconOverview} {...props} />
);
export const IconInquiries = (props: { size: number }) => (
  <IconWrapper src={iconInquiries} {...props} />
);
export const IconEstimator = (props: { size: number }) => (
  <IconWrapper src={iconEstimator} {...props} />
);
export const IconProjects = (props: { size: number }) => (
  <IconWrapper src={iconProjects} {...props} />
);
export const IconDocumentation = (props: { size: number }) => (
  <IconWrapper src={iconDocumentation} {...props} />
);
export const IconAdministrations = (props: { size: number }) => (
  <IconWrapper src={iconAdministrations} {...props} />
);
export const IconLightMode = (props: { size: number }) => (
  <IconWrapper src={iconLightMode} {...props} />
);
export const IconVector = (props: { size: number }) => (
  <IconWrapper src={iconVector} {...props} />
);
export const IconLogo = (props: { size: number }) => (
  <IconWrapper src={iconLogo} {...props} />
);
export const IconEBook = (props: { size: number }) => (
  <IconWrapper src={iconEBook} {...props} />
);

