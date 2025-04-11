export const mapDataOptions4Select = (data, valueName = 'value', labelName = 'label') => {
  return (Array.isArray(data) ? data : []).map((_item) => {
    let item = { ..._item };
    let { id, name, label, value } = item;
    label = name || item[labelName];
    value = id || item[valueName];
    return { ..._item, label, value };
  });
};

export const mapDataOptions5Select = (data, valueName = 'value', subLabelName = 'subLabel') => {
  return (Array.isArray(data) ? data : []).map((_item) => {
    let item = { ..._item };
    let { id, name, label, value } = item;
    label = item[subLabelName];
    value = id || item[valueName];
    return { ..._item, label, value };
  });
};

export function formatPrice(x, isShow = false, type = '.') {
  if (!x) return '0' + (isShow ? ' đ' : '');
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, type) + (isShow ? ' đ' : '');
}

export const isJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export const formatCurrency = (value, decimals = 2, dec_point = ',', thousands_sep = '.') => {
  dec_point = typeof dec_point !== 'undefined' ? dec_point : '.';
  thousands_sep = typeof thousands_sep !== 'undefined' ? thousands_sep : ',';

  var parts = Number(`${value || 0}`).toFixed(decimals).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_sep);

  return parts.join(dec_point);
}

export const isEqual = (objA, objB) => {
  // If both objects are the same reference, they are equal
  if (objA === objB) {
    return true;
  }

  // If either of the objects is not an object or is null, they are not equal
  if (typeof objA !== 'object' || typeof objB !== 'object' || objA === null || objB === null) {
    return false;
  }

  // Get the keys of both objects
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // If the number of keys is different, they are not equal
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Check if all keys and their values are equal recursively
  for (const key of keysA) {
    if (!keysB.includes(key) || !isEqual(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}