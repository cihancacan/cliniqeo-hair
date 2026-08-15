export const HAIR_MOUNT_PATH = '/greffe-cheveux-turquie';
export const ENGLISH_HAIR_MOUNT_PATH = '/en/hair-transplant-turkey';
export const HAIR_UPSTREAM_ORIGIN = 'https://cliniqeo-hair.vercel.app';

type HairMountPath = typeof HAIR_MOUNT_PATH | typeof ENGLISH_HAIR_MOUNT_PATH;

function normalisePath(pathname: string) {
  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return withLeadingSlash.length > 1 ? withLeadingSlash.replace(/\/+$/, '') : withLeadingSlash;
}

function detectMountPath(pathname: string): HairMountPath | null {
  const normalised = normalisePath(pathname);
  if (normalised === ENGLISH_HAIR_MOUNT_PATH || normalised.startsWith(`${ENGLISH_HAIR_MOUNT_PATH}/`)) {
    return ENGLISH_HAIR_MOUNT_PATH;
  }
  if (normalised === HAIR_MOUNT_PATH || normalised.startsWith(`${HAIR_MOUNT_PATH}/`)) {
    return HAIR_MOUNT_PATH;
  }
  return null;
}

const initialBrowserPath = typeof window !== 'undefined' ? normalisePath(window.location.pathname) : '/';
let activeMountPath: HairMountPath | null = detectMountPath(initialBrowserPath);
let preparedEnglishAppPath: string | null = null;
let originalEnglishPublicPath: string | null = null;

function toEnglishAppPath(pathname: string) {
  const normalised = normalisePath(pathname);
  if (normalised === ENGLISH_HAIR_MOUNT_PATH) return '/hair-transplant-turkey';

  const suffix = normalised.startsWith(`${ENGLISH_HAIR_MOUNT_PATH}/`)
    ? normalised.slice(ENGLISH_HAIR_MOUNT_PATH.length)
    : normalised;

  if (suffix === '/fue-hair-transplant-turkey' || suffix === '/dhi-hair-transplant-turkey') {
    return suffix;
  }
  if (suffix === '/hair-transplant-turkey') return '/hair-transplant-turkey';
  if (suffix === '/en' || suffix.startsWith('/en/')) return suffix;
  return `/en${suffix === '/' ? '' : suffix}`;
}

export function prepareHairRouterPath() {
  if (typeof window === 'undefined') return;
  activeMountPath = detectMountPath(window.location.pathname) ?? activeMountPath;
  if (activeMountPath !== ENGLISH_HAIR_MOUNT_PATH) return;

  originalEnglishPublicPath = normalisePath(window.location.pathname);
  preparedEnglishAppPath = toEnglishAppPath(originalEnglishPublicPath);
  window.history.replaceState(
    window.history.state,
    '',
    `${preparedEnglishAppPath}${window.location.search}${window.location.hash}`,
  );
}

export function restoreMountedHairUrl() {
  if (
    typeof window === 'undefined' ||
    activeMountPath !== ENGLISH_HAIR_MOUNT_PATH ||
    !originalEnglishPublicPath ||
    !preparedEnglishAppPath ||
    normalisePath(window.location.pathname) !== preparedEnglishAppPath
  ) {
    return;
  }

  window.history.replaceState(
    window.history.state,
    '',
    `${originalEnglishPublicPath}${window.location.search}${window.location.hash}`,
  );
}

export function isMountedHairPath(pathname = typeof window !== 'undefined' ? window.location.pathname : '/') {
  return detectMountPath(pathname) !== null || (
    typeof window !== 'undefined' &&
    pathname === window.location.pathname &&
    activeMountPath !== null
  );
}

export function stripHairMountPath(pathname: string) {
  const normalised = normalisePath(pathname);
  const detectedMount = detectMountPath(normalised);

  if (detectedMount === ENGLISH_HAIR_MOUNT_PATH) {
    return toEnglishAppPath(normalised);
  }
  if (detectedMount === HAIR_MOUNT_PATH) {
    if (normalised === HAIR_MOUNT_PATH) return '/';
    return normalised.slice(HAIR_MOUNT_PATH.length) || '/';
  }
  return normalised;
}

export function getAppPathname() {
  return stripHairMountPath(typeof window !== 'undefined' ? window.location.pathname : '/');
}

export function getHairRouterBasename() {
  return activeMountPath === HAIR_MOUNT_PATH ? HAIR_MOUNT_PATH : undefined;
}

export function mountHairPath(pathname: string) {
  const appPath = stripHairMountPath(pathname);
  if (!activeMountPath) return appPath;

  if (activeMountPath === HAIR_MOUNT_PATH) {
    return `${HAIR_MOUNT_PATH}${appPath === '/' ? '' : appPath}`;
  }

  if (appPath === '/' || appPath === '/en' || appPath === '/hair-transplant-turkey') {
    return ENGLISH_HAIR_MOUNT_PATH;
  }

  const publicSuffix = appPath.startsWith('/en/') ? appPath.slice(3) : appPath;
  return `${ENGLISH_HAIR_MOUNT_PATH}${publicSuffix}`;
}

export function getHairApiUrl(pathname: string) {
  return mountHairPath(pathname);
}

export function getHairAssetUrl(pathname: string) {
  const normalised = normalisePath(pathname);
  const appPath = detectMountPath(normalised) ? stripHairMountPath(normalised) : normalised;
  return activeMountPath ? `${HAIR_UPSTREAM_ORIGIN}${appPath}` : appPath;
}
