import { api } from '../redux/baseApi';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type About = {
  __typename?: 'About';
  blog?: Maybe<ComponentAboutAboutUsPageSingleBlog>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heroDescription?: Maybe<Scalars['String']>;
  heroImage?: Maybe<UploadFileEntityResponse>;
  philosophy?: Maybe<Array<Maybe<ComponentAboutPhilosophy>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  team?: Maybe<Array<Maybe<ComponentTeamTeam>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  work?: Maybe<ComponentAboutWork>;
};


export type AboutPhilosophyArgs = {
  filters?: InputMaybe<ComponentAboutPhilosophyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type AboutTeamArgs = {
  filters?: InputMaybe<ComponentTeamTeamFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AboutEntity = {
  __typename?: 'AboutEntity';
  attributes?: Maybe<About>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutEntityResponse = {
  __typename?: 'AboutEntityResponse';
  data?: Maybe<AboutEntity>;
};

export type AboutInput = {
  blog?: InputMaybe<ComponentAboutAboutUsPageSingleBlogInput>;
  heroDescription?: InputMaybe<Scalars['String']>;
  heroImage?: InputMaybe<Scalars['ID']>;
  philosophy?: InputMaybe<Array<InputMaybe<ComponentAboutPhilosophyInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  team?: InputMaybe<Array<InputMaybe<ComponentTeamTeamInput>>>;
  work?: InputMaybe<ComponentAboutWorkInput>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Career = {
  __typename?: 'Career';
  Activities?: Maybe<UploadFileRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heroDescription?: Maybe<Scalars['String']>;
  heroImage?: Maybe<UploadFileEntityResponse>;
  joinUs?: Maybe<Array<Maybe<ComponentServicesJoinUs>>>;
  openPositions?: Maybe<Array<Maybe<ComponentServicesOpenPositions>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CareerActivitiesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CareerJoinUsArgs = {
  filters?: InputMaybe<ComponentServicesJoinUsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CareerOpenPositionsArgs = {
  filters?: InputMaybe<ComponentServicesOpenPositionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CareerEntity = {
  __typename?: 'CareerEntity';
  attributes?: Maybe<Career>;
  id?: Maybe<Scalars['ID']>;
};

export type CareerEntityResponse = {
  __typename?: 'CareerEntityResponse';
  data?: Maybe<CareerEntity>;
};

export type CareerInput = {
  Activities?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  heroDescription?: InputMaybe<Scalars['String']>;
  heroImage?: InputMaybe<Scalars['ID']>;
  joinUs?: InputMaybe<Array<InputMaybe<ComponentServicesJoinUsInput>>>;
  openPositions?: InputMaybe<Array<InputMaybe<ComponentServicesOpenPositionsInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ComponentAboutAboutUsPageSingleBlog = {
  __typename?: 'ComponentAboutAboutUsPageSingleBlog';
  blogDescription?: Maybe<Scalars['String']>;
  blogImage?: Maybe<UploadFileEntityResponse>;
  blogList?: Maybe<Array<Maybe<ComponentAboutAboutUsSingleBlogList>>>;
  blogTitle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type ComponentAboutAboutUsPageSingleBlogBlogListArgs = {
  filters?: InputMaybe<ComponentAboutAboutUsSingleBlogListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentAboutAboutUsPageSingleBlogInput = {
  blogDescription?: InputMaybe<Scalars['String']>;
  blogImage?: InputMaybe<Scalars['ID']>;
  blogList?: InputMaybe<Array<InputMaybe<ComponentAboutAboutUsSingleBlogListInput>>>;
  blogTitle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentAboutAboutUsSingleBlogList = {
  __typename?: 'ComponentAboutAboutUsSingleBlogList';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentAboutAboutUsSingleBlogListFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAboutAboutUsSingleBlogListFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAboutAboutUsSingleBlogListFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAboutAboutUsSingleBlogListFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentAboutAboutUsSingleBlogListInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentAboutPhilosophy = {
  __typename?: 'ComponentAboutPhilosophy';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentAboutPhilosophyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentAboutPhilosophyFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentAboutPhilosophyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAboutPhilosophyFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentAboutPhilosophyInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentAboutWork = {
  __typename?: 'ComponentAboutWork';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentAboutWorkInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentContactCredentials = {
  __typename?: 'ComponentContactCredentials';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type ComponentContactCredentialsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContactCredentialsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentContactCredentialsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContactCredentialsFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentContactCredentialsInput = {
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentLinksLinks = {
  __typename?: 'ComponentLinksLinks';
  facebook?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  linkedin?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type ComponentLinksLinksInput = {
  facebook?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  linkedin?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
};

export type ComponentRatingsRatings = {
  __typename?: 'ComponentRatingsRatings';
  clientImage?: Maybe<UploadFileEntityResponse>;
  clientName?: Maybe<Scalars['String']>;
  clientRatings?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type ComponentRatingsRatingsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentRatingsRatingsFiltersInput>>>;
  clientName?: InputMaybe<StringFilterInput>;
  clientRatings?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentRatingsRatingsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentRatingsRatingsFiltersInput>>>;
};

export type ComponentRatingsRatingsInput = {
  clientImage?: InputMaybe<Scalars['ID']>;
  clientName?: InputMaybe<Scalars['String']>;
  clientRatings?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type ComponentServicesCompanyDetails = {
  __typename?: 'ComponentServicesCompanyDetails';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentServicesCompanyDetailsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServicesCompanyDetailsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServicesCompanyDetailsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServicesCompanyDetailsFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentServicesCompanyDetailsInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentServicesJoinUs = {
  __typename?: 'ComponentServicesJoinUs';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentServicesJoinUsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServicesJoinUsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServicesJoinUsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServicesJoinUsFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentServicesJoinUsInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentServicesOpenPositions = {
  __typename?: 'ComponentServicesOpenPositions';
  id: Scalars['ID'];
  jobDescription?: Maybe<Scalars['String']>;
  jobLink?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
};

export type ComponentServicesOpenPositionsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServicesOpenPositionsFiltersInput>>>;
  jobDescription?: InputMaybe<StringFilterInput>;
  jobLink?: InputMaybe<StringFilterInput>;
  jobTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServicesOpenPositionsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServicesOpenPositionsFiltersInput>>>;
};

export type ComponentServicesOpenPositionsInput = {
  id?: InputMaybe<Scalars['ID']>;
  jobDescription?: InputMaybe<Scalars['String']>;
  jobLink?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
};

export type ComponentServicesPageServicesPageBlogs = {
  __typename?: 'ComponentServicesPageServicesPageBlogs';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  points?: Maybe<Array<Maybe<ComponentServicesPoints>>>;
  title?: Maybe<Scalars['String']>;
};


export type ComponentServicesPageServicesPageBlogsPointsArgs = {
  filters?: InputMaybe<ComponentServicesPointsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentServicesPageServicesPageBlogsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServicesPageServicesPageBlogsFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServicesPageServicesPageBlogsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServicesPageServicesPageBlogsFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentServicesPageServicesPageBlogsInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  points?: InputMaybe<Array<InputMaybe<ComponentServicesPointsInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentServicesPoints = {
  __typename?: 'ComponentServicesPoints';
  id: Scalars['ID'];
  point?: Maybe<Scalars['String']>;
};

export type ComponentServicesPointsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServicesPointsFiltersInput>>>;
  not?: InputMaybe<ComponentServicesPointsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServicesPointsFiltersInput>>>;
  point?: InputMaybe<StringFilterInput>;
};

export type ComponentServicesPointsInput = {
  id?: InputMaybe<Scalars['ID']>;
  point?: InputMaybe<Scalars['String']>;
};

export type ComponentServicesServices = {
  __typename?: 'ComponentServicesServices';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']>;
};

export type ComponentServicesServicesFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentServicesServicesFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentServicesServicesFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServicesServicesFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentServicesServicesInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentTeamTeam = {
  __typename?: 'ComponentTeamTeam';
  designation?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  links?: Maybe<ComponentLinksLinks>;
  personImage?: Maybe<UploadFileEntityResponse>;
  personName?: Maybe<Scalars['String']>;
};

export type ComponentTeamTeamFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentTeamTeamFiltersInput>>>;
  designation?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentTeamTeamFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentTeamTeamFiltersInput>>>;
  personName?: InputMaybe<StringFilterInput>;
};

export type ComponentTeamTeamInput = {
  designation?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  links?: InputMaybe<ComponentLinksLinksInput>;
  personImage?: InputMaybe<Scalars['ID']>;
  personName?: InputMaybe<Scalars['String']>;
};

export type Contact = {
  __typename?: 'Contact';
  createdAt?: Maybe<Scalars['DateTime']>;
  credentials?: Maybe<Array<Maybe<ComponentContactCredentials>>>;
  heroDescription?: Maybe<Scalars['String']>;
  heroImage?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ContactCredentialsArgs = {
  filters?: InputMaybe<ComponentContactCredentialsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactInput = {
  credentials?: InputMaybe<Array<InputMaybe<ComponentContactCredentialsInput>>>;
  heroDescription?: InputMaybe<Scalars['String']>;
  heroImage?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ContactUsForm = {
  __typename?: 'ContactUsForm';
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContactUsFormEntity = {
  __typename?: 'ContactUsFormEntity';
  attributes?: Maybe<ContactUsForm>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactUsFormEntityResponse = {
  __typename?: 'ContactUsFormEntityResponse';
  data?: Maybe<ContactUsFormEntity>;
};

export type ContactUsFormEntityResponseCollection = {
  __typename?: 'ContactUsFormEntityResponseCollection';
  data: Array<ContactUsFormEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactUsFormFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContactUsFormFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  firstName?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  lastName?: InputMaybe<StringFilterInput>;
  message?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContactUsFormFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactUsFormFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactUsFormInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type Footer = {
  __typename?: 'Footer';
  createdAt?: Maybe<Scalars['DateTime']>;
  footerDescription?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FooterEntity = {
  __typename?: 'FooterEntity';
  attributes?: Maybe<Footer>;
  id?: Maybe<Scalars['ID']>;
};

export type FooterEntityResponse = {
  __typename?: 'FooterEntityResponse';
  data?: Maybe<FooterEntity>;
};

export type FooterInput = {
  footerDescription?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GenericMorph = About | Career | ComponentAboutAboutUsPageSingleBlog | ComponentAboutAboutUsSingleBlogList | ComponentAboutPhilosophy | ComponentAboutWork | ComponentContactCredentials | ComponentLinksLinks | ComponentRatingsRatings | ComponentServicesCompanyDetails | ComponentServicesJoinUs | ComponentServicesOpenPositions | ComponentServicesPageServicesPageBlogs | ComponentServicesPoints | ComponentServicesServices | ComponentTeamTeam | Contact | ContactUsForm | Footer | Home | I18NLocale | LowerFooter | Service | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Home = {
  __typename?: 'Home';
  aboutDescription?: Maybe<Scalars['String']>;
  aboutTitle?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  goalDescription?: Maybe<Scalars['String']>;
  goalImage?: Maybe<UploadFileEntityResponse>;
  goalTitle?: Maybe<Scalars['String']>;
  heroDescription?: Maybe<Scalars['String']>;
  heroTitle?: Maybe<Scalars['String']>;
  homePageRatings?: Maybe<Array<Maybe<ComponentRatingsRatings>>>;
  homePageServices?: Maybe<Array<Maybe<ComponentServicesServices>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  team?: Maybe<Array<Maybe<ComponentTeamTeam>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type HomeHomePageRatingsArgs = {
  filters?: InputMaybe<ComponentRatingsRatingsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomeHomePageServicesArgs = {
  filters?: InputMaybe<ComponentServicesServicesFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type HomeTeamArgs = {
  filters?: InputMaybe<ComponentTeamTeamFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type HomeEntity = {
  __typename?: 'HomeEntity';
  attributes?: Maybe<Home>;
  id?: Maybe<Scalars['ID']>;
};

export type HomeEntityResponse = {
  __typename?: 'HomeEntityResponse';
  data?: Maybe<HomeEntity>;
};

export type HomeInput = {
  aboutDescription?: InputMaybe<Scalars['String']>;
  aboutTitle?: InputMaybe<Scalars['String']>;
  goalDescription?: InputMaybe<Scalars['String']>;
  goalImage?: InputMaybe<Scalars['ID']>;
  goalTitle?: InputMaybe<Scalars['String']>;
  heroDescription?: InputMaybe<Scalars['String']>;
  heroTitle?: InputMaybe<Scalars['String']>;
  homePageRatings?: InputMaybe<Array<InputMaybe<ComponentRatingsRatingsInput>>>;
  homePageServices?: InputMaybe<Array<InputMaybe<ComponentServicesServicesInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  team?: InputMaybe<Array<InputMaybe<ComponentTeamTeamInput>>>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type LowerFooter = {
  __typename?: 'LowerFooter';
  copyRightText?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LowerFooterEntity = {
  __typename?: 'LowerFooterEntity';
  attributes?: Maybe<LowerFooter>;
  id?: Maybe<Scalars['ID']>;
};

export type LowerFooterEntityResponse = {
  __typename?: 'LowerFooterEntityResponse';
  data?: Maybe<LowerFooterEntity>;
};

export type LowerFooterInput = {
  copyRightText?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createContactUsForm?: Maybe<ContactUsFormEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAbout?: Maybe<AboutEntityResponse>;
  deleteCareer?: Maybe<CareerEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteContactUsForm?: Maybe<ContactUsFormEntityResponse>;
  deleteFooter?: Maybe<FooterEntityResponse>;
  deleteHome?: Maybe<HomeEntityResponse>;
  deleteLowerFooter?: Maybe<LowerFooterEntityResponse>;
  deleteService?: Maybe<ServiceEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbout?: Maybe<AboutEntityResponse>;
  updateCareer?: Maybe<CareerEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateContactUsForm?: Maybe<ContactUsFormEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateFooter?: Maybe<FooterEntityResponse>;
  updateHome?: Maybe<HomeEntityResponse>;
  updateLowerFooter?: Maybe<LowerFooterEntityResponse>;
  updateService?: Maybe<ServiceEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationCreateContactUsFormArgs = {
  data: ContactUsFormInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteContactUsFormArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutArgs = {
  data: AboutInput;
};


export type MutationUpdateCareerArgs = {
  data: CareerInput;
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
};


export type MutationUpdateContactUsFormArgs = {
  data: ContactUsFormInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFooterArgs = {
  data: FooterInput;
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
};


export type MutationUpdateLowerFooterArgs = {
  data: LowerFooterInput;
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  about?: Maybe<AboutEntityResponse>;
  career?: Maybe<CareerEntityResponse>;
  contact?: Maybe<ContactEntityResponse>;
  contactUsForm?: Maybe<ContactUsFormEntityResponse>;
  contactUsForms?: Maybe<ContactUsFormEntityResponseCollection>;
  footer?: Maybe<FooterEntityResponse>;
  home?: Maybe<HomeEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  lowerFooter?: Maybe<LowerFooterEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  service?: Maybe<ServiceEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAboutArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCareerArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryContactArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryContactUsFormArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContactUsFormsArgs = {
  filters?: InputMaybe<ContactUsFormFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryFooterArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryHomeArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLowerFooterArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryServiceArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Service = {
  __typename?: 'Service';
  bestDescription?: Maybe<Scalars['String']>;
  blogs?: Maybe<Array<Maybe<ComponentServicesPageServicesPageBlogs>>>;
  companyDetails?: Maybe<Array<Maybe<ComponentServicesCompanyDetails>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heroDescription?: Maybe<Scalars['String']>;
  heroImage?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ServiceBlogsArgs = {
  filters?: InputMaybe<ComponentServicesPageServicesPageBlogsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ServiceCompanyDetailsArgs = {
  filters?: InputMaybe<ComponentServicesCompanyDetailsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceEntity = {
  __typename?: 'ServiceEntity';
  attributes?: Maybe<Service>;
  id?: Maybe<Scalars['ID']>;
};

export type ServiceEntityResponse = {
  __typename?: 'ServiceEntityResponse';
  data?: Maybe<ServiceEntity>;
};

export type ServiceInput = {
  bestDescription?: InputMaybe<Scalars['String']>;
  blogs?: InputMaybe<Array<InputMaybe<ComponentServicesPageServicesPageBlogsInput>>>;
  companyDetails?: InputMaybe<Array<InputMaybe<ComponentServicesCompanyDetailsInput>>>;
  heroDescription?: InputMaybe<Scalars['String']>;
  heroImage?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', home?: { __typename?: 'HomeEntityResponse', data?: { __typename?: 'HomeEntity', attributes?: { __typename?: 'Home', heroTitle?: string | null, heroDescription?: string | null, aboutTitle?: string | null, aboutDescription?: string | null, goalTitle?: string | null, goalDescription?: string | null, homePageServices?: Array<{ __typename?: 'ComponentServicesServices', id: string, title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null, goalImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, homePageRatings?: Array<{ __typename?: 'ComponentRatingsRatings', id: string, clientRatings?: string | null, clientName?: string | null, clientImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null, team?: Array<{ __typename?: 'ComponentTeamTeam', id: string, personName?: string | null, designation?: string | null, personImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, links?: { __typename?: 'ComponentLinksLinks', id: string, facebook?: string | null, twitter?: string | null, linkedin?: string | null } | null } | null> | null } | null } | null } | null };

export type ServicesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ServicesPageQuery = { __typename?: 'Query', service?: { __typename?: 'ServiceEntityResponse', data?: { __typename?: 'ServiceEntity', attributes?: { __typename?: 'Service', heroDescription?: string | null, bestDescription?: string | null, heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, blogs?: Array<{ __typename?: 'ComponentServicesPageServicesPageBlogs', id: string, title?: string | null, description?: string | null, points?: Array<{ __typename?: 'ComponentServicesPoints', point?: string | null } | null> | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null, companyDetails?: Array<{ __typename?: 'ComponentServicesCompanyDetails', title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null } | null } | null };

export type AboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPageQuery = { __typename?: 'Query', about?: { __typename?: 'AboutEntityResponse', data?: { __typename?: 'AboutEntity', attributes?: { __typename?: 'About', heroDescription?: string | null, heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, blog?: { __typename?: 'ComponentAboutAboutUsPageSingleBlog', blogTitle?: string | null, blogDescription?: string | null, blogList?: Array<{ __typename?: 'ComponentAboutAboutUsSingleBlogList', title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null, philosophy?: Array<{ __typename?: 'ComponentAboutPhilosophy', title?: string | null, description?: string | null } | null> | null, work?: { __typename?: 'ComponentAboutWork', title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null, team?: Array<{ __typename?: 'ComponentTeamTeam', personName?: string | null, designation?: string | null, links?: { __typename?: 'ComponentLinksLinks', facebook?: string | null, twitter?: string | null, linkedin?: string | null } | null } | null> | null } | null } | null } | null };

export type CareersPageQueryVariables = Exact<{ [key: string]: never; }>;


export type CareersPageQuery = { __typename?: 'Query', career?: { __typename?: 'CareerEntityResponse', data?: { __typename?: 'CareerEntity', attributes?: { __typename?: 'Career', heroDescription?: string | null, heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, joinUs?: Array<{ __typename?: 'ComponentServicesJoinUs', title?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null, Activities?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null }> } | null, openPositions?: Array<{ __typename?: 'ComponentServicesOpenPositions', jobTitle?: string | null, jobDescription?: string | null, jobLink?: string | null } | null> | null } | null } | null } | null };

export type FooterSectionQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterSectionQuery = { __typename?: 'Query', footer?: { __typename?: 'FooterEntityResponse', data?: { __typename?: 'FooterEntity', attributes?: { __typename?: 'Footer', footerDescription?: string | null } | null } | null } | null };

export type LowerFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type LowerFooterQuery = { __typename?: 'Query', lowerFooter?: { __typename?: 'LowerFooterEntityResponse', data?: { __typename?: 'LowerFooterEntity', attributes?: { __typename?: 'LowerFooter', copyRightText?: string | null } | null } | null } | null };

export type ContactPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactPageQuery = { __typename?: 'Query', contact?: { __typename?: 'ContactEntityResponse', data?: { __typename?: 'ContactEntity', attributes?: { __typename?: 'Contact', heroDescription?: string | null, heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, credentials?: Array<{ __typename?: 'ComponentContactCredentials', title?: string | null, description?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null> | null } | null } | null } | null };


export const HomePageDocument = `
    query homePage {
  home {
    data {
      attributes {
        heroTitle
        heroDescription
        aboutTitle
        aboutDescription
        homePageServices {
          id
          title
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        goalTitle
        goalDescription
        goalImage {
          data {
            attributes {
              url
            }
          }
        }
        homePageRatings {
          id
          clientRatings
          clientName
          clientImage {
            data {
              attributes {
                url
              }
            }
          }
        }
        team {
          id
          personName
          personImage {
            data {
              attributes {
                url
              }
            }
          }
          designation
          links {
            id
            facebook
            twitter
            linkedin
          }
        }
      }
    }
  }
}
    `;
export const ServicesPageDocument = `
    query servicesPage {
  service {
    data {
      attributes {
        heroDescription
        bestDescription
        heroImage {
          data {
            attributes {
              url
            }
          }
        }
        blogs {
          id
          title
          description
          points {
            point
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        companyDetails {
          title
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const AboutPageDocument = `
    query aboutPage {
  about {
    data {
      attributes {
        heroDescription
        heroImage {
          data {
            attributes {
              url
            }
          }
        }
        blog {
          blogTitle
          blogDescription
          blogList {
            title
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
        philosophy {
          title
          description
        }
        work {
          title
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        team {
          personName
          designation
          links {
            facebook
            twitter
            linkedin
          }
        }
      }
    }
  }
}
    `;
export const CareersPageDocument = `
    query careersPage {
  career {
    data {
      attributes {
        heroDescription
        heroImage {
          data {
            attributes {
              url
            }
          }
        }
        joinUs {
          title
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        Activities {
          data {
            attributes {
              url
            }
          }
        }
        openPositions {
          jobTitle
          jobDescription
          jobLink
        }
      }
    }
  }
}
    `;
export const FooterSectionDocument = `
    query footerSection {
  footer {
    data {
      attributes {
        footerDescription
      }
    }
  }
}
    `;
export const LowerFooterDocument = `
    query lowerFooter {
  lowerFooter {
    data {
      attributes {
        copyRightText
      }
    }
  }
}
    `;
export const ContactPageDocument = `
    query contactPage {
  contact {
    data {
      attributes {
        heroDescription
        heroImage {
          data {
            attributes {
              url
            }
          }
        }
        credentials {
          title
          description
          icon {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    homePage: build.query<HomePageQuery, HomePageQueryVariables | void>({
      query: (variables) => ({ document: HomePageDocument, variables })
    }),
    servicesPage: build.query<ServicesPageQuery, ServicesPageQueryVariables | void>({
      query: (variables) => ({ document: ServicesPageDocument, variables })
    }),
    aboutPage: build.query<AboutPageQuery, AboutPageQueryVariables | void>({
      query: (variables) => ({ document: AboutPageDocument, variables })
    }),
    careersPage: build.query<CareersPageQuery, CareersPageQueryVariables | void>({
      query: (variables) => ({ document: CareersPageDocument, variables })
    }),
    footerSection: build.query<FooterSectionQuery, FooterSectionQueryVariables | void>({
      query: (variables) => ({ document: FooterSectionDocument, variables })
    }),
    lowerFooter: build.query<LowerFooterQuery, LowerFooterQueryVariables | void>({
      query: (variables) => ({ document: LowerFooterDocument, variables })
    }),
    contactPage: build.query<ContactPageQuery, ContactPageQueryVariables | void>({
      query: (variables) => ({ document: ContactPageDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useHomePageQuery, useLazyHomePageQuery, useServicesPageQuery, useLazyServicesPageQuery, useAboutPageQuery, useLazyAboutPageQuery, useCareersPageQuery, useLazyCareersPageQuery, useFooterSectionQuery, useLazyFooterSectionQuery, useLowerFooterQuery, useLazyLowerFooterQuery, useContactPageQuery, useLazyContactPageQuery } = injectedRtkApi;

