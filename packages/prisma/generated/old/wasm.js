
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.HostScalarFieldEnum = {
  userId: 'userId',
  eventTypeId: 'eventTypeId',
  isFixed: 'isFixed',
  priority: 'priority',
  weight: 'weight',
  weightAdjustment: 'weightAdjustment',
  scheduleId: 'scheduleId',
  createdAt: 'createdAt'
};

exports.Prisma.EventTypeScalarFieldEnum = {
  id: 'id',
  title: 'title',
  slug: 'slug',
  description: 'description',
  position: 'position',
  locations: 'locations',
  length: 'length',
  offsetStart: 'offsetStart',
  hidden: 'hidden',
  userId: 'userId',
  profileId: 'profileId',
  teamId: 'teamId',
  eventName: 'eventName',
  parentId: 'parentId',
  bookingFields: 'bookingFields',
  timeZone: 'timeZone',
  periodType: 'periodType',
  periodStartDate: 'periodStartDate',
  periodEndDate: 'periodEndDate',
  periodDays: 'periodDays',
  periodCountCalendarDays: 'periodCountCalendarDays',
  lockTimeZoneToggleOnBookingPage: 'lockTimeZoneToggleOnBookingPage',
  requiresConfirmation: 'requiresConfirmation',
  requiresConfirmationWillBlockSlot: 'requiresConfirmationWillBlockSlot',
  requiresBookerEmailVerification: 'requiresBookerEmailVerification',
  autoTranslateDescriptionEnabled: 'autoTranslateDescriptionEnabled',
  recurringEvent: 'recurringEvent',
  disableGuests: 'disableGuests',
  hideCalendarNotes: 'hideCalendarNotes',
  hideCalendarEventDetails: 'hideCalendarEventDetails',
  minimumBookingNotice: 'minimumBookingNotice',
  beforeEventBuffer: 'beforeEventBuffer',
  afterEventBuffer: 'afterEventBuffer',
  seatsPerTimeSlot: 'seatsPerTimeSlot',
  onlyShowFirstAvailableSlot: 'onlyShowFirstAvailableSlot',
  seatsShowAttendees: 'seatsShowAttendees',
  seatsShowAvailabilityCount: 'seatsShowAvailabilityCount',
  schedulingType: 'schedulingType',
  scheduleId: 'scheduleId',
  price: 'price',
  currency: 'currency',
  slotInterval: 'slotInterval',
  metadata: 'metadata',
  successRedirectUrl: 'successRedirectUrl',
  forwardParamsSuccessRedirect: 'forwardParamsSuccessRedirect',
  bookingLimits: 'bookingLimits',
  durationLimits: 'durationLimits',
  isInstantEvent: 'isInstantEvent',
  instantMeetingExpiryTimeOffsetInSeconds: 'instantMeetingExpiryTimeOffsetInSeconds',
  instantMeetingScheduleId: 'instantMeetingScheduleId',
  instantMeetingParameters: 'instantMeetingParameters',
  assignAllTeamMembers: 'assignAllTeamMembers',
  assignRRMembersUsingSegment: 'assignRRMembersUsingSegment',
  rrSegmentQueryValue: 'rrSegmentQueryValue',
  useEventTypeDestinationCalendarEmail: 'useEventTypeDestinationCalendarEmail',
  isRRWeightsEnabled: 'isRRWeightsEnabled',
  maxLeadThreshold: 'maxLeadThreshold',
  eventTypeColor: 'eventTypeColor',
  rescheduleWithSameRoundRobinHost: 'rescheduleWithSameRoundRobinHost',
  secondaryEmailId: 'secondaryEmailId',
  captchaType: 'captchaType'
};

exports.Prisma.CredentialScalarFieldEnum = {
  id: 'id',
  type: 'type',
  key: 'key',
  userId: 'userId',
  teamId: 'teamId',
  appId: 'appId',
  subscriptionId: 'subscriptionId',
  paymentStatus: 'paymentStatus',
  billingCycleStart: 'billingCycleStart',
  invalid: 'invalid'
};

exports.Prisma.DestinationCalendarScalarFieldEnum = {
  id: 'id',
  integration: 'integration',
  externalId: 'externalId',
  primaryEmail: 'primaryEmail',
  userId: 'userId',
  eventTypeId: 'eventTypeId',
  credentialId: 'credentialId',
  domainWideDelegationCredentialId: 'domainWideDelegationCredentialId'
};

exports.Prisma.UserPasswordScalarFieldEnum = {
  hash: 'hash',
  userId: 'userId',
  salt: 'salt'
};

