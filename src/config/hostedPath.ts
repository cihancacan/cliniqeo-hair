export const HAIR_MOUNT_PATH = '/greffe-cheveux-turquie';
export const HAIR_UPSTREAM_ORIGIN = 'https://cliniqeo-hair.vercel.app';

function normalisePath(pathname: string) {
  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return withLeadingSlash.length > 1 ? withLeadingSlash.replace(/\/+$/, '') : withLeadingSlash;
}

export function isMountedHairPath(pathname = typeof window !== 'undefined' ? window.location.pathname : '/') {
  const normalised = normalisePath(pathname);
  return normalised === HAIR_MOUNT_PATH || normalised.startsWith(`${HAIR_MOUNT_PATH}/`);
}

export function stripHairMountPath(pathname: string) {
  const normalised = normalisePath(pathname);
  if (normalised === HAIR_MOUNT_PATH) return '/';
  if (normalised.startsWith(`${HAIR_MOUNT_PATH}/`)) {
    return normalised.slice(HAIR_MOUNT_PATH.length) || '/';
  }
  return normalised;
}

export function getAppPathname() {
  return stripHairMountPath(typeof window !== 'undefined' ? window.location.pathname : '/');
}

export function getHairRouterBasename() {
  return isMountedHairPath() ? HAIR_MOUNT_PATH : undefined;
}

export function mountHairPath(pathname: string) {
  const appPath = stripHairMountPath(pathname);
  return isMountedHairPath() ? `${HAIR_MOUNT_PATH}${appPath === '/' ? '' : appPath}` : appPath;
}

export function getHairApiUrl(pathname: string) {
  return mountHairPath(pathname);
}

export function getHairAssetUrl(pathname: string) {
  const appPath = stripHairMountPath(pathname);
  return isMountedHairPath() ? `${HAIR_UPSTREAM_ORIGIN}${appPath}` : appPath;
}
