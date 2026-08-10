// node scripts/optimize-images.mjs

import sharp from "sharp";
import { readdirSync, mkdirSync, statSync } from "fs";
import path from "path";

const SRC_DIR = path.resolve("og-imgs");
const OUT_DIR = path.resolve("public/gallery/optimized");

const SUPPORTED_EXTENSIONS = /\.(png|jpe?g)$/i;

function getAllImages(dir) {
   const files = [];

   for (const item of readdirSync(dir)) {
      const fullPath = path.join(dir, item);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
         // Don't process the optimized folder again
         if (item === "optimized") continue;

         files.push(...getAllImages(fullPath));
      } else if (SUPPORTED_EXTENSIONS.test(item)) {
         files.push(fullPath);
      }
   }

   return files;
}

const files = getAllImages(SRC_DIR);

console.log(`Found ${files.length} images.\n`);

for (const inputPath of files) {
   try {
      // Get path relative to /public/gallery
      const relativePath = path.relative(SRC_DIR, inputPath);

      // Remove original extension
      const relativeWithoutExt = relativePath.replace(/\.(png|jpe?g)$/i, "");

      // Create corresponding output path
      const outputPath = path.join(OUT_DIR, `${relativeWithoutExt}.webp`);

      // Create output directory if needed
      mkdirSync(path.dirname(outputPath), {
         recursive: true,
      });

      const info = await sharp(inputPath)
         .resize(1920, 1920, {
            fit: "inside",
            withoutEnlargement: true,
         })
         .webp({
            quality: 82,
         })
         .toFile(outputPath);

      console.log(
         `${relativePath} -> optimized/${relativeWithoutExt}.webp (${(
            info.size / 1024
         ).toFixed(0)}KB)`,
      );
   } catch (err) {
      console.error(`Failed on ${inputPath}:`, err.message);
   }
}