exports.Prisma.TravelScheduleScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  timeZone: 'timeZone',
  startDate: 'startDate',
  endDate: 'endDate',
  prevTimeZone: 'prevTimeZone'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  bio: 'bio',
  avatarUrl: 'avatarUrl',
  timeZone: 'timeZone',
  weekStart: 'weekStart',
  startTime: 'startTime',
  endTime: 'endTime',
  bufferTime: 'bufferTime',
  hideBranding: 'hideBranding',
  theme: 'theme',
  appTheme: 'appTheme',
  createdDate: 'createdDate',
  trialEndsAt: 'trialEndsAt',
  lastActiveAt: 'lastActiveAt',
  defaultScheduleId: 'defaultScheduleId',
  completedOnboarding: 'completedOnboarding',
  locale: 'locale',
  timeFormat: 'timeFormat',
  twoFactorSecret: 'twoFactorSecret',
  twoFactorEnabled: 'twoFactorEnabled',
  backupCodes: 'backupCodes',
  identityProvider: 'identityProvider',
  identityProviderId: 'identityProviderId',
  invitedTo: 'invitedTo',
  brandColor: 'brandColor',
  darkBrandColor: 'darkBrandColor',
  allowDynamicBooking: 'allowDynamicBooking',
  allowSEOIndexing: 'allowSEOIndexing',
  receiveMonthlyDigestEmail: 'receiveMonthlyDigestEmail',
  metadata: 'metadata',
  verified: 'verified',
  role: 'role',
  disableImpersonation: 'disableImpersonation',
  organizationId: 'organizationId',
  locked: 'locked',
  movedToProfileId: 'movedToProfileId',
  isPlatformManaged: 'isPlatformManaged',
  smsLockState: 'smsLockState',
  smsLockReviewedByAdmin: 'smsLockReviewedByAdmin',
  referralLinkId: 'referralLinkId',
  bannerUrl: 'bannerUrl',
  faviconUrl: 'faviconUrl'
};

exports.Prisma.NotificationsSubscriptionsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  subscription: 'subscription'
};

exports.Prisma.ProfileScalarFieldEnum = {
  id: 'id',
  uid: 'uid',
  userId: 'userId',
  organizationId: 'organizationId',
  username: 'username',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TeamScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  logoUrl: 'logoUrl',
  calVideoLogo: 'calVideoLogo',
  appLogo: 'appLogo',
  appIconLogo: 'appIconLogo',
  bio: 'bio',
  hideBranding: 'hideBranding',
  isPrivate: 'isPrivate',
  hideBookATeamMember: 'hideBookATeamMember',
  createdAt: 'createdAt',
  metadata: 'metadata',
  theme: 'theme',
  brandColor: 'brandColor',
  darkBrandColor: 'darkBrandColor',
  bannerUrl: 'bannerUrl',
  parentId: 'parentId',
  timeFormat: 'timeFormat',
  timeZone: 'timeZone',
  weekStart: 'weekStart',
  isOrganization: 'isOrganization',
  pendingPayment: 'pendingPayment',
  isPlatform: 'isPlatform',
  createdByOAuthClientId: 'createdByOAuthClientId',
  smsLockState: 'smsLockState',
  smsLockReviewedByAdmin: 'smsLockReviewedByAdmin',
  bookingLimits: 'bookingLimits',
  includeManagedEventsInLimits: 'includeManagedEventsInLimits',
  faviconUrl: 'faviconUrl'
};

exports.Prisma.OrganizationSettingsScalarFieldEnum = {
  id: 'id',
  organizationId: 'organizationId',
  isOrganizationConfigured: 'isOrganizationConfigured',
  isOrganizationVerified: 'isOrganizationVerified',
  orgAutoAcceptEmail: 'orgAutoAcceptEmail',
  lockEventTypeCreationForUsers: 'lockEventTypeCreationForUsers',
  adminGetsNoSlotsNotification: 'adminGetsNoSlotsNotification',
  isAdminReviewed: 'isAdminReviewed',
  isAdminAPIEnabled: 'isAdminAPIEnabled',
  allowSEOIndexing: 'allowSEOIndexing',
  orgProfileRedirectsToVerifiedDomain: 'orgProfileRedirectsToVerifiedDomain'
};

exports.Prisma.MembershipScalarFieldEnum = {
  id: 'id',
  teamId: 'teamId',
  userId: 'userId',
  accepted: 'accepted',
  role: 'role',
  disableImpersonation: 'disableImpersonation'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  id: 'id',
  identifier: 'identifier',
  token: 'token',
  expires: 'expires',
  expiresInDays: 'expiresInDays',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  teamId: 'teamId',
  secondaryEmailId: 'secondaryEmailId'
};

exports.Prisma.InstantMeetingTokenScalarFieldEnum = {
  id: 'id',
  token: 'token',
  expires: 'expires',
  teamId: 'teamId',
  bookingId: 'bookingId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BookingReferenceScalarFieldEnum = {
  id: 'id',
  type: 'type',
  uid: 'uid',
  meetingId: 'meetingId',
  thirdPartyRecurringEventId: 'thirdPartyRecurringEventId',
  meetingPassword: 'meetingPassword',
  meetingUrl: 'meetingUrl',
  bookingId: 'bookingId',
  externalCalendarId: 'externalCalendarId',
  deleted: 'deleted',
  credentialId: 'credentialId',
  domainWideDelegationCredentialId: 'domainWideDelegationCredentialId'
};

exports.Prisma.AttendeeScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  timeZone: 'timeZone',
  phoneNumber: 'phoneNumber',
  locale: 'locale',
  bookingId: 'bookingId',
  noShow: 'noShow'
};

