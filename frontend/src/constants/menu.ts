interface MenuItem {
  path: string;
  name: string;
}

export const menuItems: MenuItem[] = [
  { path: '/', name: '홈' },
  { path: '/schedule', name: '일정' },
  { path: '/standings', name: '순위' },
  { path: '/community', name: '게시판' },
];

export const userMenuItems: MenuItem[] = [
  { path: '/my', name: '마이페이지' },
];
