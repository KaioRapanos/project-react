// utils.js
const assets = import.meta.glob('/src/assets/**/*', { eager: true });

const assetMap = {};

for (const path in assets) {
  const key = path.replace('/src/assets/', '');
  assetMap[key] = assets[path].default;
}

export const getImageUrl = (path) => {
  if (assetMap[path]) {
    return assetMap[path];
  } else {
    throw new Error(`File not found: ${path}`);
  }
};
