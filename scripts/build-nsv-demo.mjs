import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const portfolioRoot = path.join(__dirname, "..");
const clientRoot = path.join(portfolioRoot, "..", "заметки", "nvs-misha", "client");
const demoConfig = path.join(portfolioRoot, "nsv-demo-config");
const outputDir = path.join(portfolioRoot, "public", "demo", "nsv");

const systemBackup = path.join(clientRoot, "public", "config", "system.js.bak");
const laptopsBackup = path.join(clientRoot, "public", "config", "laptops.bak");

function backupConfigs() {
  fs.copyFileSync(
    path.join(clientRoot, "public", "config", "system.js"),
    systemBackup
  );
  fs.cpSync(
    path.join(clientRoot, "public", "config", "laptops"),
    laptopsBackup,
    { recursive: true }
  );
}

function restoreConfigs() {
  if (fs.existsSync(systemBackup)) {
    fs.copyFileSync(systemBackup, path.join(clientRoot, "public", "config", "system.js"));
    fs.rmSync(systemBackup, { force: true });
  }
  if (fs.existsSync(laptopsBackup)) {
    fs.rmSync(path.join(clientRoot, "public", "config", "laptops"), {
      recursive: true,
      force: true,
    });
    fs.cpSync(laptopsBackup, path.join(clientRoot, "public", "config", "laptops"), {
      recursive: true,
    });
    fs.rmSync(laptopsBackup, { recursive: true, force: true });
  }
}

function applyDemoConfigs() {
  fs.copyFileSync(
    path.join(demoConfig, "system.js"),
    path.join(clientRoot, "public", "config", "system.js")
  );
  fs.cpSync(path.join(demoConfig, "laptops"), path.join(clientRoot, "public", "config", "laptops"), {
    recursive: true,
  });
}

function trimOutputConfigs() {
  const configDir = path.join(outputDir, "config");
  if (!fs.existsSync(configDir)) return;

  for (const entry of fs.readdirSync(configDir)) {
    if (entry !== "laptops" && entry !== "system.js") {
      const target = path.join(configDir, entry);
      fs.rmSync(target, { recursive: true, force: true });
    }
  }
}

function pruneNsvOutput() {
  const removePaths = [
    "docs",
    ".htaccess",
    "_redirects",
    "robots.txt",
    "sw.js",
    "manifest.json",
    "asset-manifest.json",
  ];

  for (const rel of removePaths) {
    fs.rmSync(path.join(outputDir, rel), { recursive: true, force: true });
  }

  const headersDir = path.join(outputDir, "images", "headers");
  if (fs.existsSync(headersDir)) {
    for (const file of fs.readdirSync(headersDir)) {
      if (file !== "header-laptop.webp") {
        fs.rmSync(path.join(headersDir, file), { recursive: true, force: true });
      }
    }
  }

  const staticDir = path.join(outputDir, "static");
  if (fs.existsSync(staticDir)) {
    const walk = (dir) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          walk(full);
          continue;
        }
        if (entry.name.endsWith(".map") || entry.name.endsWith(".LICENSE.txt")) {
          fs.rmSync(full, { force: true });
        }
      }
    };
    walk(staticDir);
  }
}

console.log("Сборка демо NSV (ноутбуки)...");

backupConfigs();
applyDemoConfigs();

try {
  execSync("npm run build", {
    cwd: clientRoot,
    stdio: "inherit",
    env: {
      ...process.env,
      REACT_APP_DEMO_MODE: "true",
      PUBLIC_URL: "/demo/nsv",
      CI: "false",
    },
  });

  fs.rmSync(outputDir, { recursive: true, force: true });
  fs.cpSync(path.join(clientRoot, "build"), outputDir, { recursive: true });
  fs.copyFileSync(
    path.join(demoConfig, "disclaimer.html"),
    path.join(outputDir, "disclaimer.html")
  );
  fs.cpSync(path.join(demoConfig, "thank_you"), path.join(outputDir, "thank_you"), {
    recursive: true,
  });
  trimOutputConfigs();
  pruneNsvOutput();

  console.log(`Готово: ${outputDir}`);
} finally {
  restoreConfigs();
}
