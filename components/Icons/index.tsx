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
import iconViewSummary from './icon-view-summary.png'
import iconRiverFlow from './icon-river-flow.png';
import iconCart from './icon-cart.png';
import iconGeneralInformation from './icon-general-information.png';
import iconPercent from './icon-percent.png';
import iconDocument from './icon-document.png';
import iconLoadDocument from './icon-load-document.png';
import iconChartLineUp from './icon-chart-line-up.png';
import iconHome from './icon-home.png';
import iconBell from './icon-bell.png';
import iconSetting from './icon-setting.png';
import iconUserCircle from './icon-user-circle.png';

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
export const IconViewSummary = (props: { size: number }) => (
  <IconWrapper src={iconViewSummary} {...props} />
);
export const IconRiverFlow = (props: { size: number }) => (
  <IconWrapper src={iconRiverFlow} {...props} />
);
export const IconCart = (props: { size: number }) => (
  <IconWrapper src={iconCart} {...props} />
);
export const IconGeneralInformation = (props: { size: number }) => (
  <IconWrapper src={iconGeneralInformation} {...props} />
);
export const IconPercent = (props: { size: number }) => (
  <IconWrapper src={iconPercent} {...props} />
);
export const IconDocument = (props: { size: number }) => (
  <IconWrapper src={iconDocument} {...props} />
);
export const IconLoadDocument = (props: { size: number }) => (
  <IconWrapper src={iconLoadDocument} {...props} />
);
export const IconChartLineUp = (props: { size: number }) => (
  <IconWrapper src={iconChartLineUp} {...props} />
);
export const IconHome = (props: { size: number }) => (
  <IconWrapper src={iconHome} {...props} />
);
export const IconBell = (props: { size: number }) => (
  <IconWrapper src={iconBell} {...props} />
);
export const IconSetting = (props: { size: number }) => (
  <IconWrapper src={iconSetting} {...props} />
);
export const IconUserCircle = (props: { size: number }) => (
  <IconWrapper src={iconUserCircle} {...props} />
);