exports.Prisma.BookingScalarFieldEnum = {
  id: 'id',
  uid: 'uid',
  idempotencyKey: 'idempotencyKey',
  userId: 'userId',
  userPrimaryEmail: 'userPrimaryEmail',
  eventTypeId: 'eventTypeId',
  title: 'title',
  description: 'description',
  customInputs: 'customInputs',
  responses: 'responses',
  startTime: 'startTime',
  endTime: 'endTime',
  location: 'location',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  status: 'status',
  paid: 'paid',
  destinationCalendarId: 'destinationCalendarId',
  cancellationReason: 'cancellationReason',
  rejectionReason: 'rejectionReason',
  reassignReason: 'reassignReason',
  reassignById: 'reassignById',
  dynamicEventSlugRef: 'dynamicEventSlugRef',
  dynamicGroupSlugRef: 'dynamicGroupSlugRef',
  rescheduled: 'rescheduled',
  fromReschedule: 'fromReschedule',
  recurringEventId: 'recurringEventId',
  smsReminderNumber: 'smsReminderNumber',
  scheduledJobs: 'scheduledJobs',
  metadata: 'metadata',
  isRecorded: 'isRecorded',
  iCalUID: 'iCalUID',
  iCalSequence: 'iCalSequence',
  rating: 'rating',
  ratingFeedback: 'ratingFeedback',
  noShowHost: 'noShowHost',
  oneTimePassword: 'oneTimePassword',
  cancelledBy: 'cancelledBy',
  rescheduledBy: 'rescheduledBy'
};

exports.Prisma.ScheduleScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  name: 'name',
  timeZone: 'timeZone'
};

exports.Prisma.AvailabilityScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  eventTypeId: 'eventTypeId',
  days: 'days',
  startTime: 'startTime',
  endTime: 'endTime',
  date: 'date',
  scheduleId: 'scheduleId'
};

exports.Prisma.SelectedCalendarScalarFieldEnum = {
  userId: 'userId',
  integration: 'integration',
  externalId: 'externalId',
  credentialId: 'credentialId',
  googleChannelId: 'googleChannelId',
  googleChannelKind: 'googleChannelKind',
  googleChannelResourceId: 'googleChannelResourceId',
  googleChannelResourceUri: 'googleChannelResourceUri',
  googleChannelExpiration: 'googleChannelExpiration',
  domainWideDelegationCredentialId: 'domainWideDelegationCredentialId',
  googleSyncEnabled: 'googleSyncEnabled'
};

exports.Prisma.EventTypeCustomInputScalarFieldEnum = {
  id: 'id',
  eventTypeId: 'eventTypeId',
  label: 'label',
  type: 'type',
  options: 'options',
  required: 'required',
  placeholder: 'placeholder'
};

exports.Prisma.ResetPasswordRequestScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  email: 'email',
  expires: 'expires'
};

exports.Prisma.ReminderMailScalarFieldEnum = {
  id: 'id',
  referenceId: 'referenceId',
  reminderType: 'reminderType',
  elapsedMinutes: 'elapsedMinutes',
  createdAt: 'createdAt'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  uid: 'uid',
  appId: 'appId',
  bookingId: 'bookingId',
  amount: 'amount',
  fee: 'fee',
  currency: 'currency',
  success: 'success',
  refunded: 'refunded',
  data: 'data',
  externalId: 'externalId',
  paymentOption: 'paymentOption'
};

exports.Prisma.WebhookScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  teamId: 'teamId',
  eventTypeId: 'eventTypeId',
  platformOAuthClientId: 'platformOAuthClientId',
  subscriberUrl: 'subscriberUrl',
  payloadTemplate: 'payloadTemplate',
  createdAt: 'createdAt',
  active: 'active',
  eventTriggers: 'eventTriggers',
  appId: 'appId',
  secret: 'secret',
  platform: 'platform',
  time: 'time',
  timeUnit: 'timeUnit'
};

exports.Prisma.ImpersonationsScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  impersonatedUserId: 'impersonatedUserId',
  impersonatedById: 'impersonatedById'
};

exports.Prisma.ApiKeyScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  teamId: 'teamId',
  note: 'note',
  createdAt: 'createdAt',
  expiresAt: 'expiresAt',
  lastUsedAt: 'lastUsedAt',
  hashedKey: 'hashedKey',
  appId: 'appId'
};

