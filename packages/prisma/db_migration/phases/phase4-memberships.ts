import type { MigrationContext } from "../types";

export async function migrateCalIdMemberships(ctx: MigrationContext) {
  ctx.log("Migrating Membership → CalIdMembership...");

  const oldMemberships = await ctx.oldDb.membership.findMany();

  await ctx.processBatch(oldMemberships, async (batch) => {
    const newMemberships = await Promise.all(
      batch.map(async (oldMembership: any) => {
        try {
          const calIdTeamId = ctx.idMappings.calIdTeams[oldMembership.teamId.toString()];
          const userId = ctx.idMappings.users[oldMembership.userId.toString()];

          if (!calIdTeamId || !userId) {
            ctx.log(`Skipping membership ${oldMembership.id} - team or user not found`);
            return null;
          }

          let role: "MEMBER" | "ADMIN" | "OWNER";
          switch (oldMembership.role) {
            case "MEMBER":
              role = "MEMBER";
              break;
            case "ADMIN":
              role = "ADMIN";
              break;
            case "OWNER":
              role = "OWNER";
              break;
            default:
              role = "MEMBER";
          }

          const newMembership = await ctx.newDb.calIdMembership.create({
            data: {
              calIdTeamId,
              userId,
              acceptedInvitation: oldMembership.accepted,
              role,
              impersonation: !oldMembership.disableImpersonation,
              createdAt: oldMembership.createdAt || new Date(),
              updatedAt: oldMembership.updatedAt || new Date(),
            },
          });

          ctx.idMappings.calIdMemberships[oldMembership.id.toString()] = newMembership.id;
          return newMembership;
        } catch (error) {
          ctx.logError(`Failed to migrate membership ${oldMembership.id}`, error);
          return null;
        }
      })
    );
    return newMemberships.filter(Boolean);
  });

  ctx.log(`Migrated memberships to CalIdMemberships`);
}

export async function migrateProfiles(ctx: MigrationContext) {
  ctx.log("Migrating Profiles...");

  const oldProfiles = await ctx.oldDb.profile.findMany();

  await ctx.processBatch(oldProfiles, async (batch) => {
    const newProfiles = await Promise.all(
      batch.map(async (oldProfile: any) => {
        try {
          const userId = ctx.idMappings.users[oldProfile.userId.toString()];
          const orgId = ctx.idMappings.calIdTeams[oldProfile.organizationId.toString()];

          if (!userId || !orgId) {
            ctx.log(`Skipping profile ${oldProfile.id} - user or organization not found`);
            return null;
          }

          const newProfile = await ctx.newDb.profile.create({
            data: {
              uid: oldProfile.uid,
              userId: userId,
              organizationId: orgId,
              username: oldProfile.username,
              createdAt: oldProfile.createdAt,
              updatedAt: oldProfile.updatedAt,
            },
          });

          ctx.idMappings.profiles[oldProfile.id.toString()] = newProfile.id;
          return newProfile;
        } catch (error) {
          ctx.logError(`Failed to migrate profile ${oldProfile.id}`, error);
          return null;
        }
      })
    );
    return newProfiles.filter(Boolean);
  });

  ctx.log(`Migrated ${oldProfiles.length} profiles`);
}

export async function migrateAvatars(ctx: MigrationContext) {
  ctx.log("Migrating Avatars...");

  const oldAvatars = await ctx.oldDb.avatar.findMany();

  await ctx.processBatch(oldAvatars, async (batch) => {
    const newAvatars = await Promise.all(
      batch.map(async (oldAvatar: any) => {
        try {
          const teamId =
            oldAvatar.teamId && oldAvatar.teamId !== 0
              ? ctx.idMappings.calIdTeams[oldAvatar.teamId.toString()]
              : 0;

          const userId =
            oldAvatar.userId && oldAvatar.userId !== 0
              ? ctx.idMappings.users[oldAvatar.userId.toString()]
              : 0;

          // If neither teamId nor userId resolved, skip
          if (!teamId && !userId) {
            ctx.log(`Skipping avatar ${oldAvatar.id} - no mapped team or user`);
            return null;
          }

          const newAvatar = await ctx.newDb.avatar.create({
            data: {
              teamId: teamId ?? 0,
              userId: userId ?? 0,
              data: oldAvatar.data,
              objectKey: oldAvatar.objectKey,
              isHeader: oldAvatar.isHeader ?? false,
              isBanner: oldAvatar.isBanner ?? false,
            },
          });

          // ctx.idMappings.avatars[oldAvatar.id.toString()] = {
          //   teamId: newAvatar.teamId,
          //   userId: newAvatar.userId,
          //   isHeader: newAvatar.isHeader,
          //   isBanner: newAvatar.isBanner,
          // };

          return newAvatar;
        } catch (error) {
          ctx.logError(`Failed to migrate avatar ${oldAvatar.id}`, error);
          return null;
        }
      })
    );

    return newAvatars.filter(Boolean);
  });

  ctx.log(`Migrated ${oldAvatars.length} avatars`);
}

export async function runPhase4(ctx: MigrationContext) {
  ctx.log("=== PHASE 4: Memberships and Profiles ===");
  await migrateCalIdMemberships(ctx);
  await migrateProfiles(ctx);
  await migrateAvatars(ctx);
}
