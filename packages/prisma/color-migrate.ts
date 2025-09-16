// scripts/migrateIconColors.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const tailwindToHex: Record<string, string> = {
  "text-green-600": "#16A34A",
  "text-red-600": "#DC2626",
  "text-blue-600": "#2563EB",
  "text-yellow-600": "#CA8A04",
  "text-purple-600": "#9333EA",
  "text-pink-600": "#DB2777",
  "text-gray-600": "#4B5563",
  // 👉 extend this map with any other tailwind classes you need
};

const FALLBACK_HEX = "#4B5563"; // default gray

async function main() {
  const eventTypes = await prisma.eventType.findMany({
    where: { metadata: { not: null } },
    select: { id: true, metadata: true },
  });

  console.log(`Found ${eventTypes.length} event types with metadata`);

  for (const et of eventTypes) {
    try {
      const metadata: any = typeof et.metadata === "string" ? JSON.parse(et.metadata) : et.metadata;

      if (metadata?.iconParams?.color) {
        const twColor = metadata.iconParams.color;
        const hex = tailwindToHex[twColor] || FALLBACK_HEX;

        metadata.iconParams.color = hex;

        await prisma.eventType.update({
          where: { id: et.id },
          data: { metadata },
        });

        if (tailwindToHex[twColor]) {
          console.log(`Updated EventType ${et.id}: ${twColor} → ${hex}`);
        } else {
          console.log(`Updated EventType ${et.id}: ${twColor} not in mapping, fallback → ${hex}`);
        }
      }
    } catch (err) {
      console.error(`Failed to process EventType ${et.id}:`, err);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