exports.Prisma.RateLimitScalarFieldEnum = {
  id: 'id',
  name: 'name',
  apiKeyId: 'apiKeyId',
  ttl: 'ttl',
  limit: 'limit',
  blockDuration: 'blockDuration',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.HashedLinkScalarFieldEnum = {
  id: 'id',
  link: 'link',
  eventTypeId: 'eventTypeId'
};

exports.Prisma.IntegrationAccountsScalarFieldEnum = {
  id: 'id',
  tokenType: 'tokenType',
  expiresIn: 'expiresIn',
  createdAt: 'createdAt',
  refreshToken: 'refreshToken',
  accessToken: 'accessToken',
  scope: 'scope',
  ownerUniqIdentifier: 'ownerUniqIdentifier',
  provider: 'provider',
  userId: 'userId'
};

exports.Prisma.IntegrationUserProfileScalarFieldEnum = {
  id: 'id',
  scheduling_url: 'scheduling_url',
  avatar_url: 'avatar_url',
  created_at: 'created_at',
  updated_at: 'updated_at',
  current_organization: 'current_organization',
  integrationAccountsUserId: 'integrationAccountsUserId',
  integrationAccountsProvider: 'integrationAccountsProvider'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  providerEmail: 'providerEmail',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.AppScalarFieldEnum = {
  slug: 'slug',
  dirName: 'dirName',
  keys: 'keys',
  categories: 'categories',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  enabled: 'enabled'
};

exports.Prisma.App_RoutingForms_FormScalarFieldEnum = {
  id: 'id',
  description: 'description',
  position: 'position',
  routes: 'routes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  name: 'name',
  fields: 'fields',
  userId: 'userId',
  teamId: 'teamId',
  disabled: 'disabled',
  settings: 'settings'
};

exports.Prisma.App_RoutingForms_FormResponseScalarFieldEnum = {
  id: 'id',
  formFillerId: 'formFillerId',
  formId: 'formId',
  response: 'response',
  createdAt: 'createdAt',
  routedToBookingUid: 'routedToBookingUid',
  chosenRouteId: 'chosenRouteId'
};

exports.Prisma.WorkflowInsightsScalarFieldEnum = {
  msgId: 'msgId',
  eventTypeId: 'eventTypeId',
  workflowId: 'workflowId',
  type: 'type',
  status: 'status',
  metadata: 'metadata',
  createdAt: 'createdAt'
};

exports.Prisma.FeedbackScalarFieldEnum = {
  id: 'id',
  date: 'date',
  userId: 'userId',
  rating: 'rating',
  comment: 'comment'
};

exports.Prisma.WorkflowStepScalarFieldEnum = {
  id: 'id',
  stepNumber: 'stepNumber',
  action: 'action',
  workflowId: 'workflowId',
  sendTo: 'sendTo',
  reminderBody: 'reminderBody',
  emailSubject: 'emailSubject',
  template: 'template',
  numberRequired: 'numberRequired',
  sender: 'sender',
  numberVerificationPending: 'numberVerificationPending',
  includeCalendarEvent: 'includeCalendarEvent',
  disableOnMarkNoShow: 'disableOnMarkNoShow'
};

exports.Prisma.WorkflowScalarFieldEnum = {
  id: 'id',
  position: 'position',
  name: 'name',
  userId: 'userId',
  teamId: 'teamId',
  isActiveOnAll: 'isActiveOnAll',
  trigger: 'trigger',
  time: 'time',
  timeUnit: 'timeUnit'
};

exports.Prisma.AIPhoneCallConfigurationScalarFieldEnum = {
  id: 'id',
  eventTypeId: 'eventTypeId',
  templateType: 'templateType',
  schedulerName: 'schedulerName',
  generalPrompt: 'generalPrompt',
  yourPhoneNumber: 'yourPhoneNumber',
  numberToCall: 'numberToCall',
  guestName: 'guestName',
  guestEmail: 'guestEmail',
  guestCompany: 'guestCompany',
  enabled: 'enabled',
  beginMessage: 'beginMessage',
  llmId: 'llmId'
};

exports.Prisma.WorkflowsOnEventTypesScalarFieldEnum = {
  id: 'id',
  workflowId: 'workflowId',
  eventTypeId: 'eventTypeId'
};

exports.Prisma.WorkflowsOnTeamsScalarFieldEnum = {
  id: 'id',
  workflowId: 'workflowId',
  teamId: 'teamId'
};

exports.Prisma.DeploymentScalarFieldEnum = {
  id: 'id',
  logo: 'logo',
  theme: 'theme',
  licenseKey: 'licenseKey',
  agreedLicenseAt: 'agreedLicenseAt'
};

exports.Prisma.WorkflowReminderScalarFieldEnum = {
  id: 'id',
  bookingUid: 'bookingUid',
  method: 'method',
  scheduledDate: 'scheduledDate',
  referenceId: 'referenceId',
  scheduled: 'scheduled',
  workflowStepId: 'workflowStepId',
  cancelled: 'cancelled',
  seatReferenceId: 'seatReferenceId',
  isMandatoryReminder: 'isMandatoryReminder',
  retryCount: 'retryCount',
  attendeeId: 'attendeeId'
};

exports.Prisma.WebhookScheduledTriggersScalarFieldEnum = {
  id: 'id',
  jobName: 'jobName',
  subscriberUrl: 'subscriberUrl',
  payload: 'payload',
  startAfter: 'startAfter',
  retryCount: 'retryCount',
  createdAt: 'createdAt',
  appId: 'appId',
  webhookId: 'webhookId',
  bookingId: 'bookingId'
};

exports.Prisma.BookingSeatScalarFieldEnum = {
  id: 'id',
  referenceUid: 'referenceUid',
  bookingId: 'bookingId',
  attendeeId: 'attendeeId',
  data: 'data',
  metadata: 'metadata'
};

exports.Prisma.VerifiedNumberScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  teamId: 'teamId',
  phoneNumber: 'phoneNumber'
};

exports.Prisma.VerifiedEmailScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  teamId: 'teamId',
  email: 'email'
};

