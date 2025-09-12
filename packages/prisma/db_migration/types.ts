import type { PrismaClient } from "@prisma/client";

import type { PrismaClient as OldPrismaClient } from "../generated/old";

export interface IdMapping {
  [oldId: string]: number;
}

export interface IdMappingString {
  [oldId: string]: string;
}

export interface IdMappings {
  // Core entities
  users: IdMapping;
  profiles: IdMapping;
  schedules: IdMapping;

  // CalId entities
  calIdTeams: IdMapping;
  calIdMemberships: IdMapping;
  calIdWorkflows: IdMapping;
  calIdWorkflowSteps: IdMapping;
  calIdTeamFeatures: IdMapping;

  // Other entities
  credentials: IdMapping;
  eventTypes: IdMapping;
  availabilities: IdMapping;
  apps: IdMapping;
  features: IdMapping;
  roles: IdMappingString;
  apiKeys: IdMappingString;
  attributes: IdMappingString;
  attributeOptions: IdMappingString;
  secondaryEmails: IdMapping;
  accounts: IdMapping;
  sessions: IdMapping;
  webhooks: IdMappingString;
  routingForms: IdMappingString;
  workspacePlatforms: IdMapping;
  delegationCredentials: IdMapping;
  oauthClients: IdMapping;
  verifiedNumbers: IdMapping;
  verifiedEmails: IdMapping;
  instantMeetingTokens: IdMapping;
  payments: IdMapping;
  bookingSeats: IdMapping;
  outOfOfficeReasons: IdMapping;
  outOfOfficeEntries: IdMapping;
  internalNotePresets: IdMapping;
  filterSegments: IdMapping;
  destinationCalendar: IdMapping;
  bookings: IdMapping;
}

export interface MigrationContext {
  oldDb: OldPrismaClient; // Replace with actual PrismaClient type
  newDb: PrismaClient; // Replace with actual PrismaClient type
  idMappings: IdMappings;
  log: (message: string, data?: any) => void;
  logError: (message: string, error: any) => void;
  processBatch: <T, R>(
    items: T[],
    processor: (batch: T[]) => Promise<R[]>,
    batchSize?: number
  ) => Promise<R[]>;
}
