// 示例方法，没有实际意义
export function trim(str: string) {
  return str.trim();
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function debounce(fn: Function, delay: number = 300) {
  let timeoutId: NodeJS.Timeout;
  return function (...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function throttle(fn: Function, limit: number = 300) {
  let inThrottle: boolean;
  return function (...args: any[]) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