exports.Prisma.FeatureScalarFieldEnum = {
  slug: 'slug',
  enabled: 'enabled',
  description: 'description',
  type: 'type',
  stale: 'stale',
  lastUsedAt: 'lastUsedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.UserFeaturesScalarFieldEnum = {
  userId: 'userId',
  featureId: 'featureId',
  assignedAt: 'assignedAt',
  assignedBy: 'assignedBy',
  updatedAt: 'updatedAt'
};

exports.Prisma.TeamFeaturesScalarFieldEnum = {
  teamId: 'teamId',
  featureId: 'featureId',
  assignedAt: 'assignedAt',
  assignedBy: 'assignedBy',
  updatedAt: 'updatedAt'
};

exports.Prisma.SelectedSlotsScalarFieldEnum = {
  id: 'id',
  eventTypeId: 'eventTypeId',
  userId: 'userId',
  slotUtcStartDate: 'slotUtcStartDate',
  slotUtcEndDate: 'slotUtcEndDate',
  uid: 'uid',
  releaseAt: 'releaseAt',
  isSeat: 'isSeat'
};

exports.Prisma.OAuthClientScalarFieldEnum = {
  clientId: 'clientId',
  redirectUri: 'redirectUri',
  clientSecret: 'clientSecret',
  name: 'name',
  logo: 'logo'
};

exports.Prisma.KeycloakSessionInfoScalarFieldEnum = {
  id: 'id',
  browserToken: 'browserToken',
  metadata: 'metadata'
};

exports.Prisma.AccessCodeScalarFieldEnum = {
  id: 'id',
  code: 'code',
  clientId: 'clientId',
  expiresAt: 'expiresAt',
  scopes: 'scopes',
  userId: 'userId',
  teamId: 'teamId'
};

exports.Prisma.CalendarCacheScalarFieldEnum = {
  key: 'key',
  value: 'value',
  expiresAt: 'expiresAt',
  credentialId: 'credentialId'
};

exports.Prisma.TempOrgRedirectScalarFieldEnum = {
  id: 'id',
  from: 'from',
  fromOrgId: 'fromOrgId',
  type: 'type',
  toUrl: 'toUrl',
  enabled: 'enabled',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AvatarScalarFieldEnum = {
  teamId: 'teamId',
  userId: 'userId',
  data: 'data',
  objectKey: 'objectKey',
  isBanner: 'isBanner',
  isFavicon: 'isFavicon'
};

exports.Prisma.OutOfOfficeEntryScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  start: 'start',
  end: 'end',
  notes: 'notes',
  userId: 'userId',
  toUserId: 'toUserId',
  reasonId: 'reasonId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OutOfOfficeReasonScalarFieldEnum = {
  id: 'id',
  emoji: 'emoji',
  reason: 'reason',
  enabled: 'enabled',
  userId: 'userId'
};

exports.Prisma.PlatformOAuthClientScalarFieldEnum = {
  id: 'id',
  name: 'name',
  secret: 'secret',
  permissions: 'permissions',
  logo: 'logo',
  redirectUris: 'redirectUris',
  organizationId: 'organizationId',
  bookingRedirectUri: 'bookingRedirectUri',
  bookingCancelRedirectUri: 'bookingCancelRedirectUri',
  bookingRescheduleRedirectUri: 'bookingRescheduleRedirectUri',
  areEmailsEnabled: 'areEmailsEnabled',
  createdAt: 'createdAt'
};

exports.Prisma.PlatformAuthorizationTokenScalarFieldEnum = {
  id: 'id',
  platformOAuthClientId: 'platformOAuthClientId',
  userId: 'userId',
  createdAt: 'createdAt'
};

exports.Prisma.AccessTokenScalarFieldEnum = {
  id: 'id',
  secret: 'secret',
  createdAt: 'createdAt',
  expiresAt: 'expiresAt',
  platformOAuthClientId: 'platformOAuthClientId',
  userId: 'userId'
};

exports.Prisma.RefreshTokenScalarFieldEnum = {
  id: 'id',
  secret: 'secret',
  createdAt: 'createdAt',
  expiresAt: 'expiresAt',
  platformOAuthClientId: 'platformOAuthClientId',
  userId: 'userId'
};

exports.Prisma.DSyncDataScalarFieldEnum = {
  id: 'id',
  directoryId: 'directoryId',
  tenant: 'tenant',
  organizationId: 'organizationId'
};

exports.Prisma.DSyncTeamGroupMappingScalarFieldEnum = {
  id: 'id',
  organizationId: 'organizationId',
  teamId: 'teamId',
  directoryId: 'directoryId',
  groupName: 'groupName'
};

exports.Prisma.SecondaryEmailScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  email: 'email',
  emailVerified: 'emailVerified'
};

exports.Prisma.TaskScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  scheduledAt: 'scheduledAt',
  succeededAt: 'succeededAt',
  type: 'type',
  payload: 'payload',
  attempts: 'attempts',
  maxAttempts: 'maxAttempts',
  lastError: 'lastError'
};

exports.Prisma.PlatformBillingScalarFieldEnum = {
  id: 'id',
  customerId: 'customerId',
  subscriptionId: 'subscriptionId',
  plan: 'plan',
  billingCycleStart: 'billingCycleStart',
  billingCycleEnd: 'billingCycleEnd',
  overdue: 'overdue'
};

