import sharp from "sharp";
import { readdirSync, mkdirSync } from "fs";
import path from "path";

const SRC_DIR = path.resolve("public/gallery");
const OUT_DIR = path.resolve("public/gallery/optimized");

mkdirSync(OUT_DIR, { recursive: true });

const files = readdirSync(SRC_DIR).filter((f) => /\.(png|jpe?g)$/i.test(f));

for (const file of files) {
   const name = file.replace(/\.(png|jpe?g)$/i, "");
   const inputPath = path.join(SRC_DIR, file);
   const outputPath = path.join(OUT_DIR, `${name}.jpg`);

   try {
      const info = await sharp(inputPath)
         .resize(1920, 1920, { fit: "inside", withoutEnlargement: true })
         .jpeg({ quality: 82 })
         .toFile(outputPath);

      console.log(
         `${file} -> optimized/${name}.jpg (${(info.size / 1024).toFixed(0)}KB)`,
      );
   } catch (err) {
      console.error(`Failed on ${file}:`, err.message);
   }
}