exports.Prisma.AttributeOptionScalarFieldEnum = {
  id: 'id',
  attributeId: 'attributeId',
  value: 'value',
  slug: 'slug',
  isGroup: 'isGroup',
  contains: 'contains'
};

exports.Prisma.AttributeScalarFieldEnum = {
  id: 'id',
  teamId: 'teamId',
  type: 'type',
  name: 'name',
  slug: 'slug',
  enabled: 'enabled',
  usersCanEditRelation: 'usersCanEditRelation',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isWeightsEnabled: 'isWeightsEnabled',
  isLocked: 'isLocked'
};

exports.Prisma.AttributeToUserScalarFieldEnum = {
  id: 'id',
  memberId: 'memberId',
  attributeOptionId: 'attributeOptionId',
  weight: 'weight',
  createdAt: 'createdAt',
  createdById: 'createdById',
  createdByDSyncId: 'createdByDSyncId',
  updatedAt: 'updatedAt',
  updatedById: 'updatedById',
  updatedByDSyncId: 'updatedByDSyncId'
};

exports.Prisma.AssignmentReasonScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  bookingId: 'bookingId',
  reasonEnum: 'reasonEnum',
  reasonString: 'reasonString'
};

exports.Prisma.DomainWideDelegationScalarFieldEnum = {
  id: 'id',
  workspacePlatformId: 'workspacePlatformId',
  serviceAccountKey: 'serviceAccountKey',
  enabled: 'enabled',
  organizationId: 'organizationId',
  domain: 'domain',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WorkspacePlatformScalarFieldEnum = {
  id: 'id',
  slug: 'slug',
  name: 'name',
  description: 'description',
  defaultServiceAccountKey: 'defaultServiceAccountKey',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  enabled: 'enabled'
};

exports.Prisma.EventTypeTranslationScalarFieldEnum = {
  uid: 'uid',
  eventTypeId: 'eventTypeId',
  field: 'field',
  sourceLocale: 'sourceLocale',
  targetLocale: 'targetLocale',
  translatedText: 'translatedText',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  updatedAt: 'updatedAt',
  updatedBy: 'updatedBy'
};

exports.Prisma.WatchlistScalarFieldEnum = {
  id: 'id',
  type: 'type',
  value: 'value',
  description: 'description',
  createdAt: 'createdAt',
  createdById: 'createdById',
  updatedAt: 'updatedAt',
  updatedById: 'updatedById'
};

exports.Prisma.BookingTimeStatusScalarFieldEnum = {
  id: 'id',
  uid: 'uid',
  eventTypeId: 'eventTypeId',
  title: 'title',
  description: 'description',
  startTime: 'startTime',
  endTime: 'endTime',
  createdAt: 'createdAt',
  location: 'location',
  paid: 'paid',
  status: 'status',
  rescheduled: 'rescheduled',
  userId: 'userId',
  teamId: 'teamId',
  eventLength: 'eventLength',
  timeStatus: 'timeStatus',
  eventParentId: 'eventParentId',
  userEmail: 'userEmail',
  username: 'username',
  ratingFeedback: 'ratingFeedback',
  rating: 'rating',
  noShowHost: 'noShowHost',
  isTeamBooking: 'isTeamBooking'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.PeriodType = exports.$Enums.PeriodType = {
  UNLIMITED: 'UNLIMITED',
  ROLLING: 'ROLLING',
  ROLLING_WINDOW: 'ROLLING_WINDOW',
  RANGE: 'RANGE'
};

exports.SchedulingType = exports.$Enums.SchedulingType = {
  ROUND_ROBIN: 'ROUND_ROBIN',
  COLLECTIVE: 'COLLECTIVE',
  MANAGED: 'MANAGED'
};

exports.CaptchaType = exports.$Enums.CaptchaType = {
  OFF: 'OFF',
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

exports.IdentityProvider = exports.$Enums.IdentityProvider = {
  CAL: 'CAL',
  GOOGLE: 'GOOGLE',
  SAML: 'SAML',
  KEYCLOAK: 'KEYCLOAK'
};

exports.UserPermissionRole = exports.$Enums.UserPermissionRole = {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

exports.SMSLockState = exports.$Enums.SMSLockState = {
  LOCKED: 'LOCKED',
  UNLOCKED: 'UNLOCKED',
  REVIEW_NEEDED: 'REVIEW_NEEDED'
};

exports.MembershipRole = exports.$Enums.MembershipRole = {
  MEMBER: 'MEMBER',
  ADMIN: 'ADMIN',
  OWNER: 'OWNER'
};

exports.BookingStatus = exports.$Enums.BookingStatus = {
  CANCELLED: 'CANCELLED',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  PENDING: 'PENDING',
  AWAITING_HOST: 'AWAITING_HOST'
};

exports.EventTypeCustomInputType = exports.$Enums.EventTypeCustomInputType = {
  TEXT: 'TEXT',
  TEXTLONG: 'TEXTLONG',
  NUMBER: 'NUMBER',
  BOOL: 'BOOL',
  RADIO: 'RADIO',
  PHONE: 'PHONE'
};

exports.ReminderType = exports.$Enums.ReminderType = {
  PENDING_BOOKING_CONFIRMATION: 'PENDING_BOOKING_CONFIRMATION'
};

exports.PaymentOption = exports.$Enums.PaymentOption = {
  ON_BOOKING: 'ON_BOOKING',
  HOLD: 'HOLD'
};

exports.TimeUnit = exports.$Enums.TimeUnit = {
  DAY: 'DAY',
  HOUR: 'HOUR',
  MINUTE: 'MINUTE'
};

exports.WebhookTriggerEvents = exports.$Enums.WebhookTriggerEvents = {
  BOOKING_CREATED: 'BOOKING_CREATED',
  BOOKING_PAYMENT_INITIATED: 'BOOKING_PAYMENT_INITIATED',
  BOOKING_PAID: 'BOOKING_PAID',
  BOOKING_RESCHEDULED: 'BOOKING_RESCHEDULED',
  BOOKING_REQUESTED: 'BOOKING_REQUESTED',
  BOOKING_CANCELLED: 'BOOKING_CANCELLED',
  BOOKING_REJECTED: 'BOOKING_REJECTED',
  BOOKING_NO_SHOW_UPDATED: 'BOOKING_NO_SHOW_UPDATED',
  FORM_SUBMITTED: 'FORM_SUBMITTED',
  MEETING_ENDED: 'MEETING_ENDED',
  MEETING_STARTED: 'MEETING_STARTED',
  RECORDING_READY: 'RECORDING_READY',
  INSTANT_MEETING: 'INSTANT_MEETING',
  RECORDING_TRANSCRIPTION_GENERATED: 'RECORDING_TRANSCRIPTION_GENERATED',
  OOO_CREATED: 'OOO_CREATED',
  AFTER_HOSTS_CAL_VIDEO_NO_SHOW: 'AFTER_HOSTS_CAL_VIDEO_NO_SHOW',
  AFTER_GUESTS_CAL_VIDEO_NO_SHOW: 'AFTER_GUESTS_CAL_VIDEO_NO_SHOW',
  FORM_SUBMITTED_NO_EVENT: 'FORM_SUBMITTED_NO_EVENT'
};

exports.IntegrationProvider = exports.$Enums.IntegrationProvider = {
  CALENDLY: 'CALENDLY'
};

exports.AppCategories = exports.$Enums.AppCategories = {
  calendar: 'calendar',
  messaging: 'messaging',
  other: 'other',
  payment: 'payment',
  video: 'video',
  web3: 'web3',
  automation: 'automation',
  analytics: 'analytics',
  conferencing: 'conferencing',
  crm: 'crm',
  onehash: 'onehash'
};

exports.WorkflowMethods = exports.$Enums.WorkflowMethods = {
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  WHATSAPP: 'WHATSAPP'
};

exports.WorkflowStatus = exports.$Enums.WorkflowStatus = {
  DELIVERED: 'DELIVERED',
  READ: 'READ',
  FAILED: 'FAILED'
};

exports.WorkflowActions = exports.$Enums.WorkflowActions = {
  EMAIL_HOST: 'EMAIL_HOST',
  EMAIL_ATTENDEE: 'EMAIL_ATTENDEE',
  SMS_ATTENDEE: 'SMS_ATTENDEE',
  SMS_NUMBER: 'SMS_NUMBER',
  EMAIL_ADDRESS: 'EMAIL_ADDRESS',
  WHATSAPP_ATTENDEE: 'WHATSAPP_ATTENDEE',
  WHATSAPP_NUMBER: 'WHATSAPP_NUMBER'
};

exports.WorkflowTemplates = exports.$Enums.WorkflowTemplates = {
  REMINDER: 'REMINDER',
  CUSTOM: 'CUSTOM',
  CANCELLED: 'CANCELLED',
  RESCHEDULED: 'RESCHEDULED',
  COMPLETED: 'COMPLETED',
  RATING: 'RATING',
  THANKYOU: 'THANKYOU'
};

exports.WorkflowTriggerEvents = exports.$Enums.WorkflowTriggerEvents = {
  BEFORE_EVENT: 'BEFORE_EVENT',
  EVENT_CANCELLED: 'EVENT_CANCELLED',
  NEW_EVENT: 'NEW_EVENT',
  AFTER_EVENT: 'AFTER_EVENT',
  RESCHEDULE_EVENT: 'RESCHEDULE_EVENT',
  AFTER_HOSTS_CAL_VIDEO_NO_SHOW: 'AFTER_HOSTS_CAL_VIDEO_NO_SHOW',
  AFTER_GUESTS_CAL_VIDEO_NO_SHOW: 'AFTER_GUESTS_CAL_VIDEO_NO_SHOW'
};

exports.FeatureType = exports.$Enums.FeatureType = {
  RELEASE: 'RELEASE',
  EXPERIMENT: 'EXPERIMENT',
  OPERATIONAL: 'OPERATIONAL',
  KILL_SWITCH: 'KILL_SWITCH',
  PERMISSION: 'PERMISSION'
};

exports.AccessScope = exports.$Enums.AccessScope = {
  READ_BOOKING: 'READ_BOOKING',
  READ_PROFILE: 'READ_PROFILE'
};

exports.RedirectType = exports.$Enums.RedirectType = {
  UserEventType: 'UserEventType',
  TeamEventType: 'TeamEventType',
  User: 'User',
  Team: 'Team'
};

exports.AttributeType = exports.$Enums.AttributeType = {
  TEXT: 'TEXT',
  NUMBER: 'NUMBER',
  SINGLE_SELECT: 'SINGLE_SELECT',
  MULTI_SELECT: 'MULTI_SELECT'
};

exports.AssignmentReasonEnum = exports.$Enums.AssignmentReasonEnum = {
  ROUTING_FORM_ROUTING: 'ROUTING_FORM_ROUTING',
  ROUTING_FORM_ROUTING_FALLBACK: 'ROUTING_FORM_ROUTING_FALLBACK',
  REASSIGNED: 'REASSIGNED',
  REROUTED: 'REROUTED',
  SALESFORCE_ASSIGNMENT: 'SALESFORCE_ASSIGNMENT'
};

exports.EventTypeAutoTranslatedField = exports.$Enums.EventTypeAutoTranslatedField = {
  DESCRIPTION: 'DESCRIPTION'
};

exports.WatchlistType = exports.$Enums.WatchlistType = {
  EMAIL: 'EMAIL',
  DOMAIN: 'DOMAIN',
  USERNAME: 'USERNAME'
};

exports.Prisma.ModelName = {
  Host: 'Host',
  EventType: 'EventType',
  Credential: 'Credential',
  DestinationCalendar: 'DestinationCalendar',
  UserPassword: 'UserPassword',
  TravelSchedule: 'TravelSchedule',
  User: 'User',
  NotificationsSubscriptions: 'NotificationsSubscriptions',
  Profile: 'Profile',
  Team: 'Team',
  OrganizationSettings: 'OrganizationSettings',
  Membership: 'Membership',
  VerificationToken: 'VerificationToken',
  InstantMeetingToken: 'InstantMeetingToken',
  BookingReference: 'BookingReference',
  Attendee: 'Attendee',
  Booking: 'Booking',
  Schedule: 'Schedule',
  Availability: 'Availability',
  SelectedCalendar: 'SelectedCalendar',
  EventTypeCustomInput: 'EventTypeCustomInput',
  ResetPasswordRequest: 'ResetPasswordRequest',
  ReminderMail: 'ReminderMail',
  Payment: 'Payment',
  Webhook: 'Webhook',
  Impersonations: 'Impersonations',
  ApiKey: 'ApiKey',
  RateLimit: 'RateLimit',
  HashedLink: 'HashedLink',
  IntegrationAccounts: 'IntegrationAccounts',
  IntegrationUserProfile: 'IntegrationUserProfile',
  Account: 'Account',
  Session: 'Session',
  App: 'App',
  App_RoutingForms_Form: 'App_RoutingForms_Form',
  App_RoutingForms_FormResponse: 'App_RoutingForms_FormResponse',
  WorkflowInsights: 'WorkflowInsights',
  Feedback: 'Feedback',
  WorkflowStep: 'WorkflowStep',
  Workflow: 'Workflow',
  AIPhoneCallConfiguration: 'AIPhoneCallConfiguration',
  WorkflowsOnEventTypes: 'WorkflowsOnEventTypes',
  WorkflowsOnTeams: 'WorkflowsOnTeams',
  Deployment: 'Deployment',
  WorkflowReminder: 'WorkflowReminder',
  WebhookScheduledTriggers: 'WebhookScheduledTriggers',
  BookingSeat: 'BookingSeat',
  VerifiedNumber: 'VerifiedNumber',
  VerifiedEmail: 'VerifiedEmail',
  Feature: 'Feature',
  UserFeatures: 'UserFeatures',
  TeamFeatures: 'TeamFeatures',
  SelectedSlots: 'SelectedSlots',
  OAuthClient: 'OAuthClient',
  KeycloakSessionInfo: 'KeycloakSessionInfo',
  AccessCode: 'AccessCode',
  CalendarCache: 'CalendarCache',
  TempOrgRedirect: 'TempOrgRedirect',
  Avatar: 'Avatar',
  OutOfOfficeEntry: 'OutOfOfficeEntry',
  OutOfOfficeReason: 'OutOfOfficeReason',
  PlatformOAuthClient: 'PlatformOAuthClient',
  PlatformAuthorizationToken: 'PlatformAuthorizationToken',
  AccessToken: 'AccessToken',
  RefreshToken: 'RefreshToken',
  DSyncData: 'DSyncData',
  DSyncTeamGroupMapping: 'DSyncTeamGroupMapping',
  SecondaryEmail: 'SecondaryEmail',
  Task: 'Task',
  PlatformBilling: 'PlatformBilling',
  AttributeOption: 'AttributeOption',
  Attribute: 'Attribute',
  AttributeToUser: 'AttributeToUser',
  AssignmentReason: 'AssignmentReason',
  DomainWideDelegation: 'DomainWideDelegation',
  WorkspacePlatform: 'WorkspacePlatform',
  EventTypeTranslation: 'EventTypeTranslation',
  Watchlist: 'Watchlist',
  BookingTimeStatus: 'BookingTimeStatus'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
